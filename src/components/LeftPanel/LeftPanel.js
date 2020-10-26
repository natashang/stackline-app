import React from "react";
import { connect } from "react-redux";

import Navigator from "../Navigator/Navigator";
import image from "../../logo.svg";
import "./LeftPanel.css";

const LeftPanel = () => {
  const renderImage = () => {
    return (
      <div>
        <img src={image} alt="item" />
        <h2>Sample title</h2>
        <p>This is an awesome description right here!</p>
      </div>
    );
  };

  const renderTags = () => {
    const sampleTags = ["cookware", "must have", "kitchen", "sale"];
    return (
      <ul className="tagsContainer">
        {sampleTags.map((tag, i) => {
          return (
            <li className="tag" key={i}>
              {tag}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderLinks = () => {
    return (
      <div>
        <Navigator />
      </div>
    );
  };

  const renderHr = () => {
    return (
      <div className="hrLine">
        <hr />
      </div>
    );
  };

  return (
    <div>
      {renderImage()}
      {renderHr()}
      {renderTags()}
      {renderHr()}
      {renderLinks()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
