import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { DayContext } from '../../contexts/DayContext';
import { TimeContext } from '../../contexts/TimeContext';
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
import Axios from 'axios';
import './DailyMealPlan.scss'


function DailyMealPlan (props) {

  const {day, setDay} = useContext(DayContext);
  const {time, setTime} = useContext(TimeContext);
  const {mealPlanId, setMealPlanId} = useContext(MealPlanIdContext);

  const { meals, deleteFn } = props;

  const handleAdd = (dayInput, timeInput) => {
    setDay(dayInput);
    setTime(timeInput);
  }

  // console.log(meals)
  return (
      <div className='day-display-container'>
      <section className='day-card'>
        <h2>Monday</h2>
        <section className='day-meal-info'>
        <span className='time-row'>Breakfast: <span>{!meals.Monday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Monday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Monday.Breakfast.title}
        <img 
            onClick={() => deleteFn(meals.Monday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Monday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Monday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Monday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Monday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Monday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Monday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Monday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Monday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Tuesday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Tuesday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Tuesday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Tuesday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Tuesday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Tuesday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Tuesday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Tuesday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Tuesday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Tuesday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Tuesday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Tuesday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Tuesday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Wednesday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Wednesday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Wednesday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Wednesday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Wednesday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Wednesday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Wednesday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Wednesday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Wednesday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Wednesday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Wednesday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Wednesday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Wednesday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Thursday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Thursday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Thursday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Thursday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Thursday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Thursday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Thursday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Thursday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Thursday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Thursday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Thursday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Thursday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Thursday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Friday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Friday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Friday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Friday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Friday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Friday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Friday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Friday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Friday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Friday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Friday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Friday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Friday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Saturday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Saturday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Saturday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Saturday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Saturday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Saturday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Saturday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Saturday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Saturday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Saturday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Saturday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Saturday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Saturday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <section className='day-card'>
        <h2>Sunday</h2>
        <section className='day-meal-info'>
          <span className='time-row'>Breakfast: <span>{!meals.Sunday.Breakfast ? <Link to='/search'><button onClick={() => handleAdd('Sunday', 'Breakfast')}>ADD MEAL</button></Link> : <span>{meals.Sunday.Breakfast.title}
          <img 
            onClick={() => deleteFn(meals.Sunday.Breakfast.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Lunch: <span>{!meals.Sunday.Lunch ? <Link to='/search'><button onClick={() => handleAdd('Sunday', 'Lunch')}>ADD MEAL</button></Link> : <span>{meals.Sunday.Lunch.title}
          <img 
            onClick={() => deleteFn(meals.Sunday.Lunch.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
          <span className='time-row'>Dinner: <span>{!meals.Sunday.Dinner ? <Link to='/search'><button onClick={() => handleAdd('Sunday', 'Dinner')}>ADD MEAL</button></Link> : <span>{meals.Sunday.Dinner.title}
          <img 
            onClick={() => deleteFn(meals.Sunday.Dinner.id)}
            className='day-recipe-delete'
            src='https://image.flaticon.com/icons/svg/149/149147.svg' alt='delete'/></span> }</span></span>
        </section>
      </section>
      <Link to={`/shopping-list/${mealPlanId}`}>
      <button className='shopping-list-btn'>View Shopping List</button>
      </Link>
      </div>

  )
}

export default DailyMealPlan; 

