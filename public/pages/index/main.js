$('#find-me').on('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      let data = {
        lat: lat,
        long: long
      };

      console.log(data);

      window.location.replace('/weather?lat=' + data.lat + '&long=' + data.long);

      // $.post('/locate', data).done((res) => {
      //   console.log('done');
      //   window.location.replace(res.url);
      // })

    })
  } else {}
});

$('#search').on('click', () => {

  console.log('test');

  console.log($('#search-bar'));

  let city = $('#search-bar').val();

  console.log(city);

  window.location.replace('/weather?city=' + city);

});
