function Pokemon(name, props) {
  this.name = name
  this.avatar = props.avatar
  this.stats = props.stats
  this.moves = props.moves
  this.remainingHealth = props.stats.health
  this.type = props.type
}

// attack functionality
Pokemon.prototype.attack = function(moveIndex, opponent){
  moveName = this.moves[moveIndex].name
  damage = this.moves[moveIndex].damage
  console.log("Before attack: " + opponent.stats.health)
  opponent.remainingHealth -= damage
  
  // opponent's health can't drop below 0
  if(opponent.remainingHealth < 0) {
    opponent.remainingHealth = 0
  }
  
  console.log(this.name + " used " + moveName + ". " + opponent.name + " has " + opponent.remainingHealth + " remaining")
}

// check fainted
Pokemon.prototype.fainted = function() {
  return this.remainingHealth <= 0
}

var charizardProps = {
  type: 'fire',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/charizard-megay.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/charizard.gif'
  },
  stats: {
    health: 3500,
    attack: 500,
    defence: 200,
    speed: 500,
    specialAttack: 2000,
    specialDefence: 1000
  },
  moves: [
    {
      name: 'Fire Punch',
      damage: 1000,
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

var charizard = new Pokemon('Charizard', charizardProps)

var hoohProps = {
  type: 'fire',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/ho-oh.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/ho-oh.gif'
  },
  stats: {
    health: 3000,
    attack: 240,
    defence: 500,
    speed: 800,
    specialAttack: 4000,
    specialDefence: 2000,
  },
  moves: [
    {
      name: 'Fly',
      damage: 1000,
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
}

var hooh = new Pokemon('Ho-Oh', hoohProps)

var lugiaProps = {
  type: 'psychic',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/lugia.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/lugia.gif'
  },
  stats: {
    health: 3000,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000,
  },
  moves: [
    {
      name: 'Hydropump',
      damage: 1000,
      element: 'water'
    },
    {
      name: 'Hyper Beam',
      damage: 100,
      element: 'normal'
    },
    {
      name: 'Surf',
      damage: 90,
      element: 'water'
    },
    {
      name: 'Psychic',
      damage: 100,
      element: 'psychic'
    }
  ]
}

var lugia = new Pokemon('Lugia', lugiaProps)

var kyogreProps = {
  type: 'water',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/kyogre.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/kyogre.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: 'Hydropump',
      damage: 1000,
      element: 'water'
    },
    {
      name: 'Ice Beam',
      damage: 100,
      element: 'ice'
    },
    {
      name: 'Body Slam',
      damage: 100,
      element: 'water'
    },
    {
      name: 'Surf',
      damage: 100,
      element: 'water'
    }
  ]
}

var kyogre = new Pokemon('Kyogre', kyogreProps)

var groudonProps = {
  type: 'fire',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/groudon.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/groudon.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: 'Earthquake',
      damage: 1000,
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
      name: 'Sacred Fire',
      damage: 100,
      element: 'fire'
    }
  ]
}

var groudon = new Pokemon('Groudon', groudonProps)

var articunoProps = {
  type: 'ice',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/articuno.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/articuno.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: 'Ice Beam',
      damage: 1000,
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

}

var articuno = new Pokemon('Articuno', articunoProps)

// ------------------------------------------------------------------------------------------------------------------------------------------------

var blastoiseProps = {
  type: 'water',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/blastoise.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/blastoise.gif'
  },
  stats: {
    health: 3500,
    attack: 500,
    defence: 700,
    speed: 500,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Hydropump",
      element: "water",
      damage: 1000
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
      name: "Body Slam",
      element: "water",
      damage: 100
    }
  ]
}

var blastoise = new Pokemon('Blastoise', blastoiseProps)

var mewtwoProps = {
  type: 'psychic',
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/mewtwo.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/mewtwo.gif'
  },
  moves: [
    {
      name: "Psychic",
      element: "psychic",
      damage: 1000
    },
    {
      name: "Hyperbeam",
      element: "normal",
      damage: 100
    },
    {
      name: "Earthquake",
      element: "ground",
      damage: 100
    },
    {
      name: "Swift",
      element: "normal",
      damage: 100
    }
  ]
}

var mewtwo = new Pokemon('Mewtwo', mewtwoProps)

var moltresProps = {
  type: 'fire',
  avatar:  {
    front: 'http://www.pokestadium.com/sprites/xy/moltres.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/moltres.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Flamethrower",
      element: "fire",
      damage: 1000
    },
    {
      name: "Fly",
      element: "flying",
      damage: 100
    },
    {
      name: "Fire Blast",
      element: "fire",
      damage: 100
    },
    {
      name: "Swift",
      element: "normal",
      damage: 100
    }
  ]
}

var moltres = new Pokemon('Moltres', moltresProps)

var pikachuProps = {
  type: 'lightning',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/pikachu.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/pikachu.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Thunder",
      element: "electric",
      damage: 1000
    },
    {
      name: "Thunderbolt",
      element: "electric",
      damage: 100
    },
    {
      name: "Swift",
      element: "normal",
      damage: 100
    },
    {
      name: "Body Slam",
      element: "normal",
      damage: 100
    }
  ]
}

var pikachu = new Pokemon('Pikachu', pikachuProps)

var gyaradosProps = {
  type: 'water',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/gyarados.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/gyarados.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Hydropump",
      element: "water",
      damage: 1000
    },
    {
      name: "Surf",
      element: "water",
      damage: 100
    },
    {
      name: "Hyperbeam",
      element: "normal",
      damage: 100
    },
    {
      name: "Thunder",
      element: "electric",
      damage: 100
    }
  ]
}

var gyarados = new Pokemon('Gyarados', gyaradosProps)

var aerodactylProps = {
  type: 'rock',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/aerodactyl.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/aerodactyl.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Rock Slide",
      element: "rock",
      damage: 1000
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

var aerodactyl = new Pokemon('Aerodactyl', aerodactylProps)

var venusaurProps = {
  type: 'grass',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/venusaur.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/venusaur.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Razor Leaf",
      element: "grass",
      damage: 1000
    },
    {
      name: "Body Slam",
      element: "normal",
      damage: 100
    },
    {
      name: "Solar Beam",
      element: "grass",
      damage: 100
    },
    {
      name: "Earthquake",
      element: "ground",
      damage: 100
    }
  ]
}

var venusaur = new Pokemon('Venusaur', venasaurProps)

var zapdosProps = {
  type: 'lightning',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/zapdos.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/zapdos.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Thunder",
      element: "lightning",
      damage: 1000
    },
    {
      name: "Wing Attack",
      element: "flying",
      damage: 100
    },
    {
      name: "Thunder Bolt",
      element: "normal",
      damage: 100
    },
    {
      name: "Swift",
      element: "normal",
      damage: 100
    }
  ]
}

var zapdos = new Pokemon('Zapdos', zapdosProps)

var gengarProps = {
  type: 'ghost',
  avatar: {
    front: 'http://www.pokestadium.com/sprites/xy/gengar.gif',
    back: 'http://www.pokestadium.com/sprites/xy/back/gengar.gif'
  },
  stats: {
    health: 3500,
    attack: 3000,
    defence: 700,
    speed: 900,
    specialAttack: 3000,
    specialDefence: 4000
  },
  moves: [
    {
      name: "Lick",
      element: "ghost",
      damage: 1000
    },
    {
      name: "Shadow Ball",
      element: "ghost",
      damage: 100
    },
    {
      name: "Psychic",
      element: "psychic",
      damage: 100
    },
    {
      name: "Will-O-Wisp",
      element: "fire",
      damage: 100
    }
  ]
}

var gengar = new Pokemon("Gengar", gengarProps)