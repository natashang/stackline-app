import React from "react";
import { connect } from "react-redux";
import Item from "../Item/Item";
import Links from "../Links/Links";
import "./LeftPanel.css";

const LeftPanel = () => {
  const renderHr = () => {
    return (
      <div className="hrLine">
        <hr />
      </div>
    );
  };

  return (
    <div>
      <Item />
      {renderHr()}
      <Links />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
