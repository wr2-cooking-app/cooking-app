import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "./Components/Test/Test";

export default (
  <Switch>
    <Route path="/test" component={Test} />
    <Route render={() => <main>404 Not Found</main>} />
  </Switch>
);
