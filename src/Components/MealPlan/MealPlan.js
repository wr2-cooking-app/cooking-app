import React, { useState, useContext, useEffect } from 'react';
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
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
    console.log(res)
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

  console.log(weekArr)
  console.log(mealPlanId)
  return (
    <div className='meal-plan-container'>
      {!weekArr[0] 
      ? <p>Loading...</p>
      : <h1>{weekArr[0].name}</h1>}
      <div>
          {/* <p>{weekArr[0].day}</p> */}
      </div>
      {weekArr.map((plan, i) => (
        <section className='outer-day-box'>
          <section className='day-box'>
              {/* <p>{plan.day}</p> */}
              {/* <span  className='day-box-meal'>{plan.meal}: </span> */}
              <span   className='day-box-number'>{plan.title}</span>
              <img 
                onClick={() => handleDelete(plan.id)}
                className='day-box-delete'
                src='https://image.flaticon.com/icons/svg/3209/3209887.svg' alt='delete'/>
          </section>
        </section>
      ))}
    </div>
  )
}

export default MealPlan;