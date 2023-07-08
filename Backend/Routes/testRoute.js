const express = require("express");
const router = express.Router();
const testData = require("../TestData/TestData.json");
const {
  getRandomWords,
  calculateRank,
} = require("../Controllers/testController");

router.get("/words", (req, res) => {
  const words = getRandomWords(10); // Get 10 random words from the getRandomWords function
  res.json(words); // Send the words as a JSON response
});

router.post("/rank", (req, res) => {
  const { finalScore } = req.body; // Get the final score from the request body
  const rank = calculateRank(finalScore); // Calculate the rank based on the final score
  res.json({ rank }); // Send the rank as a JSON response
});

router.get("/rank", (req, res) => {
  const ranksList = testData.scoresList.slice().sort((a, b) => {
    calculateRank(b) - calculateRank(a);
  }); // Sort the scoresList array in descending order of ranks

  const result = testData.scoresList.map((score) => {
    const rank = calculateRank(score).toFixed(2); // Calculate the rank for each score and round it to 2 decimal places
    return `Score: ${score} => Rank: ${rank}`; // Format the score and rank as a string
  });

  res.json({ ranks: result }); // Send the list of scores with their respective ranks as a JSON response
});

module.exports = router;
