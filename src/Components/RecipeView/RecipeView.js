import React, { useState, useEffect, useContext } from "react";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
import Axios from "axios";
import "./RecipeView.scss";

function RecipeView() {
  const [recipe, setRecipe] = useState([{}]);
  const { recipeId } = useContext(RecipeIdContext);
  const [mealPlanId, setMealPlanId] = useContext(MealPlanIdContext);
  const [day, setDay] = useState('Sunday');
  const [time, setTime] = useState('Breakfast');

  //set recipe information to display
  useEffect(() => {
    displayRecipe()
  }, [recipeId]);

    //retrieve recipe data from API
    const displayRecipe = () => {
      Axios.get(`/api/recipe/${recipeId}`)
        .then((res) => {
          setRecipe(res.data);
        })
        .catch((err) => console.log(err));
    };

    const handleAdd = () => {
      Axios.post('/api/add-recipe', {recipeId, mealPlanId, day, time, title: recipe[0].title})
      .then( () => {
        setTime('Breakfast')
        setDay('Sunday')
      })
      .catch(err => console.log(err))
    }

  console.log(time)
  return (
    <div className="recipe-display">
      <div className="recipe-view-container">
        {/* <div>
          <h1 style={{color: 'black'}}>Recipe View</h1>
        </div> */}
        {!recipe[0].extendedIngredients ? (
          <h1>Loading</h1>
        ) : (
          <div className="recipe-info">
            <section className="recipe-directions">
            <h1>{recipe[0].title}</h1>
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
      <div className="seclector-area">
        <div className="selectors">
          <select className="options" value={day} onChange={e => setDay(e.target.value)}>
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
          <select className="options" value={time} onChange={e => setTime(e.target.value)}>
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
