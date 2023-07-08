const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();
const testRoute = require("./Routes/testRoute"); //Import TestRoute

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Apply the CORS middleware to allow cross-origin requests
app.use("/", testRoute); // Use the testRoute for handling the routes

//start Server
app.listen(3001, () => {
  console.log("Server is Running on Port 3001");
});
