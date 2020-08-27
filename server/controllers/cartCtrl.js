const { default: Axios } = require("axios");

const { SPOONACULAR_API_KEY } = process.env;

const recipeInfoEndpoint = "https://api.spoonacular.com/recipes/informationBulk";

module.exports = {
  getCart: async (req, res) => {
    const db = req.app.get("db");

    // meal plan ID
    let { id } = req.params;
    id = +id;

    // retrieve list of recipe IDs to get information for
    const dbRes = await db.cart.get_meal_plan_recipes(id);

    // get recipes from spoonacular API
    const recipesRes = await Axios.get(recipeInfoEndpoint, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        ids: dbRes.reduce((acc, obj) => `${acc},${obj.recipe_id}`, dbRes[0].recipe_id)
      }
    });

    let amounts = {};

    // loop through all recipes and add their ingredient amounts together
    // this is O(n^2) :(
    recipesRes.data.forEach((recipe) => {
      recipe.extendedIngredients.forEach((ingredient) => {
        const { aisle, amount, image, name, id } = ingredient;
        const measure = ingredient.measures["us"].unitShort;
        if (amounts[id]) amounts[id].amount += amount;
        else amounts[id] = { aisle, amount, image, measure, name };
      });
    });

    // convert to an array
    let output = [];
    for (const key in amounts) {
      output.push(amounts[key]);
    }

    // sort the array
    output.sort(function (a, b) {
      const aisleA = a.aisle.toUpperCase();
      const aisleB = b.aisle.toUpperCase();

      if (aisleA < aisleB) {
        return -1;
      } else if (aisleA > aisleB) {
        return 1;
      } else {
        return 0;
      }
    });

    res.status(200).send(output);
  }
};
