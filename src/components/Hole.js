import React from "react";

//Picture added

const Hole = (props) => {
  return (
    <div className="Hole">
      <div className={props.value}>
        {props.value !== null ? (
          props.value === "Red" ? (
            <div className="Red activeplayer-play">
              <img src="/img/boy.png" className="image"></img>
            </div>
          ) : (
            <div className="Blue activeplayer-play-2">
              <img src="/img/girl.png" className="image"></img>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Hole;
