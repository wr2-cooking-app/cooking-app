import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "./Components/Test/Test";
import Auth from "./Components/Auth/Auth";
import Search from "./Components/Search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/test" component={Test} />
    <Route path="/search" component={Search} />
    <Route render={() => <main>404 Not Found</main>} />
  </Switch>
);
