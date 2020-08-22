import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav>
      <Link to={props.page}>
        <ul>
          <i
            className="nav-arrow"
            class="fa fa-arrow-left"
            aria-hidden="true"
            style={{ color: "#424242", marginTop: "25px", padding: "0px 17px" }}
          />
          <li>Two Player Games</li>
        </ul>
      </Link>
    </nav>
  );
};

export default NavBar;
