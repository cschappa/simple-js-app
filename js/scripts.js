// Pokemon IIFE
let pokemonRepository = (function () {
    // emapty array to hold Pokemons fetched from API
    let pokemonList = [];

    // pokeapi.co API endpoint to get 150 pokemons
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // returns all pokemon from the Repository
    function getAll() {
        return pokemonList;
    }

    // check that a pokemon object contains the proper keys
    function isValidKey(key) {
        if ( (key == 'name') || (key == 'detailsUrl') ) {
            return true;
        } else {
            return false;
        }
    }

    // adds a pokemon object to the repository's pokemonList
    function add(item) {
        // check that input is object and contains the correct keys
        let validKeys = true;
        if ( typeof(item) === 'object') {
            Object.keys(item).forEach(function(key) {
                if ( !isValidKey(key) ) {
                    validKeys = false;
                    console.error('error: ' + key + ' is not a key, can only add pokeman objects');
                }
            });
            if (validKeys) {
                // add pokemon to the list
                pokemonList.push(item);
            }
        } else {
            // not an object
            console.error('error: can only add pokeman objects');
        }
    }

    // add LI and Button to the HTML
    function addListItem(pokemon) {
        // find the pokemon list
        let pokemonItems = document.querySelector('.pokemon-list');

        // create a LI
        let listItem = document.createElement('li');

        // create a button with the pokemon's name
        let button = document.createElement('button');
        button.innerText = pokemon.name;

        // style the button
        button.classList.add('primary-button');

        // add the button to the list item
        listItem.appendChild(button);

        // add the list item to the unordered list in index.html
        pokemonItems.appendChild(listItem);

        // add event handler to the button
        addEventListenerToButton(button, pokemon);
    }

    // add event listner to a pokemon button
    function addEventListenerToButton(button, pokemon) {
        // add event handler
        button.addEventListener('click', () => showDetails(pokemon));
    }

    // display details about a pokemon object
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (){
            console.log(pokemon);
        });
    }

    // display loading message on page while getting data from API
    function showLoadingMessage() {
        let pageLoader = document.querySelector('.loading');
        pageLoader.style.visibility = "visible";
        console.log('loading...');
    }

    // hide loading message on page once data is fetched from API
    function hideLoadingMessage() {
        let pageLoader = document.querySelector('.loading');
        pageLoader.style.visibility = "hidden";
        console.log('done loading');
    }

    // check pokemon repository for a pokemon with name
    function findByName(name) {
        return pokemonList.filter(function(pokemon) {
            if (pokemon.name == name) {
                console.log('found one');
                return true;
            }
        });
    }

    // load list of Pokemon from the API
    function loadList() {

        showLoadingMessage();

        // fetch pokemons via the api
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            hideLoadingMessage();
            // for each pokemon in the json file
            //      grab pokemon's info and add to the repository
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                // add pokemon to pokemonList
                add(pokemon);
            });
        }).catch(function (e) {
            hideLoadingMessage();
            console.error(e);
        });
    }


    // load Pokemon details vai API
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;

        showLoadingMessage();

        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            hideLoadingMessage();
            // add pokemon details to pokemon
            pokemon.imageUrl = details.sprites.other.dream_world.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            hideLoadingMessage();
            console.error(e);
        });
    }

    // methods available from the pokemon repository
    return {
        getAll: getAll,
        add: add,
        findByName: findByName,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    }
})();

// Grab a list of pokemon from pokeapi.co then add to the repository
//   Add button's with the pokemon's name to the HTML
pokemonRepository.loadList().then(function () {
    // data is loaded, now setup page
    pokemonRepository.getAll().forEach( pokemon => {
        // Add a pokemon button LI to the html page
        pokemonRepository.addListItem(pokemon);
    });
});