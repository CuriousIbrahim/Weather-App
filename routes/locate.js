const express = require("express");
const bodyParser = require("body-parser");
const math = require("mathjs");

const weatherConverter = require("../weather-util.js");
const Weather = require("../weather-api.js");

var weather = new Weather();

var router = express.Router();

var jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {
  res.status(200).send({
    result: "redirect",
    url: "/weather?lat=" + req.body.lat + "&long=" + req.body.long
  });
});

// res.sendFile(__dirname + '/public/pages/index/index.html')

module.exports = router;
