import React, { useState, useContext, useEffect } from 'react';
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
import DailyMealPlan from '../DailyMealPlan/DailyMealPlan';
import Axios from 'axios';
import './MealPlan.scss';


function MealPlan (props) {
const [weekArr, setWeekArr] = useState([]);
const [mealPlanId, setMealPlanId] = useContext(MealPlanIdContext);

useEffect(() => {
  getPlan()
}, [mealPlanId]);

const getPlan = () => {
  console.log('hello1')
  Axios.get(`/api/meal-plan/${mealPlanId}`)
  .then(res => {
    setWeekArr(res.data)
  })
  .catch(err => console.log(err))
}

const handleDelete = (id) => {
  Axios.delete(`/api/delete/recipe/${id}`)
  .then( () => {
    getPlan()
  })
  .catch(err => console.log(err))
}


  // console.log(weekArr.Monday)
  // console.log(mealPlanId)
  return (
    <div className='meal-plan-container'>
      {!weekArr.Monday
      ? <p>No Meals To View</p>
      : <DailyMealPlan meals={weekArr} deleteFn={handleDelete}/>} 
    </div>
  )
}

export default MealPlan;