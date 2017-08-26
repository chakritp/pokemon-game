var pokemon1 = {
  name: 'Charizard',
  health: 1000,
  avatar: {
    front: '',
    back: ''
  },
  attack: 200,
  defence: 200,
  speed: 500,
  specialAttack: 2000,
  specialDefence: 1000,
  moves: ['fire punch', 'flamethrower', 'scratch', 'fire blast'],
  firePunch: function(opponent){
    opponent.health -= 200;
    console.log('Charizard used fire punch on ' + opponent.name + " for 200 damage. " + opponent.name + " has " + opponent.health + " remaining.");
  }
}

var pokemon2 = {
  name: 'Ho Oh',
  health: 3000,
  avatar: {
    front: '',
    back: ''
  },
  attack: 240,
  defence: 500,
  speed: 800,
  specialAttack: 4000,
  specialDefence: 2000,
  moves: ['fly', 'fireblast', 'rainbow blast', 'peck']
}

var pokemon3 = {
  name: 'Lugia',
  avatar: {
    front: '',
    back: ''
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: ['hydropump', 'hyper beam', 'surf', 'psychic']
}

var pokemon4 = {
  name: 'Kyogre',
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: ['hydropump', 'water fall', 'surf', 'dive']
}

var pokemon5 = {
  name: 'Groudon',
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: ['earthquake', 'hyper beam', 'fire blast', 'blaze']
}

var pokemon6 = {
  name: 'Articuno',
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: ['ice beam', 'hyper beam', 'fly', 'blizzard']
}

pokemon1.nextPokemon = pokemon2;
pokemon2.nextPokemon = pokemon3;
pokemon3.nextPokemon = pokemon4;
pokemon4.nextPokemon = pokemon5;
pokemon5.nextPokemon = pokemon6;
pokemon6.nextPokemon = pokemon1;

var myPokemon = [];
myPokemon.unshift(pokemon2);
myPokemon.unshift(pokemon3);
myPokemon.push(pokemon4);
myPokemon.push(pokemon5);
myPokemon.push(pokemon6);
myPokemon.push(pokemon1);


var game = {
  player1: pokemon1,
  player2: pokemon2,
  start: function(){
    
  }
}


