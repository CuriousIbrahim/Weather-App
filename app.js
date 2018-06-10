const express = require('express')
const path = require('path')
const math = require('mathjs')
const bodyParser = require('body-parser')

const Weather = require('./weather-api.js')
const weatherConverter = require('./weather-util.js')

var app = express();

// use bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'ejs');

// use ./public as static
app.use(express.static('./public'));

// create Weather object
var weather = new Weather();

// listen to port
app.listen('3000');
console.log('Listening to port 3000');

// get routes
var routes = require('./routes/index.js');
var weather = require('./routes/weather.js');
var locate = require('./routes/locate.js')

// set routes
app.use('/', routes);
app.use('/weather', weather);
app.use('/locate', locate)

// index
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/pages/index/index.html');
//    res.send('Hello World!');
// });

// weather
// app.get('/weather', (req, res) => {
//
//   weather.getFromCity('london').then((data) => {
//     let temp = data.main.temp;
//     let temp_unit = 'K';
//     let description = data.weather.description;
//     let humidity = data.main.humidity;
//     let wind = data.wind.speed;
//     let windDirection = data.wind.deg + " degrees";
//
//     res.render('weather', {
//
//       temp: math.round(weatherConverter(temp, 'c')),
//       temp_unit: temp_unit,
//       description: description,
//       humidity: humidity,
//       wind: wind,
//       windDirection: windDirection
//     });
//   }).catch((err) => {
//     console.log(err);
//   })
// })

// app.post('/locate', jsonParser, (req, res) => {
//   console.log(req.body);
//
//   weather.getFromCoords(req.body.lat, req.body.long).then((data) => {
//     let mainData = {
//       temp: math.round(weatherConverter(data.main.temp, 'c')),
//       temp_unit: 'C',
//       description: data.weather.description,
//       humidity: data.main.humidity,
//       wind: data.wind.speed,
//       windDirection: data.wind.deg + " degrees"
//     }
//
//     console.log(mainData);
//
//      res.render('weather', mainData);
//     res.redirect('/weather');
//   }).catch((err) => {
//     console.log(err);
//   })
//
//    res.sendFile(__dirname + '/public/pages/index/index.html')
// });