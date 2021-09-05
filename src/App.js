import React from "react";
import Game from "./Components/Game";
import Homepage from "./Components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}
