//get value from urlParams, from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

document.addEventListener("DOMContentLoaded", function(event) {
  let pokemon = {};
  const API_URL = 'https://pokeapi.co/api/v2';
  fetch(API_URL + `/pokemon/${urlParams.name}`, {
    mode: 'cors',
    redirect: 'follow',
  }).then( response => response.json() )
    .then( pokemon => {
      console.log(pokemon);
    });
});
