import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ setUserGuess }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGuess = {
      id: uuidv4(),
      guess: inputValue,
    };
    setUserGuess((prevGuess) => [...prevGuess, newGuess]);
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
