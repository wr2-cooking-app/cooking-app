import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DayContext } from "../../contexts/DayContext";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import { TimeContext } from "../../contexts/TimeContext";
import "./RecipeView.scss";
import NumericInput from "react-numeric-input";

function RecipeView() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [units, setUnits] = useState("us");
  const [servings, setServings] = useState(null);

  const { recipeId } = useContext(RecipeIdContext);
  const { mealPlanId } = useContext(MealPlanIdContext);
  const { day, setDay } = useContext(DayContext);
  const { time, setTime } = useContext(TimeContext);

  //set recipe information to display
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await Axios.get(`/api/recipe/${recipeId}`);
      setRecipe(res.data[0]);
      setServings(res.data[0].servings);
      setLoading(false);
    };
    if (recipeId) fetchData();
  }, [recipeId]);

  const handleAdd = () => {
    const addPost = async () => {
      await Axios.post("/api/add-recipe", { recipeId, mealPlanId, day, time, title: recipe.title });
      setTime("Breakfast");
      setDay("Sunday");
    };
    addPost();
  };

  return (
    <div className="recipe-display">
      <div className="selector-area">
        <div className="selectors">
          <select className="options" value={day} onChange={(e) => setDay(e.target.value)}>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </div>
        <div className="selectors">
          <select className="options" value={time} onChange={(e) => setTime(e.target.value)}>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>
        <div>
          <button className="add-button" onClick={handleAdd}>
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
      <div className="recipe-view-container">
        {recipe ? (
          <div className="recipe-info">
            <div className="recipe-upper-container">
              <img className="recipe-pic" src={recipe.image} alt="food" />
              <h1>{recipe.title}</h1>
            </div>
            <div className="recipe-summary-container">
              <p className="recipe-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </div>
            <h2>Ingredients:</h2>
            <div className="recipe-servings-container">
              <label>Servings: </label>
              <NumericInput min={1} value={servings} onChange={(value) => setServings(value)} />
              <label>Units: </label>
              <select className="options" value={units} onChange={(e) => setUnits(e.target.value)}>
                <option>metric</option>
                <option>us</option>
              </select>
            </div>
            <table className="recipe-ingredients-table">
              {recipe.extendedIngredients.map((ingredient, i) => (
                <tr>
                  <td>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="Ingredient" />
                  </td>
                  <td>
                    {ingredient.measures[units].amount * (servings / recipe.servings)}{" "}
                    {ingredient.measures[units].unitShort}
                  </td>
                  <td>{ingredient.name}</td>
                </tr>
              ))}
            </table>
            <h2>Instructions</h2>
            <section className="recipe-instructions">
              {recipe.analyzedInstructions[0].steps.map((steps, i) => (
                <section>
                  <span>{steps.number}</span>
                  <span className="recipe-instructions-step">{steps.step}</span>
                </section>
              ))}
            </section>
          </div>
        ) : (
          <label>{loading ? "Loading..." : "Select a recipe"}</label>
        )}
      </div>
    </div>
  );
}

export default RecipeView;
