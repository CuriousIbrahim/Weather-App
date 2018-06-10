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

      $.post('/locate', data).done((res) => {
        console.log('done');
        window.location.replace(res.url);
      })

    })
  } else {}
});
