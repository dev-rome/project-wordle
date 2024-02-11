import React from "react";
import GuessCells from "../Guess/GuessCells";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function UserGuess({ userGuess, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessCells key={num} value={userGuess[num]} answer={answer} />
      ))}
    </div>
  );
}

export default UserGuess;
