import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import UserGuess from "../UserGuess/UserGuess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuess, setUserGuess] = useState([]);

  const handleSubmitGuess = (input) => {
    setUserGuess([...userGuess, input]);
  };

  return (
    <>
      <UserGuess userGuess={userGuess} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
