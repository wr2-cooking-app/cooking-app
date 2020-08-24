const Axios = require("axios");

const { SPOONACULAR_API_KEY } = process.env;

const recipeSearchEndpoint = "https://api.spoonacular.com/recipes/search";

module.exports = {
  search: async (req, res) => {
    const { title, cuisine, diet, intolerances, mealType } = req.query;
    console.log(req.query);
    const apiRes = await Axios.get(recipeSearchEndpoint, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query: title,
        cuisine: cuisine,
        diet: diet,
        intolerances: intolerances,
        type: mealType,
        number: 9,
        instructionsRequired: true
      }
    });
    res.status(200).send(apiRes.data);
  },

  getRecipe: async (req, res) => {
    console.log(`get recipe hit`);

    const { id } = req.params;
    const apiRes = await Axios.get(
      `https://api.spoonacular.com/recipes/informationBulk?apiKey=${SPOONACULAR_API_KEY}&ids=${id}`
    );
    res.status(200).send(apiRes.data);
  },

  addRecipe: (req, res) => {
    console.log(`recipe added to db`)
    const db = req.app.get('db');

    const { recipeId, mealPlanId, day, time, title } = req.body;

    db.recipe.add_recipe({ recipeId, mealPlanId, day, time, title })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
  },

  deleteRecipe: (req, res) => {
    console.log('recipe deleted')
    const db = req.app.get('db');

    const { id } = req.params;

    db.recipe.delete_recipe({id})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
  }
};
