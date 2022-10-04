// //objects are also called hashmaps or dictionaries--> key value pairs
// //vars with curly braces usually and commas inside = mainly object
// //property (key) -- value (value)


// let lebronJames ={
//     firstName: "Leborn",
//     lastName:"James",
//     ppG: 27.8,
//     assistsPerGame: 7.3,
//     isGOAT: true,
//     teamsPlayed: ["Lakers","Cavs","Heat","Teams USA"]
// }

// console.log(lebronJames);
// console.log(lebronJames.assistsPerGame);//or this is the preferred method
// console.log(lebronJames['assistsPerGame']);

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// for(let i=0;i<pokemon.length;i++){
//     if(pokemon[i].id<115){  
//         console.log(pokemon[i].name);
//     }
// }

//console.log the pokemons id that are odds

// for(let i=0;i<pokemon.length;i++){
//     if(pokemon[i].id % 2===1){
//         console.log(pokemon[i].name, pokemon[i].id)
//     }
// }

//console.log pokemon objects that have only one type

// for(let i=0;i<pokemon.length;i++){
//     if(pokemon[i].types.length === 1){
//         console.log(pokemon[i].name, pokemon[i].types)
//     }
// }

//console.log pokemon whose only type is fire

for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].types.length === 1 && pokemon[i].types[0] === 'fire' ){
        console.log(pokemon[i].name, pokemon[i].types)
    }
}