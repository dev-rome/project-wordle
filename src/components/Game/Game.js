import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import UserGuess from "../UserGuess/UserGuess";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [userGuess, setUserGuess] = useState([]);

  const handleSubmitGuess = (input) => {
    const nextGuess = [...userGuess, input];
    setUserGuess(nextGuess);

    if (input === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <UserGuess userGuess={userGuess} answer={answer} />
      <Form gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus === "won" && <WonBanner numOfGuesses={userGuess.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
