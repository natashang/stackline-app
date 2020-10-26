import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Overview from "../Overview/Overview";
import Sales from "../Sales/Sales";
import Container from "../Container/Container";
import { useEffect } from "react";
import { fetchData } from "../../actions/index";

function App(props) {
  useEffect(() => {
    props.fetchData();
  });

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
