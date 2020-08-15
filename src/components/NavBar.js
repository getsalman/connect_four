import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <Link to={props.page}>
          <div className="arrow">
            <img
              className="back-button-img"
              src="http://localhost:3000/img/back-arrow.png"
            />
          </div>
        </Link>
        <li>Two Player</li>
      </ul>
    </nav>
  );
};

export default NavBar;
