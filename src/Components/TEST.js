// import React from 'react';
// import './DailyMealPlan.scss'


// function DailyMealPlan (props) {

//   console.log(props)
//   return (
//     <div>
//     <div className='daily-meal-plan-container'>
//       <h2>Monday</h2>
//       <section className='meal-time-container'>
//       {props.meals.map((plan, i) => (
//         <section>
//           {plan.day === "Monday" && plan.time === "Breakfast"
//           ? <span>Breakfast: <span className='meal-title'>{plan.title}</span></span>
//           : null
//           }
//           {plan.day === "Monday" && plan.time === "Lunch"
//           ? <span>Lunch: <span className='meal-title'>{plan.title}</span></span>
//           : null
//           }
//           {plan.day === "Monday" && plan.time === "Dinner"
//           ? <span>Dinner: <span className='meal-title'>{plan.title}</span></span>
//           : null
//           }
//         </section>
//       ))}
//       </section>
//     </div>
//     <div className='daily-meal-plan-container'>
//       <h2>Tuesday</h2>
//       <section className='meal-time-container'>
//         <section className='breakfast'>
//           {props.meals.map((plan, i) => (
//             <section>
//             {plan.day === "Tuesday" && plan.time === "Breakfast"
//             ? <span>Breakfast: <span className='meal-title'>{plan.title}</span></span>
//             : null}
//             </section>
//           ))}
//         </section>
//         <section className='lunch'>
//           {props.meals.map((plan, i) => (
//             <section>
//             {plan.day === "Tuesday" && plan.time === "Lunch"
//             ? <span>Lunch: <span className='meal-title'>{plan.title}</span></span>
//             : <span className='add-meal'>Lunch: <span className='meal-title'>{plan[i]}</span></span>}
//             </section>
//           ))}
//         </section>
//         <section className='dinner'>
//           {props.meals.map((plan, i) => (
//             <section>
//             {plan.day === "Tuesday" && plan.time === "Dinner"
//             ? <span>Dinner: <span className='meal-title'>{plan.title}</span></span>
//             :  <button>Add</button>}
//             </section>
//           ))}
//         </section>
//       </section>
//     </div>
//     </div>
//   )
// }

// export default DailyMealPlan; 



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