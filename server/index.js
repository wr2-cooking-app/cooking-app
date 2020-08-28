require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./controllers/authCtrl");
const recipeCtrl = require("./controllers/recipeCtrl");
const mealPlanCtrl = require("./controllers/mealPlanCtrl");
const cartCtrl = require("./controllers/cartCtrl");

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52
    }
  })
);

app.use(express.json());

//auth endpoints
//check user
app.get("/auth/me", authCtrl.user);
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/logout", authCtrl.logout);

// recipe endpoints
app.get("/api/recipes", recipeCtrl.search);
app.get("/api/recipe/:id", recipeCtrl.getRecipe);
app.get("/api/plan-name/:id", mealPlanCtrl.planName);
app.post("/api/add-recipe", recipeCtrl.addRecipe);
app.delete("/api/delete/recipe/:id", recipeCtrl.deleteRecipe);

// meal plan endpoints
app.get("/api/meal-plans/:id", mealPlanCtrl.getMealPlans);
app.get("/api/meal-plan/:id", mealPlanCtrl.getMealPlan);
app.post("/api/add-mealplan", mealPlanCtrl.addMealPlan);
app.delete("/api/delete/mealplan/:id", mealPlanCtrl.deleteMealPlan);
app.put("/api/edit/mealplan/:id", mealPlanCtrl.editMealPlanName);

// cart endpoints
app.get("/api/carts/:id", cartCtrl.getCart);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
