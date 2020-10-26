import React from "react";
import { connect } from "react-redux";

const Sales = () => {
  return <div>I will be the sales content on the right</div>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Sales);
