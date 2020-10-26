import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navigator.css";
import { OVERVIEW, SALES } from "../../constants/index";

function Navigator() {
  return (
    <ul className="links">
      <li>
        <Link to="/">{OVERVIEW}</Link>
      </li>
      <li>
        <Link to="/sales">{SALES}</Link>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
