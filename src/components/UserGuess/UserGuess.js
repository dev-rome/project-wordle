import React from "react";

function UserGuess({ userGuess }) {
  return (
    <div className="guess-results">
      {userGuess.map(({ guess, id }) => (
        <p key={id} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default UserGuess;
