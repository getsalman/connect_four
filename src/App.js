import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TwoPlayers from "./components/TwoPlayers";
import Board from "./components/Board";
import CommingSoon from "./components/CommingSoon";

const App = () => {
  const [state, setState] = useState({
    player1: "David",
    player2: "Maria",
    whoStarts: "Alternative turn",
    numberOfGames: "2 Games",
  });

  const setUser = (user) => {
    setState({ ...state, user });
  };

  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/comming_soon">
              <CommingSoon />
            </Route>

            <Route exact path="/tournament">
              <Board data={state} setUser={setUser} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/2player">
              <TwoPlayers setUser={setUser} data={state} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
