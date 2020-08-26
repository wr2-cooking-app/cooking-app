import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../../contexts/UserContext";
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './Dashboard.scss';



function Dashboard(props){

  const {userData} = useContext(UserContext);
  const [mealPlanId, setMealPlanId] = useContext(MealPlanIdContext);
  const [mealName, setMealName] =useState('')
  const [mealPlans, setMealPlans] =useState([]);

  useEffect(() => {
    getMealPlans()
  }, [mealName]);

  const getMealPlans = () => {
    Axios.get(`/api/meal-plans/${userData.id}`)
    .then(res => {
      setMealPlans(res.data)
    })
    .catch(err => console.log(err))
  }

  const handleAddNew = () => {
    Axios.post('/api/add-mealplan', {userId: userData.id, name: mealName})
    .then( () => {
      console.log('hello')
      setMealName('')
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => { 
    Axios.delete(`/api/delete/mealplan/${id}`)
    .then( () => {
      getMealPlans()
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='dashboard-container'>
      <div className='dashboard-box'>
          <h2 className="name-plan">{userData.first_name}'s Meal Plans</h2>
        <div className='dashboard-add-new' >
          <input className="dash-input" value={mealName} placeholder='meal plan name' onChange={e => setMealName(e.target.value)} />
          <button  className="dash-button" onClick={handleAddNew}>Add New</button>
        </div>
        {mealPlans.map((mp, i) => (
        <div className='meal-section'>
            <div className='left-meal-section'>
              <span className='meal-plan-name'>{i + 1}.</span>
              <p className='meal-plan-name'>{mp.name}</p>
            </div>
            <div className='dashboard-buttons'>
              <img src='https://image.flaticon.com/icons/svg/609/609496.svg' alt='cart'/>
              <Link to={`/mealplan/${mp.id}`}>
                <img 
                  onClick={() => setMealPlanId(mp.id)}
                  src='https://image.flaticon.com/icons/svg/645/645779.svg' alt='edit'/>
              </Link>
              <img 
                onClick={() => handleDelete(mp.id)}
                src='https://image.flaticon.com/icons/svg/3209/3209887.svg' alt='delete'/>
            </div>
        </div>    
        ))}
      </div>
    </div>
  )
}

export default Dashboard;