import React from "react";
import NavBar from "./NavBar";

const CommingSoon = () => {
  return (
    <div className="App-body">
      <NavBar page={"/"} />
      <div className="bgimg">
        <img src="/img/comming_soon.png" className="coming-soon-img" />
      </div>
    </div>
  );
};

export default CommingSoon;
