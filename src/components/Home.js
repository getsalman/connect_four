import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="box">
        <div className="connect-four">
          <h2>Connect Four!</h2>
        </div>
        <div className="connect-four-text">
          <h3>Play with other players</h3>
          <h3>around the world</h3>
        </div>
        <div className="card">
          <div>
            <button type="button" className="playbutton">
              <div>
                <img
                  className="playbutton-image"
                  src="http://localhost:3000/img/play-button.png"
                  style={{ width: "40px", height: "40px" }}
                  alt="Avatar"
                ></img>
              </div>
              <label className="play-text">Play</label>
            </button>
            <div>
              <div className="circle-top"></div>

              <img
                className="home-image"
                src="http://localhost:3000/img/womenandkid.png"
                alt="Avatar"
              ></img>
              <div className="circle-right"></div>
            </div>
          </div>

          <div>
            <Link to="/comming_soon">
              <button type="button" className="custom-game">
                <div style={{ float: "left" }}>
                  {" "}
                  <img
                    src="http://localhost:3000/img/user.png"
                    alt="Avatar"
                  ></img>
                </div>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                  {" "}
                  <label className="custom-game-text">Custom Game</label>
                </div>
              </button>
            </Link>
            <Link to="/2player">
              <button type="button" className="two-players-game">
                <div style={{ float: "left" }}>
                  <img
                    src="http://localhost:3000/img/multiplayer.png"
                    alt="Avatar"
                  ></img>
                </div>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                  <label className="custom-game-text">Two Players</label>
                </div>
              </button>
            </Link>
          </div>
          <div>
            <Link to="/comming_soon">
              <button type="button" className="online-game">
                <div style={{ float: "left" }}>
                  <img
                    src="http://localhost:3000/img/online.png"
                    alt="Avatar"
                  ></img>
                </div>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                  <label className="custom-game-text">Game Online</label>
                </div>
              </button>
            </Link>
            <Link to="/comming_soon">
              <button type="button" className="training-game">
                <div style={{ float: "left" }}>
                  <img
                    src="http://localhost:3000/img/training.png"
                    alt="Avatar"
                  ></img>
                </div>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                  <label className="custom-game-text">Training Game</label>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
