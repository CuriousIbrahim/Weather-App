// Weather API: https://openweathermap.org/current

const express = require('express')

var app = express();

// Listen to port
app.listen('3000')

app.get('/', (req, res) => res.send('Hello, World!'))
