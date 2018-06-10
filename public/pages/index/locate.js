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
        // window.location.href = res;
      })

      // $.ajax('weather', {
      //   type: 'POST',
      //   data: JSON.stringify(data),
      //   dataType: 'json',
      //    url: '/weather',
      //   success: (data) => {
      //     console.log('success')
      //   },
      //   error: (err) => {
      //     console.log('There seems to have been an error');
      //   },
      //   comlete: () => {
      //     console.log('Complete')
      //   }
      // }).done(() => {
      //   console.log('done');
      // }).fail((err) => {
      //   console.log(err);
      //   console.log('fail');
      // });

    })
  } else {}
});
