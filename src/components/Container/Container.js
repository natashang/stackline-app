import React from "react";
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

export default Container;
