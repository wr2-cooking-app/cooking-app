import React from 'react';


function DailyMealPlan (props) {

  const {dailyMealPlan} = props
  return (
    <div className='meal-plan-container'>
              {/* <h1> Monday </h1>
              <div>
              <span> Breakfast </span> */}
              {dailyMealPlan.day === "Monday" && dailyMealPlan.time === "Breakfast"
              ?
              <span   className='day-box-number'>{dailyMealPlan.title}</span>
              : null 
      }
              {/* <br></br>
              <span> Lunch </span> */}
              {dailyMealPlan.day === "Monday" && dailyMealPlan.time === "Lunch"
              ?
              <span   className='day-box-number'>{dailyMealPlan.title}</span>
              : null
       }
              {/* <br></br>
              <span> Dinner </span> */}
              {dailyMealPlan.day === "Monday" && dailyMealPlan.time === "Dinner"
              ?
              <span   className='day-box-number'>{dailyMealPlan.title}</span>
              : null
      }
    {/* </div> */}
    </div>
  )
}

export default DailyMealPlan;