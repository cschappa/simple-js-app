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

    function getAll() {
        return pokemonList;
    }

    function isValidKey(key) {
        if ( (key == 'name') || (key == 'height') || (key == 'types')) {
            return true;
        } else {
            return false;
        }
    }

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

    function findByName(name) {
        return pokemonList.filter(function(pokeman) {
            if (pokeman.name == name) {
                console.log('found one')
                return true;
            }
        });
    }

    // return pokemon[i] if pokemon[i].name == name

    return {
        getAll: getAll,
        add: add,
        findByName: findByName,
    }
})();



// iterate throug the list of pokemon
//   print their name and height in the HTLM div with ID myStuff
//   look for big ones (> 1.5 m)

const myStuff = document.getElementById("myStuff");

pokemonList = pokemonRepository.getAll();

pokemonList.forEach(pokemon => {
    myStuff.innerHTML += `<p> ${pokemon.name} height: ${pokemon.height}`;

    // check for pokemons above 1.5 meters
    if (pokemon.height > 1.5) {
        // Over size... add some text to the end of the last element (before the closing tag)
        myStuff.lastChild.insertAdjacentText("beforeend", ' - Wow! That\'s big!');
    }
});