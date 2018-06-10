const axios = require('axios')

const API_KEY = require('./api-key.js')

const MAIN_URL = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = class Weather {

  async getFromCoords(lat, long) {
    console.log('Going to', 'lat=', lat, 'and', 'long=', long);
    let url = `${MAIN_URL}?lat=${lat}&lon=${long}&APPID=${API_KEY}`;
    console.log(url);
    return await axios.get(url).then((res) => {
      return res.data;
    })

  }

  // returns a Promise
  async getFromCity(city) {
    let url = MAIN_URL + '?q=' + city + '&APPID=' + API_KEY;
    console.log(url);
    return await axios.get(url).then((res) => {
      return res.data;
    })

    // return toReturn;
  }

}
