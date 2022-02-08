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


// iterate throug the list of pokemon
//   print there name and height
//   look for big ones (> 1.5 m)

for (let i = 0; i < pokemonList.length; i++) {

    // check for pokemons above 1.5 meters
    if (pokemonList[i].height > 1.5) {
        // Over 1.5 m... Wow, these guys are big!
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow! That\'s big</p>');
    } else {
        // 1.5 m or less
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>');
    }
}