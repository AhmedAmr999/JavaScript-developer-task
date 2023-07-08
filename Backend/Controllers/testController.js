const testData = require("../TestData/TestData.json");

// Function to get random words from the wordList
const getRandomWords = (count) => {
  const shuffledWords = testData.wordList.sort(() => 0.5 - Math.random()); // Shuffle the wordList array randomly
  const selectedWords = shuffledWords.slice(0, count); // Select the specified number of words from the shuffled array
  return selectedWords; // Return the selected words
};

// Function to calculate the rank based on the final score
const calculateRank = (finalScore) => {
  const scoresBelow = testData.scoresList.filter((score) => score < finalScore); // Filter the scoresList to get scores below the final score
  const rank = (scoresBelow.length / testData.scoresList.length) * 100; // Calculate the rank as a percentage
  return Math.round(rank * 100) / 100; // Round the rank to 2 decimal places
};

exports.getRandomWords = getRandomWords; // Export the getRandomWords function
exports.calculateRank = calculateRank; // Export the calculateRank function
