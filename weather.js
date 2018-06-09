const axios = require('axios')

const API_KEY = require('./config.js')

const MAIN_URL = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = class Weather {

  weather(lat, long) {
    let url = MAIN_URL + '?lat=' + long + '&lon=' + long + '&APPID=' + API_KEY;

    axios.get(url).then((res) => {
      console.log(res)
    })

  }

  // returns a Promise
  async weather(city) {
    let url = MAIN_URL + '?q=' + city + '&APPID=' + API_KEY;

    let toReturn;

    return await axios.get(url).then((res) => {
      return res.data;
    })

    // return toReturn;
  }

}
