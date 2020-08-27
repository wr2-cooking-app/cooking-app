import Axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import DailyMealPlan from "../DailyMealPlan/DailyMealPlan";
import "./MealPlan.scss";

function MealPlan(props) {
  const [weekArr, setWeekArr] = useState([]);
  const { mealPlanId } = useContext(MealPlanIdContext);

  const getPlan = useCallback(() => {
    console.log("hello1");
    Axios.get(`/api/meal-plan/${mealPlanId}`)
      .then((res) => {
        setWeekArr(res.data);
      })
      .catch((err) => console.log(err));
  }, [mealPlanId]);

  useEffect(() => {
    getPlan();
  }, [getPlan, mealPlanId]);

  const handleDelete = (id) => {
    Axios.delete(`/api/delete/recipe/${id}`)
      .then(() => {
        getPlan();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="meal-plan-container">
      {!weekArr.Monday ? <p>No Meals To View</p> : <DailyMealPlan meals={weekArr} deleteFn={handleDelete} />}
    </div>
  );
}

export default MealPlan;
