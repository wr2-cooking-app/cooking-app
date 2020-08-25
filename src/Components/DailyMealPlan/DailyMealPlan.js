import React from 'react';
import { Link } from "react-router-dom"
import './DailyMealPlan.scss'


function DailyMealPlan (props) {

  // console.log(meals.meals.Monday)
  const {meals} = props;

  return (
    <div>
      <div className='day-display-container'>
      <section className='day-card'>
        <h2>Monday</h2>
        <section className='day-meal-info'>
        <span className='time-row'>Breakfast: <span>{!meals.Monday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Monday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Monday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Monday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Monday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Monday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Tuesday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Tuesday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Tuesday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Tuesday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Wednesday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Wednesday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Wednesday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Wednesday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Wednesday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Wednesday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Wednesday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Thursday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Thursday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Thursday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Thursday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Thursday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Thursday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Thursday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Friday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Friday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Friday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Friday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Friday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Friday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Friday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Saturday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Saturday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Saturday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Saturday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Saturday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Saturday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Saturday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Sunday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Sunday.Breakfast ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Sunday.Breakfast.title}</span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Sunday.Lunch ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Sunday.Lunch.title}</span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Sunday.Dinner ? <Link to='/search'><button>ADD MEAL</button></Link> : <span>{meals.Tuesday.Sunday.Dinner.title}</span> }</span></span>
        </section>
      </section>
      </div>
    </div>
  )
}

export default DailyMealPlan; 



//  <div>
//           <p>{weekArr[0].day}</p>
//       </div>
//       {weekArr.map((plan, i) => (
//         <section className='outer-day-box'>
//           <section className='day-box'>
//               <span   className='day-box-number'>{plan.title}</span>
//               <img 
//                 onClick={() => handleDelete(plan.id)}
//                 className='day-box-delete'
//                 src='https://image.flaticon.com/icons/svg/3209/3209887.svg' alt='delete'/>
//           </section>
//         </section>
//       ))}