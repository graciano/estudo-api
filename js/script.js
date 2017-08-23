function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

document.addEventListener("DOMContentLoaded", function(event) { 
  let pokemons = [];
  const API_URL = 'https://pokeapi.co/api/v2';
  fetch(API_URL + '/generation/1', {
    mode: 'cors',
    redirect: 'follow',
  }).then( response => response.json() )
    .then( generation => {
      console.log(generation);
      pokemons = generation['pokemon_species'];
    });

  console.log(document.querySelector('#global-search'));

  document.querySelector('#global-search').addEventListener('keyup', function(ev) {
//    debounce( () => {
      let results = [];
      console.log(this);
      let query = this.value;
      for (let i=0; i<pokemons.length; i++) {
        let p = pokemons[i];
        if (p.name.search(query) !== -1) results.push(p);
      }
      console.log(results);
//    }, 500);
  });
});
  
