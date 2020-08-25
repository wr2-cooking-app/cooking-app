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
    console.log('hello2')
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

const mappedArr = weekArr.map((plan, i) => (
           <DailyMealPlan dailyMealPlan={plan}/>
))

  console.log(weekArr)
  console.log(mealPlanId)
  return (
    <div className='meal-plan-container'>
      {!weekArr[0]
      ? <p>No Meals To View</p>
      : <h1>{weekArr[0].name}</h1>}
      <div>
        <div>
          {mappedArr}
        </div>
      </div>
    </div>
  )
}

export default MealPlan;