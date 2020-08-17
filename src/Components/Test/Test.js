import Axios from "axios";
import React, { useState } from "react";
import "./Test.scss";

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const search = async () => {
    let res = await Axios.get("/test/spoonacular", { params: { query: searchQuery } });
    setRecipes(res.data.results);
  };

  return (
    <div className="test-comp">
      <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      {recipes.map((recipe, i) => (
        <section key={i} className="recipe-test">
          <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt="recipe" />
          <label>{recipe.title}</label>
        </section>
      ))}
    </div>
  );
};
