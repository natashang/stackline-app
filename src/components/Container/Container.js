import React from "react";
import { connect } from "react-redux";

import LeftPanel from "../LeftPanel/LeftPanel";
import "./Container.css";

const Container = (props) => {
  return (
    <div className="appContainer">
      <div className="leftPanelContainer">
        <LeftPanel />
      </div>

      <div className="rightContentContainer">
        <props.RightContent />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
