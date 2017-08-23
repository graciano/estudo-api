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

  let searchElem = document.querySelector('#global-search');

  searchElem.addEventListener('keyup',
    debounce( () => {
      let results = [];
      let query = searchElem.value;
      for (let i=0; i<pokemons.length; i++) {
        let p = pokemons[i];
        if (p.name.search(query) !== -1) results.push(p);
      }
      console.log(results);
      let pList = document.querySelector('.pokemon-list');
      pList.innetHTML = '';
      for(let i=0; i<results.length; i++) {
        let p = results[i];
        pList.innerHTML += `<li><a href="pokemon.html?name=${p.name}">${p.name}</a></li>`;
      }
    }, 500));
});
