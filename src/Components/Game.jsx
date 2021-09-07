import React, { useState, useEffect } from "react";
import "../App.css";
import Squares from "./Squares";
import { useLocation } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
const initialState = ["", "", "", "", "", "", "", "", ""];

export default function Game() {
  const [game, setGame] = useState(initialState);
  const [O, setO] = useState(false);
  const names = useLocation();
  const [show, setShow] = useState(false);
  const [winnerName, setWinnerName] = useState("");

  const handleClick = (index) => {
    let strings = Array.from(game);
    strings[index] = O ? "O" : "X";
    setGame(strings);
    setO(!O);
  };

  useEffect(() => {
    const winner = isWinner();
    if (winner === "X") {
      setWinnerName(names.state.firstPlayer);
      setShow(true);
      setO(false);
      setGame(initialState);
    } else if (winner === "O") {
      setWinnerName(names.state.secondPlayer);
      setShow(true);
      setGame(initialState);
    }
  }, [game]);

  const isWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      {show ? (
        <Alert variant="danger" id="alert">
          Bravo ! {winnerName} is the WINNER !
          <hr />
          <div id="alertButtonPosition">
            <button id="alertButton" onClick={() => setShow(false)}>
              Close me y'all!
            </button>
          </div>
        </Alert>
      ) : null}

      <p className="heading-text">Have fun 😍🔥 </p>
      <div className="rows jc-Center">
        <Squares
          className="b-bottom-right"
          state={game[0]}
          onClick={() => handleClick(0)}
        />
        <Squares
          className="b-bottom-right"
          state={game[1]}
          onClick={() => handleClick(1)}
        />
        <Squares
          className="b-bottom"
          state={game[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="rows jc-Center">
        <Squares
          className="b-bottom-right"
          state={game[3]}
          onClick={() => handleClick(3)}
        />
        <Squares
          className="b-bottom-right"
          state={game[4]}
          onClick={() => handleClick(4)}
        />
        <Squares
          className="b-bottom"
          state={game[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="rows jc-Center">
        <Squares
          className="b-right"
          state={game[6]}
          onClick={() => handleClick(6)}
        />
        <Squares
          className="b-right"
          state={game[7]}
          onClick={() => handleClick(7)}
        />
        <Squares state={game[8]} onClick={() => handleClick(8)} />
      </div>
      <Button
        id="resetButton"
        onClick={() => {
          setGame(initialState);
          setO(false);
        }}
        variant="outline-info"
      >
        Reset Game
      </Button>
      <div className="fc-aqua fw-600">Raghad Al Samrout</div>
    </div>
  );
}
