var pokemon1 = {
  name: 'Charizard',
  health: 1000,
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/charizard-megay.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/charizard.gif'
  },
  attack: 200,
  defence: 200,
  speed: 500,
  specialAttack: 2000,
  specialDefence: 1000,
  moves: [
    {
      name: 'Fire Punch',
      damage: 100,
      element: 'fire'
    },
    {
      name: 'Flamethrower',
      damage: 100,
      element: 'fire'
    },
    {
      name: 'Scratch',
      damage: 100,
      element: 'normal'
    },
    {
      name: 'Fire Blast',
      damage: 100,
      element: 'fire'
    }
  ]
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

var ash = {
  name: "Ash",
  pokemon: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]
}

var gary = {
  name: "Gary",
  pokemon: []
}

var game = {
  player1: ash,
  player2: gary,
  start: function(){
    // Name
    document.querySelector('#player-1 .name').innerText = this.player1.pokemon[0].name;
    // document.querySelector('#player-2 .name').innerText = this.player2.pokemon[0].name;

    //Avatar
    document.querySelector('#player-1 .avatar img').setAttribute('src', this.player1.pokemon[0].avatar.back);
    // document.querySelector('#player-1 .avatar img').setAttribute('src', this.player2.pokemon[0].avatar.back);

    //Moves
    for(var i = 0; i < this.player1.pokemon[0].moves.length; i++){
      document.querySelector('#player-1 #move-' + (i+1)).innerText = this.player1.pokemon[0].moves[i].name;
      document.querySelector('#player-1 #move-' + (i+1)).setAttribute('class', this.player1.pokemon[0].moves[i].element);
    }
  }
};

game.start();


