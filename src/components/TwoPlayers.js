import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import NavBar from "./NavBar";

const TwoPlayers = (props) => {
  const [show, setShow] = useState();
  const [name, setName] = useState("whoStarts");

  const onChange = (e) => {
    console.log("==================>", e.target);
    const name = `${e.target.name}`;
    const value = e.target.value;
    props.data[name] = value;
    props.setUser(props.data);
  };

  return (
    <div className="main">
      <NavBar page={"/"} />
      <Modal
        show={show}
        handleClose={() => setShow(!show)}
        onChange={onChange}
        data={props.data}
        name={name}
      />

      <div className="container">
        <div className="carddd">
          <div
            className="flex-container player1"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderColor: "1px solid #70707026",
            }}
          >
            <div
              className="boy-circle"
              style={{ height: "80px", width: "90px" }}
            >
              <img
                src="http://localhost:3000/img/boy.png"
                alt="Avatar"
                style={{
                  width: "50px",
                  height: "55px",
                  margin: "5px 0px 0px 5px",
                }}
              />
            </div>
            <div
              style={{
                padding: "5px 10px 0px 40px",
                borderBottom: "1px solid #70707026",
                marginLeft: "-30px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  marginBottom: "0rem",
                  color: "#424242",
                  fontWeight: "400",
                  fontSize: "15px",
                }}
              >
                Player 01
              </p>

              <input
                type="text"
                name="player1"
                placeholder="player1"
                className="player-input"
                value={props.data.player1}
                onChange={onChange}
              />
            </div>
          </div>

          <div
            className="flex-container player1"
            style={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#F6EFD5",
              borderColor: "1px solid #70707026",
            }}
          >
            <div
              className="girl-circle"
              style={{ height: "80px", width: "90px" }}
            >
              <img
                src="http://localhost:3000/img/girl.png"
                alt="Avatar"
                style={{
                  width: "50px",
                  height: "55px",
                  margin: "5px 0px 0px 7px",
                }}
              />
            </div>
            <div
              style={{
                padding: "5px 10px 0px 40px",
                borderBottom: "1px solid #70707026",
                marginLeft: "-30px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  marginBottom: "0rem",
                  color: "#424242",
                  fontWeight: "400",
                  fontSize: "15px",
                }}
              >
                Player 02
              </p>

              <input
                type="text"
                name="player2"
                placeholder="player2"
                className="player-input"
                value={props.data.player2}
                onChange={onChange}
              />
            </div>
          </div>

          <div
            className="flex-container player1"
            style={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#EFF3FF",
              borderColor: "1px solid #70707026",
            }}
            onClick={() => {
              setShow(!show);
              setName("numberOfGames");
            }}
          >
            <div
              className="cup-circle"
              style={{ height: "80px", width: "90px" }}
            >
              <img
                src="http://localhost:3000/img/cup.png"
                alt="Avatar"
                style={{
                  width: "45px",
                  height: "45px",
                  margin: "10px 0px 0px 7px",
                }}
              />
            </div>
            <div
              style={{
                padding: "5px 10px 0px 40px",
                borderBottom: "1px solid #70707026",
                marginLeft: "-30px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  marginBottom: "0rem",
                  color: "#424242",
                  fontWeight: "400",
                  fontSize: "15px",
                }}
              >
                Number of game
              </p>
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                {props.data.numberOfGames}
              </div>
            </div>
          </div>

          <div
            className="flex-container player1"
            style={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#EFF3FF",
              borderColor: "1px solid #70707026",
            }}
            onClick={() => {
              setShow(!show);
              setName("whoStarts");
            }}
          >
            <div
              className="cup-circle"
              style={{ height: "80px", width: "90px" }}
            >
              <img
                src="http://localhost:3000/img/tour.png"
                alt="Avatar"
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "4px 0px 0px 4px",
                }}
              ></img>
            </div>
            <div
              style={{
                padding: "5px 10px 0px 40px",
                borderBottom: "1px solid #70707026",
                marginLeft: "-30px",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  marginBottom: "0rem",
                  color: "#424242",
                  fontWeight: "400",
                  fontSize: "15px",
                }}
              >
                Who starts
              </p>
              <div style={{ fontSize: "20px", fontWeight: "500" }}>
                {props.data.whoStarts}
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }}></hr>
          <Link to="/tournament">
            <div>
              <button type="button" className="submit">
                Start Game
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="gamecard">
        <div type="button" className="player1">
          <div className="player-image">
            <img
              src="http://localhost:3000/img/boy.png"
              alt="Avatar"
              style={{ width: "50px", height: "55px", marginLeft: "5px" }}
            ></img>
          </div>
          <div className="player-text">
            <label className="player-text">Player 01</label>
          </div>
          <div className="item2">
            <input
              type="text"
              name="player1"
              placeholder="player1"
              className="player-input"
              value={props.data.player1}
              onChange={onChange}
            ></input>
            <hr className="inputHr" />
          </div>
        </div>

        <div
          type="button"
          className="player1"
          style={{ background: "#F6EFD5 0% 0% no-repeat padding-box" }}
        >
          <div className="player-image" style={{ borderColor: "#F8D146" }}>
            <img
              src="http://localhost:3000/img/girl.png"
              alt="Avatar"
              style={{
                width: "50px",
                height: "55px",
                marginLeft: "5px",
              }}
            ></img>
          </div>
          <div className="player-text">
            <label className="player-text">Player 02</label>
          </div>
          <div className="item2">
            <input
              type="text"
              name="player2"
              placeholder="player2"
              className="player-input"
              value={props.data.player2}
              onChange={onChange}
            />
            <hr className="inputHr" />
          </div>
        </div>

        <div
          type="button"
          className="player1"
          onClick={() => {
            setShow(!show);
            setName("numberOfGames");
          }}
          style={{ background: "#EFF3FF 0% 0% no-repeat padding-box" }}
        >
          <div className="player-image" style={{ borderColor: "#B1C4F9" }}>
            <img
              src="http://localhost:3000/img/cup.png"
              alt="Avatar"
              style={{
                width: "40px",
                height: "45px",
                margin: "11px",
                marginTop: "6px",
              }}
            ></img>
          </div>
          <div className="player-text">
            <label className="player-text">Number Of Games</label>
          </div>
          <div className="item2">
            <label className="playerLabel">{props.data.numberOfGames}</label>
            <hr className="inputHr" />
          </div>
        </div>

        <div
          type="button"
          className="player1"
          onClick={() => {
            setShow(!show);
            setName("whoStarts");
          }}
          style={{ background: "#EFF3FF 0% 0% no-repeat padding-box" }}
        >
          <div className="player-image" style={{ borderColor: "#B1C4F9" }}>
            <img
              src="http://localhost:3000/img/tour.png"
              alt="Avatar"
              style={{
                width: "40px",
                height: "45px",
                margin: "10px 10px 10px 10px",
              }}
            ></img>
          </div>
          <div className="player-text">
            <label className="player-text">Who Starts</label>
          </div>
          <div className="item2">
            <label className="playerLabel">{props.data.whoStarts}</label>
            <hr className="inputHr" />
          </div>
        </div>
        <hr className="hrr" />
        <Link to="/tournament">
          <div type="button">
            <button type="button" className="submit">
              Start Game
            </button>
          </div>
        </Link>
            </div> */}
    </div>
  );
};

export default TwoPlayers;
