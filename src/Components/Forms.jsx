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
    console.log(firstPlayer);
    console.log(secondPlayer);
  };

  return (
    <div id="enterNames">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 col-11">
          <Form.Label>Please enter the name of the first player:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Player"
            onChange={(e) => setFirst(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-11">
          <Form.Label>Please enter the name of the second player:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Second Player"
            onChange={(e) => setSecond(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="button">
          Submit
        </Button>
      </Form>
    </div>
  );
}
