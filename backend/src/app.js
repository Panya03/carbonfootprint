const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path"); // Make sure this line is correctly placed
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3010;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "signup", "singup.html")); 
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})