const express = require('express');
const math = require('mathjs');

const Weather = require('../weather-api.js');
const weatherConverter = require('../weather-util.js');

var weather = new Weather();

var getWeatherInfo = function(data) {

  let temp = data.main.temp;
  let temp_unit = 'C';
  let description = data.weather[0].description;
  let humidity = data.main.humidity;
  let wind = data.wind.speed;
  let windDirection = data.wind.deg + " degrees";

  return {
    temp: math.round(weatherConverter(temp, 'c')),
    temp_unit: temp_unit,
    description: description,
    humidity: humidity,
    wind: wind,
    windDirection: windDirection
  }

}

var router = express.Router();

router.get('/', (req, res) => {

  if (req.query.lat && req.query.long) {

    weather.getFromCoords(req.query.lat, req.query.long).then((res1) => {
      let data = getWeatherInfo(res1);

      console.log(data);

      res.render('weather', data);
    }).catch((err) => {
      // console.log(err);
    })

  } else if (req.query.city) {

    weather.getFromCity(req.query.city).then((res1) => {
      let data = getWeatherInfo(res1);

      res.render('weather', data);
    }).catch((err) => {

      if (err.response.status === 404) {

        res.render('index', {city: req.query.city});

      }
    });

  }
})

module.exports = router;
