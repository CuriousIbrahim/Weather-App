const express = require("express");
const helmet = require("helmet");
const path = require("path");
const math = require("mathjs");
const bodyParser = require("body-parser");

const Weather = require("./weather-api.js");
const weatherConverter = require("./weather-util.js");

var app = express();

// use helmet (for security)
app.use(helmet());

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set view engine
app.set("view engine", "ejs");

// use ./public as static
app.use(express.static("./public"));

// create Weather object
var weather = new Weather();

// listen to port
const port = process.env.PORT || "8000";

app.listen(port);
console.log(`Listening to port ${port}`);

// get routes
var routes = require("./routes/index.js");
var weather = require("./routes/weather.js");
var locate = require("./routes/locate.js");

// set routes
app.use("/", routes);
app.use("/weather", weather);
app.use("/locate", locate);
