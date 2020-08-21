module.exports = {
  getMealPlans: (req, res) => {

    console.log('meal plan hit')
    const db = req.app.get('db');
    const {id} = req.params

    db.meal_plan.get_meal_plans({id})
    .then( plans => {
      res.status(200).send(plans)
    })
    .catch(err => console.log(err))
  },

  addMealPlan: (req, res) => {

    console.log('meal plan added')

    const db = req.app.get('db');
    const {userId, name} = req.body;

    db.meal_plan.add_meal_plan({userId, name})
    .then(mealPlan => {
      res.status(200).send(mealPlan)
    })
    .catch(err => console.log(err))
  },

  deleteMealPlan: (req, res) => {
    console.log('meal plan deleted')

    const db = req.app.get('db');
    const {id} = req.params;

    db.meal_plan.delete_meal_plan({id})
    .then( () => res.sendStatus(200))
    .catch(err => console.log(err))

  },

  getMealPlan: async (req, res) => {
    console.log('meal plan fetched')

    const db = req.app.get('db');
    const {id} = req.params;
    console.log(id)

    const data = await db.meal_plan.get_meal_plan({id});
    res.status(200).send(data)
  }
}