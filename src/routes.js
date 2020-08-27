import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import Dashboard from "./Components/Dashboard/Dashboard";
import MealPlan from "./Components/MealPlan/MealPlan";
import Search from "./Components/Search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/search" component={Search} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/mealplan/:id" component={MealPlan} />
    <Route path="/cart/:id" component={Cart} />
    <Route render={() => <main>404 Not Found</main>} />
  </Switch>
);
