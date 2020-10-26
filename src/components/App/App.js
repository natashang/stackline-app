import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Overview from "../Overview/Overview";
import Sales from "../Sales/Sales";
import AppContainer from "../AppContainer/AppContainer";
import { useEffect } from "react";
import { fetchData } from "../../actions/index";

function App(props) {
  useEffect(() => {
    props.fetchData();
  });

  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route
            exact
            path="/"
            render={(...props) => <AppContainer RightContent={Sales} />}
          />
          <Route
            path="/overview"
            render={(...props) => <AppContainer RightContent={Overview} />}
          />
        </Switch>
      </HashRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = { fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
