document.addEventListener("DOMContentLoaded", function(event) { 
  let coordinates;
  const API_URL = 'https://pokeapi.co/api/v2';
  fetch(API_URL + '/pokemon/1', {
    mode: 'cors',
    redirect: 'follow',
  }).then( response => response.json() )
    .then( pokemon => {
      console.log(pokemon);
    });
});
  
