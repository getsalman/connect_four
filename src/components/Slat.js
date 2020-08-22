import React from "react";
import Hole from "./Hole";

const Slat = (props) => {
  return (
    <div className="Slat" onClick={() => props.handleClick()}>
      {[...Array(props.holes.length)].map((x, j) => (
        <Hole key={j} value={props.holes[j]}></Hole>
      ))}
    </div>
  );
};

export default Slat;
