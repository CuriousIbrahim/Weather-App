const express = require('express');
const math = require('mathjs');

const Weather = require('../weather-api.js');
const weatherConverter = require('../weather-util.js');

var weather = new Weather();

var getWeatherInfo = function(data) {

  let temp = data.main.temp;

  let highTemp = data.main.temp_max;
  let lowTemp = data.main.temp_min;

  let description = data.weather[0].description;
  let humidity = data.main.humidity;
  let wind = data.wind.speed;
  let windDirection = data.wind.deg;

  let country = data.sys.country;
  let name = data.name;

  return {
    name: name,
    country: country,
    temp: {
      value: math.round(weatherConverter(temp, 'c')),
      unit: 'C'
    },
    highTemp: {
      value: math.round(weatherConverter(highTemp, 'c')),
      unit: 'C'
    },
    lowTemp: {
      value: math.round(weatherConverter(lowTemp, 'c')),
      unit: 'C'
    },
    description: description,
    humidity: {
      value: humidity,
      unit: '%'
    },
    wind: {
      value: wind,
      unit: 'm/s'
    },
    windDirection: {
      value: windDirection,
      unit: '°'
    }
  }

}

var router = express.Router();

router.get('/', (req, res) => {

  if (req.query.lat && req.query.long) {

    weather.getFromCoords(req.query.lat, req.query.long).then((res1) => {
      let data = getWeatherInfo(res1);

      res.render('weather', data);
    }).catch((err) => {
      // console.log(err);
    })

  } else if (req.query.city) {

    weather.getFromCity(req.query.city).then((res1) => {
      let data = getWeatherInfo(res1);

      console.log(data);

      res.render('weather', data);
    }).catch((err) => {

      if (err.response.status === 404) {

        res.render('index', {
          anything: true,
          city: req.query.city
        });

      }
    });

  } else {
    res.render('index', {anything: false});
  }
})

module.exports = router;
