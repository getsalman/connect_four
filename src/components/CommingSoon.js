import React from "react";
import NavBar from "./NavBar";

const CommingSoon = () => {
  return (
    <div className="App-body">
      <NavBar page={"/"} />
      <div className="bgimg">
        <img src="/img/comming_soon.png" className="coming-soon-img" />
      </div>
      {/* <h4 className='text-comming'>Till then stay tuned!!!!</h4> */}
    </div>
  );
};

export default CommingSoon;
