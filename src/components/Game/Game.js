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

  return (
    <>
      <UserGuess userGuess={userGuess} />
      <Form setUserGuess={setUserGuess} />
    </>
  );
}

export default Game;
