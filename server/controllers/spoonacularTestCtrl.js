const testResults = require("../../planning/recipe search example.json");

module.exports = {
  testQuery: async (req, res) => {
    const results = testResults;
    res.status(200).send(results);
  }
};
