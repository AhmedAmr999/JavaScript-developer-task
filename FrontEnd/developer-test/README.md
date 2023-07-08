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






















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





