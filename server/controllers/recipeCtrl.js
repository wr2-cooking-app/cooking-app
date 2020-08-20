const Axios = require("axios");

const { SPOONACULAR_API_KEY } = process.env;

const recipeSearchEndpoint = "https://api.spoonacular.com/recipes/search";

module.exports = {
  search: async (req, res) => {
    const apiRes = await Axios.get(recipeSearchEndpoint, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query: req.query.title,
        number: 10,
        instructionsRequired: true
      }
    });
    res.status(200).send(apiRes.data);
  }
};
