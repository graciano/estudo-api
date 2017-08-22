document.addEventListener("DOMContentLoaded", function(event) { 
  let coordinates;
  const API_URL = 'https://developers.zomato.com/api/v2.1/';
  navigator.geolocation.getCurrentPosition( position => {
    coordinates = position.coords;
    console.log(coordinates);
    let data = {
      'query': document.querySelector('#global-search').value || 'restaurant',
      'lat': coordinates.latitude,
      'lon': coordinates.longitude,
    };
    fetch(API_URL + '/locations', data).then( response => {
      //do something
      console.log(response);
    });
  });
});
  
