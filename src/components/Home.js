import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// picture added

const Home = () => {
  return (
    <Fragment>
      <div className="connect-four">
        <p style={{ fontWeight: "900", fontSize: "20px" }}>Connect Four!</p>
      </div>
      <div className="connect-four-text">
        <p style={{ fontWeight: "600", fontSize: "10px" }}>
          Play with other players <br />
          around the world.
        </p>
      </div>

      <div className="container">
        <div className="card-2">
          <div className="card">
            <div className="circle-top"></div>
            <div style={{ height: "290px" }}>
              <img
                className="home-image"
                src="/img/womenandkid.png"
                alt="Avatar"
              ></img>
            </div>
            <div className="circle-right"></div>

            <div className="playbutton">
              <i
                class="far fa-play-circle"
                style={{
                  color: "white",
                  fontSize: "28px",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              ></i>

              <p className="play-text">Play</p>
            </div>

            <hr className="line1" />

            <div>
              <Link to="/comming_soon">
                <button type="button" className="custom-game">
                  <div style={{ float: "left" }}>
                    {" "}
                    <img src="/img/user.png" alt="Avatar"></img>
                  </div>
                  <div>
                    {" "}
                    <label className="custom-game-text">Custom Game</label>
                  </div>
                </button>
              </Link>
              <Link to="/2player">
                <button type="button" className="two-players-game">
                  <div style={{ float: "left" }}>
                    <img src="/img/multiplayer.png" alt="Avatar"></img>
                  </div>
                  <div>
                    <label className="custom-game-text">Two Players</label>
                  </div>
                </button>
              </Link>
            </div>
            <div>
              <Link to="/comming_soon">
                <button type="button" className="online-game">
                  <div style={{ float: "left" }}>
                    <img src="/img/online.png" alt="Avatar"></img>
                  </div>
                  <div>
                    <label className="custom-game-text">Game Online</label>
                  </div>
                </button>
              </Link>
              <Link to="/comming_soon">
                <button type="button" className="training-game">
                  <div style={{ float: "left" }}>
                    <img src="/img/training.png" alt="Avatar"></img>
                  </div>
                  <div>
                    <label className="custom-game-text">Training Game</label>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <span
            style={{
              color: "#424242",
              textAlign: "left",
              opacity: "1",
              fontSize: "10px",
              letterSpacing: "1px",
              marginLeft: "30px",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            © 2020
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
