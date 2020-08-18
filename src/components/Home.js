import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="connect-four">
        <h5>Connect Four!</h5>
      </div>
      <div className="connect-four-text">
        <p>
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
                src="http://localhost:3000/img/womenandkid.png"
                alt="Avatar"
              ></img>
            </div>
            <div className="circle-right"></div>

            <div className="playbutton">
              <img
                className="playbutton-image"
                src="http://localhost:3000/img/play-button.png"
                style={{ width: "40px", height: "40px" }}
                alt="Avatar"
              ></img>

              <label className="play-text">Play</label>
            </div>
            {""}

            <div>
              <hr
                style={{ width: "100%", marginTop: "6%", marginBottom: "6%" }}
              />
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
                  <div>
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
                    <img
                      src="http://localhost:3000/img/online.png"
                      alt="Avatar"
                    ></img>
                  </div>
                  <div>
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
                  <div>
                    <label className="custom-game-text">Training Game</label>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {/* <span
            style={{
              color: '#424242',
              textAlign: 'left',
              opacity: '1',
              fontSize: '10px',
              letterSpacing: '1px',
              marginLeft: '30px',
              marginBottom: '10px'
            }}
          >
            © 2020
          </span> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
