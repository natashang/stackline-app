import React from "react";
import { connect } from "react-redux";
import LeftPanel from "../LeftPanel/LeftPanel";
import "./AppContainer.css";

const AppContainer = (props) => {
  const renderComponents = () => {
    return (
      <>
        <div className="leftPanelContainer">
          <LeftPanel />
        </div>

        <div className="rightContentContainer">
          <props.RightContent />
        </div>
      </>
    );
  };

  return (
    <div className="appContainer">
      {props.data !== null && props.loading === false
        ? renderComponents()
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loadingReducer } = state;
  return {
    data: loadingReducer.data,
    loading: loadingReducer.loading,
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
