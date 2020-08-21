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
        number: 10,
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
  }
};
