// Weather API: https://openweathermap.org/current

const express = require('express')
const Weather = require('./weather.js')

var weather = new Weather();

var app = express();

let data = weather.weather('london');

data.then((data) => {
  console.log(data);
})

// Listen to port
app.listen('3000')

app.get('/', (req, res) => res.send('Hello, World!'))
