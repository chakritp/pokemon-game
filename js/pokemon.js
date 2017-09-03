function Pokemon(name, avatar, stats, moves) {
  this.name = name
  this.avatar = {
    front: avatar.front,
    back: avatar.back
  }
  this.stats = {
    health: stats.health,
    attack: stats.attack,
    defense: stats.defense,
    speed: stats.speed,
    specialAttack: stats.specialAttack,
    specialDefence: stats.specialDefence,
  }
  this.moves = moves
}

// attack functionality
Pokemon.prototype.attack = function(moveIndex, opponent){
  moveName = this.moves[moveIndex].name
  damage = this.moves[moveIndex].damage
  console.log("Before attack: " + opponent.stats.health)
  opponent.stats.health -= damage
  
  console.log(this.name + " used " + moveName + ". " + opponent.name + " has " + opponent.stats.health + " remaining")
}

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/charizard-megay.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/charizard.gif'
}

stats = {
  health: 1000,
  attack: 200,
  defence: 200,
  speed: 500,
  specialAttack: 2000,
  specialDefence: 1000
}

moves = [
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

var charizard = new Pokemon('Charizard', avatar, stats, moves)

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/ho-oh.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/ho-oh.gif'
}

stats = {
  health: 3000,
  attack: 240,
  defence: 500,
  speed: 800,
  specialAttack: 4000,
  specialDefence: 2000,
}

moves = [
  {
    name: 'Fly',
    damage: 100,
    element: 'flying'
  },
  {
    name: 'Fireblast',
    damage: 100,
    element: 'fire'
  },
  {
    name: 'Rainbow Blast',
    damage: 100,
    element: 'fire'
  },
  {
    name: 'Peck',
    damage: 100,
    element: 'flying'
  }
]

var hooh = new Pokemon('Ho Oh', avatar, stats, moves)

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/lugia.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/lugia.gif'
}

stats = {
  health: 3000,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
}

moves = [
  {
    name: 'Hydropump',
    damage: 100,
    element: 'water'
  },
  {
    name: 'Hyper Beam',
    damage: 100,
    element: 'normal'
  },
  {
    name: 'Surf',
    damage: 100,
    element: 'water'
  },
  {
    name: 'Psychic',
    damage: 100,
    element: 'psychic'
  }
]

var lugia = new Pokemon('Lugia', avatar, stats, moves)

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/kyogre.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/kyogre.gif'
}

stats = {
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000
}

moves: [
  {
    name: 'Hydropump',
    damage: 100,
    element: 'water'
  },
  {
    name: 'Waterfall',
    damage: 100,
    element: 'water'
  },
  {
    name: 'Surf',
    damage: 100,
    element: 'water'
  },
  {
    name: 'Dive',
    damage: 100,
    element: 'water'
  }
]

var kyogre = new Pokemon('Kyogre', avatar, stats, moves)

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/groudon.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/groudon.gif'
}

stats = {
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000
}

moves: [
  {
    name: 'Earthquake',
    damage: 100,
    element: 'ground'
  },
  {
    name: 'Hyper Beam',
    damage: 100,
    element: 'normal'
  },
  {
    name: 'Fire Blast',
    damage: 100,
    element: 'fire'
  },
  {
    name: 'Blaze',
    damage: 100,
    element: 'fire'
  }
]

var groudon = new Pokemon('Groudon', avatar, stats, moves)

avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/articuno.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/articuno.gif'
}

stats = {
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000
}

moves: [
  {
    name: 'Ice Beam',
    damage: 100,
    element: 'ice'
  },
  {
    name: 'Hyper Beam',
    damage: 100,
    element: 'normal'
  },
  {
    name: 'Fly',
    damage: 100,
    element: 'flying'
  },
  {
    name: 'Blizzard',
    damage: 100,
    element: 'ice'
  }
]

var articuno = new Pokemon('Articuno', avatar, stats, moves)

// ------------------------------------------------------------------------------------------------------------------------------------------------
avatar = {
  front: 'http://www.pokestadium.com/sprites/xy/blastoise.gif',
  back: 'http://www.pokestadium.com/sprites/xy/back/blastoise.gif'
}

stats = {
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000
}

moves = [
  {
    name: "Hydropump",
    element: "water",
    damage: 100
  },
  {
    name: "Surf",
    element: "water",
    damage: 100
  },
  {
    name: "Ice Beam",
    element: "ice",
    damage: 100
  },
  {
    name: "Dive",
    element: "water",
    damage: 100
  }
]

var blastoise = new Pokemon('Blastoise', avatar, stats, moves)

var pokemonB = {
  name: 'Mewtwo',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/mewtwo.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/mewtwo.gif'
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: [
    {
      name: "Psychic",
      element: "psychic",
      damage: 100
    },
    {
      name: "Hyperbeam",
      element: "normal",
      damage: 100
    },
    {
      name: "Psycho Cut",
      element: "psychic",
      damage: 100
    },
    {
      name: "Swift",
      element: "normal",
      damage: 100
    }
  ]
}

var pokemonC = {
  name: 'Moltres',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/moltres.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/moltres.gif'
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: [
    {
      name: "Flamethrower",
      element: "fire",
      damage: 100
    },
    {
      name: "Fly",
      element: "normal",
      damage: 100
    },
    {
      name: "Fire Blast",
      element: "psychic",
      damage: 100
    },
    {
      name: "Sky Attack",
      element: "flying",
      damage: 100
    }
  ]
}

var pokemonD = {
  name: 'Pikachu',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/pikachu.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/pikachu.gif'
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: [
    {
      name: "Thunder",
      element: "electric",
      damage: 100
    },
    {
      name: "Thunderbolt",
      element: "electric",
      damage: 100
    },
    {
      name: "Quick Attack",
      element: "normal",
      damage: 100
    },
    {
      name: "Slam",
      element: "normal",
      damage: 100
    }
  ]
}

var pokemonE = {
  name: 'Gyarados',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/pikachu.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/pikachu.gif'
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: [
    {
      name: "Hydropump",
      element: "electric",
      damage: 100
    },
    {
      name: "Surf",
      element: "electric",
      damage: 100
    },
    {
      name: "Hyperbeam",
      element: "normal",
      damage: 100
    },
    {
      name: "Dragon Rage",
      element: "dragon",
      damage: 100
    }
  ]
}

var pokemonF = {
  name: 'Aerodactyl',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/aerodactyl.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/aerodactyl.gif'
  },
  health: 3500,
  attack: 3000,
  defence: 700,
  speed: 900,
  specialAttack: 3000,
  specialDefence: 4000,
  moves: [
    {
      name: "Rock Slide",
      element: "rock",
      damage: 100
    },
    {
      name: "Ancient Power",
      element: "rock",
      damage: 100
    },
    {
      name: "Hyperbeam",
      element: "normal",
      damage: 100
    },
    {
      name: "Wing Attack",
      element: "flying",
      damage: 100
    }
  ]
}