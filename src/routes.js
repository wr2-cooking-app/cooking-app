import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Search from "./Components/Search/Search";
import Dashboard from "./Components/Dashboard/Dashboard";
import MealPlan from "./Components/MealPlan/MealPlan"

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/search" component={Search} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/mealplan/:id" component={MealPlan} />
    <Route render={() => <main>404 Not Found</main>} />
  </Switch>
);
