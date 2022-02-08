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

const myStuff = document.getElementById("myStuff");

for (let i = 0; i < pokemonList.length; i++) {

    // openning <p> tag w/ name and height
    myStuff.innerHTML += `<p> ${pokemonList[i].name} height: ${pokemonList[i].height}`;

    // check for pokemons above 1.5 meters
    if (pokemonList[i].height > 1.5) {
        // Over size... add some text to the end of the last element (before the closing tag)
        myStuff.lastChild.insertAdjacentText("beforeend", ' - Wow! That\'s big!');
    }
}