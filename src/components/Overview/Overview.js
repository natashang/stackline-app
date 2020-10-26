import React from "react";
import { connect } from "react-redux";

const Overview = () => {
  return <>I am an awesome Overview component!</>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
