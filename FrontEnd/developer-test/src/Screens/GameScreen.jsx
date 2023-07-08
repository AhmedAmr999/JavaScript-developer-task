import React, { useEffect, useState } from "react";
import ProgressBar from "../Components/ProgressBar";
import WordContainer from "../Components/WordContainer";
import { getWordsApi } from "../API/APIS";
import "../Styles/ScreenStyle.css";

const GameScreen = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    // Fetch the words data from the API
    const wordsData = await getWordsApi();
    setWords(wordsData);
  };

  const handleOptionClick = (option) => {
    if (isAnswered) {
      return; // Prevent multiple selections
    }

    setSelectedOption(option);
    const currentWord = words[currentIndex];
    const isCorrect = currentWord.pos.toLowerCase() === option.toLowerCase();
    setIsCorrect(isCorrect);
    setIsAnswered(true);

    // Store the result in localStorage
    if (isCorrect) {
      const correctAnswers =
        JSON.parse(localStorage.getItem("correctAnswers")) || 0;
      localStorage.setItem(
        "correctAnswers",
        JSON.stringify(correctAnswers + 1)
      );
    }

    const totalQuestions =
      JSON.parse(localStorage.getItem("totalQuestions")) || 0;
    localStorage.setItem("totalQuestions", JSON.stringify(totalQuestions + 1));

    const newProgress = ((currentIndex + 1) / words.length) * 100;
    setProgress(newProgress);

    setTimeout(() => {
      if (currentIndex === words.length - 1) {
        // Last question
        window.location.href = "/rank"; // Redirect to the rank screen
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSelectedOption("");
        setIsAnswered(false);
      }
    }, 1500);
  };

  return (
    <div className="container">
      <h1>Word Categorization Game</h1>
      <ProgressBar progress={progress} />
      {currentIndex < words.length && (
        <WordContainer
          // Pass the current word to the WordContainer component
          word={words[currentIndex]?.word}
          // Pass the selected option to the WordContainer component
          selectedOption={selectedOption}
          // Pass the event handler for option clicks to the WordContainer component
          handleOptionClick={handleOptionClick}
          // Pass the flag indicating whether an answer has been selected to the WordContainer component
          isAnswered={isAnswered}
          // Pass the flag indicating whether the selected answer is correct to the WordContainer component
          isCorrect={isCorrect}
          // Pass the available options for the part of speech to the WordContainer component
          options={["noun", "adverb", "adjective", "verb"]}
        />
      )}
    </div>
  );
};

export default GameScreen;
