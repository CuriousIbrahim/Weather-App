const express = require('express')
const path = require('path')
const math = require('mathjs')

const Weather = require('./weather.js')
const weatherConverter = require('./weather-util.js')

var app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(express.static('./public'));

var weather = new Weather();

// listen to port
app.listen('3000');

// index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/index/index.html');
  // res.send('Hello World!');
});

// weather
app.get('/weather', (req, res) => {

  weather.weather('london').then((data) => {
    let temp = data.main.temp;
    let temp_unit = 'K';
    let description = data.weather.description;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let windDirection = data.wind.deg + " degrees";

    res.render('weather', {

      temp: math.round(weatherConverter(temp, 'c')),
      temp_unit: temp_unit,
      description: description,
      humidity: humidity,
      wind: wind,
      windDirection: windDirection
    });
  }).catch((err) => {
    console.log(err);
  })
})
