// Pokemon IIFE
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Flareon',
            height: 0.9,
            types: ['fire']
        },
        {
            name: 'Ivysaur',
            height: 1,
            types: ['grass', 'poison']
        },
        {
            name: 'Dewgong',
            height: 1.7,
            types: ['ice', 'water']
        },
        {
            name: 'Heracross',
            height: 1.5,
            types: ['bug', 'fighting']
        }
    ];

    // returns all pokemon from the Repository
    function getAll() {
        return pokemonList;
    }

    // check that a pokemon object contains the proper keys
    function isValidKey(key) {
        if ( (key == 'name') || (key == 'height') || (key == 'types')) {
            return true;
        } else {
            return false;
        }
    }

    // adds a pokemon object to the repository
    function add(item) {
        // check that input is object and contains the correct keys
        let validKeys = true;
        if ( typeof(item) === 'object') {
            Object.keys(item).forEach(function(key) {
                if ( !isValidKey(key) ) {
                    validKeys = false;
                    console.log('error: ' + key + ' is not a key, can only add pokeman objects');
                }
            });
            if (validKeys) {
                // add pokemon to the list
                pokemonList.push(item);
            }
        } else {
            // not an object
            console.log('error: can only add pokeman objects');
        }
    }

    // add LI and Button to the HTML
    function addListItem(pokemon) {
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
        button.addEventListener('click',  function () {showDetails(pokemon);} );
    }

    // display details about a pokemon object
    function showDetails(pokemon) {
        console.log(pokemon);
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

    // methods available from the pokemon repository
    return {
        getAll: getAll,
        add: add,
        findByName: findByName,
        addListItem: addListItem,
    }
})();



// iterate throug the list of pokemon in the repository
//   Add button's with the pokemon's name to the HTML

const myStuff = document.getElementById("myStuff");
let pokemonItems = document.querySelector('.pokemon-list');
let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(pokemon => {
    // Add a pokemon button LI to the html page
    pokemonRepository.addListItem(pokemon);
});