import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import "./RecipeView.scss";

function RecipeView() {
  const [recipe, setRecipe] = useState(null);
  const [day, setDay] = useState("Sunday");
  const [time, setTime] = useState("Breakfast");
  const [loading, setLoading] = useState(false);

  const { recipeId } = useContext(RecipeIdContext);
  const { mealPlanId } = useContext(MealPlanIdContext);

  //set recipe information to display
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await Axios.get(`/api/recipe/${recipeId}`);
      setRecipe(res.data[0]);
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
      <div className="recipe-view-container">
        {!recipe ? (
          <h1>{loading ? "Loading..." : "Select a recipe"}</h1>
        ) : (
          <div className="recipe-info">
            <section className="recipe-directions">
              <h1>{recipe.title}</h1>
              <img className="recipe-pic" src={recipe.image} alt="food" />
              {recipe.extendedIngredients.map((amount, i) => (
                <section>
                  <span className="ingredient-amount">{amount.measures.us.amount}</span>
                  <span className="ingredient-measurement">{amount.measures.us.unitShort}</span>
                  <span className="ingredient-name">{amount.name}</span>
                </section>
              ))}
            </section>
            <section className="recipe-instructions">
              {recipe.analyzedInstructions[0].steps.map((steps, i) => (
                <section>
                  <span>{steps.number}</span>
                  <span className="recipe-instructions-step">{steps.step}</span>
                </section>
              ))}
            </section>
          </div>
        )}
      </div>
      <div className="seclector-area">
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
          <button onClick={handleAdd}> Add </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
