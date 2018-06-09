// Weather API: https://openweathermap.org/current

const express = require('express')
const Weather = require('./weather.js')

var app = express();
app.set('view engine', 'mustache');
app.use(express.static('./public'))

var weather = new Weather();

// let data = weather.weather('london');
//
// data.then((data) => {
//   console.log(data);
// })

// Listen to port
app.listen('3000')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/index/index.html');
  // res.send('Hello World!');
})
