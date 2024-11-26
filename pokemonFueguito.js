//Tengo que mostrar todos los pokemones que sean de tipo fuego:

let pokemon = [

    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
]

let pokeFuego = pokemon.filter(element => element.tipo === 'Fuego'); // si le pongo agua me trae los de agua, etc.
console.log(pokeFuego); // acá me imprime los pokemones de fuego =)