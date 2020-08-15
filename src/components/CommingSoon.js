import React from "react";
import NavBar from "./NavBar";
import "./CommingSoon";

const CommingSoon = () => {
  return (
    <div className="App-body">
      <NavBar page={"/"} />
      <div className="bgimg">
        <img
          src="http://localhost:3000/img/comming_soon.png"
          className="coming-soon-img"
        />
      </div>
      <h1 className="text-comming">Till then stay tuned!!!!</h1>
    </div>
  );
};

export default CommingSoon;
