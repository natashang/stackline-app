import React from "react";
import { connect } from "react-redux";
import Item from "../Item/Item";
import Navigator from "../Navigator/Navigator";
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
      <Navigator />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
