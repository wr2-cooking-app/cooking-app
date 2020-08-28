import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { DayContext } from "../../contexts/DayContext";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import { TimeContext } from "../../contexts/TimeContext";
import "./DailyMealPlan.scss";

function MealPlanMeal({ dayName, deleteFn, meal, time }) {
  const { setDay } = useContext(DayContext);
  const { setTime } = useContext(TimeContext);
  const { setRecipeId } = useContext(RecipeIdContext);

  const history = useHistory();

  return (
    <span className="time-row">
      <label className="time">{time}: </label>
      <span>
        {!meal ? (
          <Link to="/search" style={{ textDecoration: "none"}}>
            <button
              className="add-btn"
              onClick={() => {
                setDay(dayName);
                setTime(time);
              }}
            >
              ADD MEAL
            </button>
          </Link>
        ) : (
          <span>
            <label className="recipe-title"
              onClick={() => {
                setRecipeId(meal.id);
                history.push("/search");
              }}
            >
              {meal.title}
            </label>
            <img
              onClick={() => deleteFn(meal.id)}
              className="day-recipe-delete"
              src="https://image.flaticon.com/icons/svg/149/149147.svg"
              alt="delete"
            />
          </span>
        )}
      </span>
    </span>
  );
}

function MealPlanDay({ dayMeals, dayName, deleteFn }) {
  return (
    <section className="day-card">
      <h2>{dayName}</h2>
      <section className="day-meal-info">
        {["Breakfast", "Lunch", "Dinner"].map((time) => (
          <MealPlanMeal dayName={dayName} deleteFn={deleteFn} meal={dayMeals[time]} time={time} />
        ))}
      </section>
    </section>
  );
}

function DailyMealPlan({ meals, deleteFn }) {
  return (
    <div className="day-display-container">
      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((dayName) => (
        <MealPlanDay dayMeals={meals[dayName]} dayName={dayName} deleteFn={deleteFn} />
      ))}
    </div>
  );
}

export default DailyMealPlan;
