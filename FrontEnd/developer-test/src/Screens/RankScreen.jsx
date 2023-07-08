import React, { useState, useEffect } from "react";
import { sendScoreApi } from "../API/APIS";
import "../Styles/ScreenStyle.css";

const RankScreen = () => {
  const [score, setScore] = useState(0); // State to store the score
  const [rank, setRank] = useState(""); // State to store the rank

  useEffect(() => {
    calculateScore(); // Call the calculateScore function when the component mounts
  }, []);

  const calculateScore = () => {
    const correctAnswers = JSON.parse(localStorage.getItem("correctAnswers")); // Get the number of correct answers from localStorage
    const totalQuestions = JSON.parse(localStorage.getItem("totalQuestions")); // Get the total number of questions from localStorage
    const newScore = ((correctAnswers / totalQuestions) * 100).toFixed(1); // Calculate the score as a percentage and round to 1 decimal place
    setScore(newScore); // Set the score state with the calculated score

    // Send the final score to the server to calculate the rank
    sendScore(newScore);
  };

  const sendScore = async (finalScore) => {
    const rankData = await sendScoreApi(finalScore); // Call the sendScoreApi function to send the final score to the server and get the rank in response
    if (rankData !== null) {
      setRank(rankData); // Set the rank state with the received rank value
    }
  };

  return (
    <div className="container">
      <h1>Rank Screen</h1>
      {/* Display the score with a fallback value of "0%" if it's NaN */}
      <p>Score: {isNaN(score) ? "0%" : `${score}%`}</p>
      {/* // Display the rank with a
      fallback value of "0%" if it's NaN */}
      <p>Rank: {isNaN(rank) ? "0%" : `${rank}%`}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
      {/* //
      Button to reload the page and play again */}
    </div>
  );
};

export default RankScreen;
