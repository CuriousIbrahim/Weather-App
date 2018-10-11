var privateKey = prompt("Please enter your private key for DarkSky API:");

var temperature;
var summaryText;
var humidity;
var percipProb;
var windSpeed;

function getDarkSky(privateKey, long, lat) {

    var url = `https://api.darksky.net/forecast/${privateKey}/${lat},${long}`

    console.log(url)

    var weatherResponse;

    axios.get(url, {
            crossdomain: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                host: '127.0.0.1',
                port: 9000,
            }
        })
        .then(function (response) {
            response = response.data.currently;

            temperature = response.temperature;
            summaryText = response.summary;
            humidity = response.humidity;
            percipProb = response.precipProbability;
            windSpeed = response.windSpeed;

            console.log(temperature, icon, summaryText, humdity, percipProb, windSpeed);



        })
        .catch(function (error) {

            console.log(error);

        });

}



function getPosition(callback) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (location) {

            callback(privateKey, location.coords.longitude, location.coords.latitude);

        });
    }


}

getPosition(getDarkSky)
