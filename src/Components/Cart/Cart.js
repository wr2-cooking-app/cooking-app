import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { MealPlanIdContext } from '../../contexts/MealPlanIdContext';
import './Cart.scss';


function Cart(props) {

  const [mealPlanId, setMealPlanId] = useContext(MealPlanIdContext);
  const [idArr, setIdArr] = useState([]);
  const [recipeData, setRecipeData] = useState([]);




  const getId = () => {
    Axios.get(`/api/recipe-id/${mealPlanId}`)
    .then(res => {
      setIdArr(res.data)
      getRecipe(res.data)
    })
    .catch(err => console.log(err))
  }

  const getRecipe = (data) => {
    //example id 206986
    console.log(data)
    let dataArr = [];
    for(let i = 0; i < data.length; i++) {
      // console.log(data[i])
        Axios.get(`/api/ingredients/${data[i]}`)
        .then(res => {
          dataArr.push(res.data);
        })
        .catch(err => console.log(err))
    }
    setRecipeData(dataArr);
  }

  useEffect(() => {
    getId()
  }, []);

  console.log(idArr) 
  console.log(recipeData) 

  // const mappedArr = mealPlan.map((data, i) => {
  //   let idArr = [];
  //   for (let i = 0; i < data.length; i++){
  //     idArr.push(data.recipe_id)
  //   }
  //   console.log(idArr);
  // })

  // const testData = () => {
  //   let idArr = [];
  //   for (let i = 0; i < mealPlan.length; i++){
  //     idArr.push(mealPlan[i].recipe_id);
  //   }
  //   setId(idArr);
  //   console.log(id)
  // }

  return(
    <div>
      <h1>Cart</h1>    
    </div>
  )
}

export default Cart;