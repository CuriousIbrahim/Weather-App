$("#find-me").on("click", () => {
  if ("geolocation" in navigator) {
    $("#loading").css("visibility", "visible");
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      let data = {
        lat: lat,
        long: long
      };

      window.location.replace(
        "/weather?lat=" + data.lat + "&long=" + data.long
      );
    });
  } else {
    $("#message").html(
      `<div class='container'>
      <div class="alert alert-danger">
        <p>
          Geolocation is turned off, we cannot find your location.
        </p>
      </div>
    </div>`
    );
  }
});

function searchCity(city) {
  window.location.replace("/weather?city=" + city);
}

$("#search-bar").on("keyup", function(e) {
  if (e.keyCode == 13) {
    let city = $("#search-bar").val();
    searchCity(city);
  }
});

$("#search").on("click", () => {
  let city = $("#search-bar").val();

  searchCity(city);
});
