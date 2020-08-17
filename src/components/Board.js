import React, { Component } from "react";
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

    /*Contruct slats allocating column from board*/
    let slats = [...Array(this.state.boardState.length)].map((x, i) => (
      <Slat
        key={i}
        holes={this.state.boardState[i]}
        handleClick={() => this.handleClick(i)}
      ></Slat>
    ));

    return (
      <div>
        <NavBar page={"/2player"} />
        {this.state.gameSelected && (
          <div className="main">
            <div className="box">
              <div className="boardgame">
                <div className="Board ">{slats}</div>
                <div>
                  <h1 className="tournament-text">
                    {this.props.data.numberOfGames} Tournament
                  </h1>
                  <div className={winnerMessageStyle}>
                    <h2 style={{ color: "orange" }}>Congratulations</h2>
                    {this.state.tournametWinner !== ""
                      ? this.state.tournametWinner === "Red"
                        ? this.props.data.player1 + ", You won Tournament "
                        : this.state.tournametWinner === "Tie"
                        ? "It's Tie"
                        : this.props.data.player2 + ", You won Tournament "
                      : this.state.winner === "Red"
                      ? this.props.data.player1 +
                        ", You won game" +
                        (this.state.p1 + this.state.p2)
                      : this.props.data.player2 +
                        ", You won game" +
                        (this.state.p1 + this.state.p2)}
                  </div>
                  <div type="button" className="boardlabel">
                    <div
                      className={
                        this.state.playerTurn === "Red"
                          ? "player-image activeplayer"
                          : "player-image"
                      }
                    >
                      <img
                        src="http://localhost:3000/img/boy.png"
                        style={{ margin: "-10px 10px 10px 5px" }}
                        alt="Avatar"
                      ></img>
                    </div>
                    <div className="item4">
                      <label className="player-text">Player 01</label>
                    </div>
                    <div className="item5">
                      <label>{this.props.data.player1}</label>
                    </div>

                    <div className="item6">
                      <label className="player-text">Score</label>
                    </div>
                    <div className="item7">
                      <label className="player-text">{this.state.p1}</label>
                    </div>
                  </div>

                  <div
                    type="button"
                    className="boardlabel"
                    style={{
                      background: "#F6EFD5 0% 0% no-repeat padding-box",
                    }}
                  >
                    <div
                      className={
                        this.state.playerTurn === "Blue"
                          ? "player-image activeplayer"
                          : "player-image"
                      }
                      style={{ borderColor: "#F8D146" }}
                    >
                      <img
                        src="http://localhost:3000/img/girl.png"
                        alt="Avatar"
                        style={{ margin: "-10px 10px 10px 0px" }}
                      ></img>
                    </div>
                    <div className="item4">
                      <label className="player-text">Player 02</label>
                    </div>
                    <div className="item5">
                      <label>{this.props.data.player2}</label>
                    </div>

                    <div className="item6">
                      <label className="player-text">Score</label>
                    </div>
                    <div className="item7">
                      <label className="player-text">{this.state.p2}</label>
                    </div>
                  </div>
                  <hr />
                  <Link to="/tournament">
                    <div>
                      <button
                        type="button"
                        className="bordButton undo"
                        onClick={this.resetGame}
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
                    <div type="button">
                      <button
                        type="button"
                        className="bordButton end"
                        onClick={this.resetUser}
                      >
                        End Tournament
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Board;
