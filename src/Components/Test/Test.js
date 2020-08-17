import Axios from "axios";
import React, { useEffect, useState } from "react";

import "./Test.scss";

export default () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const test = async () => {
      let res = await Axios.get("/test/spoonacular");
      setRecipes(res.data.results);
    };
    test();
  }, []);

  return (
    <div className="test-comp">
      {recipes.map((recipe, i) => (
        <section key={i} className="recipe-test">
          <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt="recipe" />
          <label>{recipe.title}</label>
        </section>
      ))}
    </div>
  );
};
