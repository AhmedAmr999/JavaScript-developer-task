# JavaScript-developer-task
Task is to make an interactive activity using React.js, node.js, and Express.js that helps the students practice categorizing a set of words according to their part of speech.

# Word Categorization App

This is a word categorization app built with React.js, Node.js, and Express.js. The app allows students to practice categorizing words according to their part of speech.

## Installation

1. Clone the repository to your local machine using the following command:

2. Navigate to the Backend folder:

3. Install the dependencies:

4. Start the server:

5. Open another terminal window and navigate to the FrontEnd->developer-test folder:

6. Install the dependencies:

7. Start the client:


## Usage

1. Access the app in your web browser by visiting http://localhost:3000.

2. The backend server is running on port 3001. The client-side app will make requests to this server for data and functionality.

3. The app consists of two screens: Practice Screen and Rank Screen.

4. Practice Screen:
- You will be presented with a word and four buttons representing different parts of speech.
- Click on the button that corresponds to the correct part of speech for the word.
- You will receive feedback on whether your answer is correct or incorrect.
- The progress bar at the top of the screen shows your progress in percentage.
- Continue answering questions until you reach the end.

5. Rank Screen:
- After answering the final question, you will be redirected to the Rank Screen.
- The screen will display your score and rank.
- Click on the "Try Again" button to restart the activity.

## API Endpoints

The app uses the following API endpoints:

- `GET /words`: Returns a list of randomly selected words for the practice screen.
- `POST /rank`: Accepts the final score and returns the rank percentage rounded to the nearest hundredth.
- `GET /rank`: Returns a list of ranks with corresponding scores.

Feel free to explore the code and make any modifications as needed.
