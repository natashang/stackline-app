import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import Overview from "./components/Overview/Overview";
import Sales from "./components/Sales/Sales";

const createRoutes = () => {
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(...props) => <App RightContent={Overview} />}
      />
      <Route
        path="/sales"
        render={(...props) => <App RightContent={Sales} />}
      />
    </Switch>
  </BrowserRouter>;
};

export default createRoutes;
