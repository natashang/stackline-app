import React from "react";
import { connect } from "react-redux";

const Overview = () => {
  return <div>I will be the overview content on the right</div>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
