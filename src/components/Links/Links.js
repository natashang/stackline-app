import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Links.css";
import { OVERVIEW, SALES } from "../../constants/index";

function Links() {
  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ul className="links">
      <li onClick={(e) => clickHandler(e)}>
        <Link to="/overview" className="link" id="overviewLink">
          {OVERVIEW}
        </Link>
      </li>
      <li onClick={(e) => clickHandler(e)}>
        <Link to="/" className="link" id="salesLink">
          {SALES}
        </Link>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Links);
