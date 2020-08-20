import React, { useState, useEffect, useContext } from "react";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import Axios from "axios";
import "./RecipeView.scss";

function RecipeView(props) {
  const [recipe, setRecipe] = useState([{}]);
  const [recipeId, setRecipeId] = useContext(RecipeIdContext);

  //set recipe information to display
  useEffect(() => {
    displayRecipe();
  }, [recipeId]);

  //retrieve recipe data from API
  const displayRecipe = () => {
    Axios.get(`/api/recipe/${recipeId}`)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="recipe-view-container">
      <div>
        <h1>Recipe View</h1>
      </div>
      {!recipe[0].extendedIngredients ? (
        <h1>Loading</h1>
      ) : (
        <div className="recipe-info">
          <section className="recipe-directions">
            <img className="recipe-pic" src={recipe[0].image} alt="food" />
            {recipe[0].extendedIngredients.map((amount, i) => (
              <section>
                <span className="ingredient-amount">
                  {amount.measures.us.amount}
                </span>
                <span className="ingredient-measurement">
                  {amount.measures.us.unitShort}
                </span>
                <span className="ingredient-name">{amount.name}</span>
              </section>
            ))}
          </section>
          <section className="recipe-instructions">
            {recipe[0].analyzedInstructions[0].steps.map((steps, i) => (
              <section>
                <span>{steps.number}</span>
                <span className="recipe-instructions-step">{steps.step}</span>
              </section>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default RecipeView;
