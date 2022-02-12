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

    function add(item) {
        pokemonList.push(item);
    }

    return {
        getAll: getAll,
        add: add,
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