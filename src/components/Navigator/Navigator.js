import React from "react";
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

export default Navigator;
