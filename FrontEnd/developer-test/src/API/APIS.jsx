const API_MY_API = "http://localhost:3001";

// Function to fetch words data from the API
export const getWordsApi = async () => {
  try {
    const response = await fetch(`${API_MY_API}/words`); // Send a GET request to the words endpoint
    const data = await response.json(); // Parse the response data
    return data; // Return the fetched words data
  } catch (error) {
    console.log(error); // Log any errors that occur during the request
    return []; // Return an empty array in case of an error
  }
};

// Function to send the final score to the API and get the rank in response
export const sendScoreApi = async (finalScore) => {
  try {
    const response = await fetch(`${API_MY_API}/rank`, {
      // Send a POST request to the rank endpoint
      method: "POST", // Use the POST method
      headers: {
        "Content-Type": "application/json", // Set the request body content type to JSON
      },
      body: JSON.stringify({ finalScore }), // Convert the finalScore to JSON and include it in the request body
    });
    const data = await response.json(); // Parse the response data
    return data.rank; // Return the rank value from the response
  } catch (error) {
    console.log(error); // Log any errors that occur during the request
    return null; // Return null in case of an error
  }
};
