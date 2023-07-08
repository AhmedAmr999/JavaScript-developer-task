import React from "react";
import "../Styles/ScreenStyle.css";

const WordContainer = (props) => {
  // Destructure the props
  const {
    word,
    selectedOption,
    handleOptionClick,
    isAnswered,
    isCorrect,
    options,
  } = props;

  return (
    <div className="word-container">
      {/* Heading for the word */}
      <h2>Word:</h2>
      {/* Render the word and apply a CSS class based on whether it's answered correctly or not */}
      <p
        className={`word ${
          isAnswered && isCorrect ? "correct-word" : "incorrect-word"
        }`}
      >
        {word}
      </p>
      {/* Heading for the options */}
      <h2>Select the correct part of speech:</h2>
      <div className="options">
        {/* Render each option as a button */}
        {options.map((option) => (
          <button
            key={option}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {/* Render feedback for correct and incorrect answers */}
      {isAnswered && (
        <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      )}
    </div>
  );
};

export default WordContainer;
