import React, { useState } from "react";

function Form({ gameStatus, handleSubmitGuess }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter Guess</label>
        <input
          type="text"
          id="guess-input"
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default Form;
