import React from "react";

const Hole = (props) => {
  return (
    <div className="Hole">
      <div className={props.value}>
        {props.value !== null ? (
          props.value === "Red" ? (
            <img src="/img/boy.png" className="image"></img>
          ) : (
            <img src="/img/girl.png" className="image"></img>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Hole;
