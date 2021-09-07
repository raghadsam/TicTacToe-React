import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";
import { useHistory } from "react-router-dom";

export default function Forms() {
  const history = useHistory();
  const [firstPlayer, setFirst] = useState("");
  const [secondPlayer, setSecond] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/game",
      state: {
        firstPlayer: firstPlayer,
        secondPlayer: secondPlayer,
      },
    });
  };

  return (
    <div id="enterNames" className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 col-11">
          <Form.Label>Please enter the name of player X: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Player X"
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 col-11">
          <Form.Label>Please enter the name of player O:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Player O"
            onChange={(e) => setSecond(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="submitButton">
          Submit
        </Button>
      </Form>
    </div>
  );
}
