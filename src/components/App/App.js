import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Overview from "../Overview/Overview";
import Sales from "../Sales/Sales";
import Container from "../Container/Container";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(...props) => <Container RightContent={Overview} />}
          />
          <Route
            path="/sales"
            render={(...props) => <Container RightContent={Sales} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
