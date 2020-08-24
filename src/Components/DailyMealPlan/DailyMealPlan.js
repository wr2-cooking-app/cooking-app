import React from 'react';


function DailyMealPlan (props) {

  const {dailyMealPlan} = props
  return (
    <div className='meal-plan-container'>
              <h1> Monday </h1>
              <span> Breakfast </span>
              {dailyMealPlan.plan.day === "Monday" && dailyMealPlan.plan.time === "Breakfast"
              ?
              <span   className='day-box-number'>{dailyMealPlan.plan.title}</span>
              : null 
      }
              <br></br>
              <span> Lunch </span>
              {dailyMealPlan.plan.day === "Monday" && dailyMealPlan.plan.time === "Lunch"
              ?
              <span   className='day-box-number'>{dailyMealPlan.plan.title}</span>
              : null
       }
              <br></br>
              <span> Dinner </span>
              {dailyMealPlan.plan.day === "Monday" && dailyMealPlan.plan.time === "Dinner"
              ?
              <span   className='day-box-number'>{dailyMealPlan.plan.title}</span>
              : null
      }
    </div>
  )
}

export default DailyMealPlan;