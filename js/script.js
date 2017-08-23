document.addEventListener("DOMContentLoaded", function(event) { 
  const API_URL = 'https://pokeapi.co/api/v2';
  fetch(API_URL + '/generation/1', {
    mode: 'cors',
    redirect: 'follow',
  }).then( response => response.json() )
    .then( generation => {
      console.log(generation);
    });
});
  
