import Axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import DailyMealPlan from "../DailyMealPlan/DailyMealPlan";
import "./MealPlan.scss";

function MealPlan(props) {
  const [weekArr, setWeekArr] = useState([]);
  const { mealPlanId, setMealPlanId } = useContext(MealPlanIdContext);

  // valiate that mealPlanId is on context
  const params = useParams();
  useEffect(() => {
    if (!mealPlanId) setMealPlanId(+params.id);
  }, [mealPlanId, params.id, setMealPlanId]);

  const getPlan = useCallback(() => {
    console.log("hello1");
    Axios.get(`/api/meal-plan/${mealPlanId}`)
      .then((res) => {
        setWeekArr(res.data);
      })
      .catch((err) => console.log(err));
  }, [mealPlanId]);

  const handleDelete = (id) => {
    Axios.delete(`/api/delete/recipe/${id}`)
      .then(() => {
        getPlan();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPlan();
  }, [getPlan, mealPlanId]);

  return (
    <div className="meal-plan-container">
      {mealPlanId && (
        <Link to={`/cart/${mealPlanId}`}>
          <button>Generate shopping cart</button>
        </Link>
      )}
      {!weekArr.Monday ? <p>No Meals To View</p> : <DailyMealPlan meals={weekArr} deleteFn={handleDelete} />}
    </div>
  );
}

export default MealPlan;
