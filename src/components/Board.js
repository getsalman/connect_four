import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Slat from "./Slat";
import NavBar from "./NavBar";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: new Array(7).fill(new Array(6).fill(null)),
      playerTurn: "Red",
      gameSelected: true,
      winner: "",
      tournametWinner: "",
      complete: false,
      lastMove: 0,
      lastTurn: "",
      p1: 0,
      p2: 0,
      count: 0,
      totalGame: parseInt(
        this.props.data.numberOfGames.slice(
          0,
          this.props.data.numberOfGames.indexOf(" Games")
        )
      ),
    };
    this.resetGame = this.resetGame.bind(this);
    this.resetUser = this.resetUser.bind(this);
  }

  makeMove(slatID) {
    const boardCopy = this.state.boardState.map(function (arr) {
      return arr.slice();
    });
    if (boardCopy[slatID].indexOf(null) !== -1) {
      let newSlat = boardCopy[slatID].reverse();
      newSlat[newSlat.indexOf(null)] = this.state.playerTurn;
      newSlat.reverse();

      this.setState({
        playerTurn: this.state.playerTurn === "Red" ? "Blue" : "Red",
        lastTurn: this.state.playerTurn === "Red" ? "Red" : "Blue",
        boardState: boardCopy,
        lastMove: slatID,
      });
    }
  }

  resetGame() {
    const boardCopy = this.state.boardState.map(function (arr) {
      return arr.slice();
    });
    if (this.state.complete) {
      this.setState({
        boardState: new Array(7).fill(new Array(6).fill(null)),
        winner: "",
        p1: 0,
        p2: 0,
        totalGame: parseInt(
          this.props.data.numberOfGames.slice(
            0,
            this.props.data.numberOfGames.indexOf(" Games")
          )
        ),
      });
    } else if (!this.state.complete && this.state.winner !== "") {
      this.setState({
        boardState: new Array(7).fill(new Array(6).fill(null)),
        winner: "",
      });
    } else {
      boardCopy[this.state.lastMove][
        boardCopy[this.state.lastMove].indexOf(this.state.lastTurn)
      ] = null;

      this.setState({
        boardState: boardCopy,
        playerTurn: this.state.lastTurn,
        winner: "",
      });
    }
  }

  /*Only make moves if winner doesn't exist*/
  handleClick(slatID) {
    if (this.state.winner === "") {
      this.makeMove(slatID);
    }
  }

  resetUser() {
    const data = {
      player1: "David",
      player2: "Maria",
      whoStarts: "Alternative turn",
      numberOfGames: "2 Games",
    };
    this.props.setUser(data);
  }

  checkLine(a, b, c, d) {
    return a !== null && a === b && a === c && a === d;
  }

  checkWinner(bs) {
    for (let c = 0; c < 7; c++)
      for (let r = 0; r < 4; r++)
        if (this.checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
          return bs[c][r];

    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
          return bs[c][r];

    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (
          this.checkLine(
            bs[c][r],
            bs[c + 1][r + 1],
            bs[c + 2][r + 2],
            bs[c + 3][r + 3]
          )
        )
          return bs[c][r];

    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (
          this.checkLine(
            bs[c][r],
            bs[c - 1][r + 1],
            bs[c - 2][r + 2],
            bs[c - 3][r + 3]
          )
        )
          return bs[c][r];

    return "";
  }

  componentDidUpdate() {
    let tournametWinner = "";
    let P1 = this.state.p1;
    let P2 = this.state.p2;
    let Total = this.state.totalGame;
    let winner = this.checkWinner(this.state.boardState);

    let turn;
    if (this.props.data.whoStarts === "Looser first") {
      turn = winner === "Red" ? "Blue" : "Red";
    } else if (this.props.data.whoStarts === "Winner first") {
      turn = winner === "Red" ? "Red" : "Blue";
    } else if (this.props.data.whoStarts === "Always player 01") {
      turn = "Red";
    } else if (this.props.data.whoStarts === "Always player 02") {
      turn = "Blue";
    } else {
      turn = this.state.playerTurn;
    }
    if (this.state.winner !== winner) {
      if (winner === "Red") {
        P1++;
        Total--;
      } else if (winner === "Blue") {
        P2++;
        Total--;
      }

      if (Total === 0) {
        if (P1 > P2) {
          tournametWinner = "Red";
        } else if (P1 === P2) {
          tournametWinner = "Tie";
        } else {
          tournametWinner = "Blue";
        }
      }

      this.setState({
        winner: winner,
        p1: P1,
        p2: P2,
        totalGame: this.state.totalGame - 1,
        complete: Total ? false : true,
        playerTurn: turn,
        tournametWinner,
      });
    }
  }

  render() {
    /*If a winner exists display the name*/
    let winnerMessageStyle;
    if (this.state.winner !== "") {
      winnerMessageStyle = "winnerMessage appear";
    } else {
      winnerMessageStyle = "winnerMessage";
    }

    console.log("=======>", this.state.playerTurn);

    /*Contruct slats allocating column from board*/
    let slats = [...Array(this.state.boardState.length)].map((x, i) => (
      <Slat
        key={i}
        holes={this.state.boardState[i]}
        handleClick={() => this.handleClick(i)}
      ></Slat>
    ));

    return (
      <Fragment>
        <NavBar page={"/2player"} />
        {this.state.gameSelected && (
          <div className="container">
            <div className="boardcard">
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-xs-12">
                  <div>
                    <div className="game">{slats}</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12">
                  <div className="smallpad">
                    <h2 className="number-of-games">
                      {this.props.data.numberOfGames} Tournament
                    </h2>

                    <div className={winnerMessageStyle}>
                      <h3 className="congratulations">Congratulations</h3>
                      {this.state.tournametWinner !== ""
                        ? this.state.tournametWinner === "Red"
                          ? this.props.data.player1 + ", You won Tournament "
                          : this.state.tournametWinner === "Tie"
                          ? "It's Tie"
                          : this.props.data.player2 + ", You won Tournament "
                        : this.state.winner === "Red"
                        ? this.props.data.player1 +
                          ", You won Game" +
                          (this.state.p1 + this.state.p2)
                        : this.props.data.player2 +
                          ", You won Game" +
                          (this.state.p1 + this.state.p2)}
                    </div>
                    {/* <p
                      style={{
                        textAlign: "center",
                        marginTop: "-40px",
                      }}
                    >
                      Playing Game:{" "}
                    </p> */}

                    <div
                      class="gamecards flex-container"
                      style={{
                        display: "flex",
                        background: "#DCF6E4",
                        minHeight: "110px",
                      }}
                    >
                      <div
                        style={{
                          width: "180px",
                          height: "120px",
                          padding: "2% 0%",
                        }}
                      >
                        <div
                          className={
                            this.state.playerTurn === "Red"
                              ? "activeatedcircle"
                              : "inactivecircle"
                          }
                        >
                          <div className="activeplayer">
                            <img
                              src="/img/boy.png"
                              alt="Avatar"
                              style={{ marginLeft: "8px", height: "100%" }}
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "45%", padding: "15px 10px" }}>
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#424242",
                          }}
                        >
                          Player 01
                        </p>
                        <p
                          style={{
                            marginBottom: "0px",
                            fontWeight: "500",
                            fontSize: "20px",
                          }}
                        >
                          {this.props.data.player1}
                        </p>
                      </div>
                      <div
                        className="text-center"
                        style={{ padding: "15px 15px" }}
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#424242",
                          }}
                        >
                          Score
                        </p>
                        <p style={{ marginBottom: "0px" }}>{this.state.p1}</p>
                      </div>
                    </div>

                    <div
                      class="gamecards flex-container"
                      style={{
                        display: "flex",
                        background: "#F6EFD5",
                      }}
                    >
                      <div
                        style={{
                          width: "180px",
                          height: "120px",
                          padding: "2% 0%",
                        }}
                      >
                        <div
                          className={
                            this.state.playerTurn === "Blue"
                              ? "activeatedcircle"
                              : "inactivecircle"
                          }
                        >
                          <div className="activeplayer2">
                            <img
                              src="/img/girl.png"
                              alt="Avatar"
                              style={{
                                marginLeft: "4px",
                                height: "100%",
                                marginTop: "2px",
                              }}
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div style={{ width: "45%", padding: "15px 10px" }}>
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#424242",
                          }}
                        >
                          Player 02
                        </p>
                        <p
                          style={{
                            marginBottom: "0px",
                            fontWeight: "500",
                            fontSize: "20px",
                          }}
                        >
                          {this.props.data.player2}
                        </p>
                      </div>
                      <div
                        className="text-center"
                        style={{ padding: "15px 15px" }}
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#424242",
                          }}
                        >
                          Score
                        </p>
                        <p style={{ marginBottom: "0px" }}>{this.state.p2}</p>
                      </div>
                    </div>

                    <hr></hr>
                    <Link to="/tournament">
                      <div>
                        <button
                          type="button"
                          className="bordButton undo"
                          onClick={this.resetGame}
                          style={{ fontWeight: 600, fontSize: "20px" }}
                        >
                          {this.state.winner === ""
                            ? "Undo Step"
                            : this.state.complete
                            ? "Play Again"
                            : "Next Game"}
                        </button>
                      </div>
                    </Link>
                    <Link to="/">
                      <div>
                        <button
                          type="button"
                          className="end-tournament"
                          className="bordButton end"
                          onClick={this.resetUser}
                          style={{ fontWeight: 600, fontSize: "20px" }}
                        >
                          End Tournament
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Board;
