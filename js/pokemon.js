function Pokemon(name, props) {
  this.name = name
  this.avatar = props.avatar
  this.stats = props.stats
  this.moves = props.moves
  // this.moves = []
  // for (moveName in props.moves){
  //   this.move.push(moves[moveName])
  // }
  this.remainingHealth = props.stats.health
  this.type = props.type
}

//the move type on the left is super effective AGAINST the pokemon type on the right
var superEffectiveTable = {
  water: ["fire"],
  flying: ["grass"],
  grass: ["water", "rock", "ground"],
  electric: ["water", "flying"],
  ice: ["grass", "ground", "flying"],
  rock: ["flying", "fire"],
  ground: ["electric", "rock"],
  fire: ["grass", "ice"]
}

//the move type on the left is not very effective AGAINST the pokemon type on the right
var notVeryEffectiveTable = {
  water: ["water", "grass"],
  flying: ["electric", "rock"],
  grass: ["fire", "grass", "flying"],
  electric: ["electric", "grass", "ground"],
  ice: ["fire", "water", "ice"],
  rock: ["ground"],
  ground: ["flying", "grass"],
  normal: ["ghost"],
  fire: ["fire", "rock", "water"]
}

function superEffective(moveElement, pokemonType) {
  var isSuperEffective = false;

  // if key is existent in the super effective table and the pokemonType is in the array, return true
  if(superEffectiveTable[moveElement] && $.inArray(pokemonType, superEffectiveTable[moveElement]) != -1){
    isSuperEffective = true;
  }
  return isSuperEffective;
}

function notVeryEffective(moveElement, pokemonType) {
  var isNotVeryEffective = false;
  
  // if key is existent in the super effective table and the pokemonType is in the array, return true
  if(notVeryEffectiveTable[moveElement] && $.inArray(pokemonType, notVeryEffectiveTable[moveElement]) != -1){
    isNotVeryEffective = true;
  }
  return isNotVeryEffective;
}

function calculateDamage(power, attack, defence, modifier) {
  var damageDealt = null;
  console.log(typeof power, typeof attack, typeof defence, typeof modifier)
  // Note: 42 is (2 x level/5) + 2 and assuming pokemon level is at 100
  damageDealt = Math.floor(( ((42 * power * attack / defence) / 50) + 2 ) * modifier)
  console.log("damage dealt: " + damageDealt)
  return damageDealt;
}

function getPokemonByNameFromArray(pokemonArray, pokemonName){
  var pokemonToReturn;

  pokemonArray.forEach(function(pokemon){
    if(pokemon.name == pokemonName){
      pokemonToReturn = pokemon
    }
  })
  return pokemonToReturn;
}

// attack functionality
Pokemon.prototype.attack = function(moveIndex, opponent){
  var move = this.moves[moveIndex]
  var moveName = move.name
  var damage = move.damage

  console.log("Before attack: " + opponent.stats.health)

  //super effective deals 1.4 damage
  //not very effective deals 0.51 damage
  //calculate multiplier here
  var modifier = 1;
  console.log(move.element, opponent.type)
  if(superEffective(move.element, opponent.type)) {
    modifier = 1.4
  }
  else if(notVeryEffective(move.element, opponent.type)) {
    modifier = 0.51
  }
  console.log('modifier: ' + modifier)
  var damageDealt = calculateDamage(move.damage, this.stats.attack, this.stats.defence, modifier)
  opponent.remainingHealth -= damageDealt
  
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

// check super effective / not very effective
Pokemon.prototype.checkEffective = function(move) {
  var type = this.type
}

// Pokemon are defined below
// ------------------------------------------------------------------------------------------------------------------------------------------------

var charizardProps = {
  type: 'fire',
  avatar: {
    front: 'images/pokemon/charizard-front.gif',
    back: 'images/pokemon/charizard-back.gif',
    thumbnail: 'images/pokemon/charizard-thumbnail.png'
  },
  stats: {
    health: 360,
    attack: 293,
    defence: 280,
    speed: 328,
    specialAttack: 348,
    specialDefence: 295
  },
  moves: [firePunch, flameThrower, scratch, fireBlast]
}

var charizard = new Pokemon('Charizard', charizardProps)

var hoohProps = {
  type: 'fire',
  avatar: {
    front: 'images/pokemon/ho-oh-front.gif',
    back: 'images/pokemon/ho-oh-back.gif',
    thumbnail: 'images/pokemon/ho-oh-thumbnail.png'
  },
  stats: {
    health: 416,
    attack: 394,
    defence: 306,
    speed: 306,
    specialAttack: 350,
    specialDefence: 447,
  },
  moves: [fly, fireBlast, sacredFire, wingAttack]
}

var hooh = new Pokemon('Ho-Oh', hoohProps)

var lugiaProps = {
  type: 'psychic',
  avatar: {
    front: 'images/pokemon/lugia-front.gif',
    back: 'images/pokemon/lugia-back.gif',
    thumbnail: 'images/pokemon/lugia-thumbnail.png'
  },
  stats: {
    health: 416,
    attack: 306,
    defence: 394,
    speed: 350,
    specialAttack: 306,
    specialDefence: 447,
  },
  moves: [hydroPump, hyperBeam, surf, psychic]
}

var lugia = new Pokemon('Lugia', lugiaProps)

var kyogreProps = {
  type: 'water',
  avatar: {
    front: 'images/pokemon/kyogre-front.gif',
    back: 'images/pokemon/kyogre-back.gif',
    thumbnail: 'images/pokemon/kyogre-thumbnail.png'
  },
  stats: {
    health: 404,
    attack: 328,
    defence: 306,
    speed: 306,
    specialAttack: 438,
    specialDefence: 416
  },
  moves: [hydroPump, iceBeam, bodySlam, surf]
}

var kyogre = new Pokemon('Kyogre', kyogreProps)

var groudonProps = {
  type: 'fire',
  avatar: {
    front: 'images/pokemon/groudon-front.gif',
    back: 'images/pokemon/groudon-back.gif',
    thumbnail: 'images/pokemon/groudon-thumbnail.png'
  },
  stats: {
    health: 404,
    attack: 438,
    defence: 416,
    speed: 306,
    specialAttack: 328,
    specialDefence: 306
  },
  moves: [earthquake, hyperBeam, fireBlast, sacredFire]
}

var groudon = new Pokemon('Groudon', groudonProps)

var articunoProps = {
  type: 'ice',
  avatar: {
    front: 'images/pokemon/articuno-front.gif',
    back: 'images/pokemon/articuno-back.gif',
    thumbnail: 'images/pokemon/articuno-thumbnail.png'
  },
  stats: {
    health: 384,
    attack: 295,
    defence: 328,
    speed: 295,
    specialAttack: 317,
    specialDefence: 383
  },
  moves: [iceBeam, hyperBeam, wingAttack, blizzard]
}

var articuno = new Pokemon('Articuno', articunoProps)

// ------------------------------------------------------------------------------------------------------------------------------------------------

var blastoiseProps = {
  type: 'water',
  avatar: {
    front: 'images/pokemon/blastoise-front.gif',
    back: 'images/pokemon/blastoise-back.gif',
    thumbnail: 'images/pokemon/blastoise-thumbnail.png'
  },
  stats: {
    health: 362,
    attack: 291,
    defence: 328,
    speed: 280,
    specialAttack: 295,
    specialDefence: 339
  },
  moves: [hydroPump, surf, iceBeam, bodySlam]
}

var blastoise = new Pokemon('Blastoise', blastoiseProps)

var mewtwoProps = {
  type: 'psychic',
  stats: {
    health: 416,
    attack: 350,
    defence: 306,
    speed: 394,
    specialAttack: 447,
    specialDefence: 306
  },
  avatar: {
    front: 'images/pokemon/mewtwo-front.gif',
    back: 'images/pokemon/mewtwo-back.gif',
    thumbnail: 'images/pokemon/mewtwo-thumbnail.png'
  },
  moves: [psychic, hyperBeam, earthquake, swift]
}

var mewtwo = new Pokemon('Mewtwo', mewtwoProps)

var moltresProps = {
  type: 'fire',
  avatar:  {
    front: 'images/pokemon/moltres-front.gif',
    back: 'images/pokemon/moltres-back.gif',
    thumbnail: 'images/pokemon/moltres-thumbnail.png'
  },
  stats: {
    health: 384,
    attack: 328,
    defence: 306,
    speed: 306,
    specialAttack: 383,
    specialDefence: 295
  },
  moves: [flameThrower, wingAttack, fireBlast, swift]
}

var moltres = new Pokemon('Moltres', moltresProps)

var pikachuProps = {
  type: 'electric',
  avatar: {
    front: 'images/pokemon/pikachu-front.gif',
    back: 'images/pokemon/pikachu-back.gif',
    thumbnail: 'images/pokemon/pikachu-thumbnail.png'
  },
  stats: {
    health: 274,
    attack: 229,
    defence: 196,
    speed: 306,
    specialAttack: 218,
    specialDefence: 218
  },
  moves: [thunder, thunderBolt, swift, bodySlam]
}

var pikachu = new Pokemon('Pikachu', pikachuProps)

var gyaradosProps = {
  type: 'water',
  avatar: {
    front: 'images/pokemon/gyarados-front.gif',
    back: 'images/pokemon/gyarados-back.gif',
    thumbnail: 'images/pokemon/gyarados-thumbnail.png'
  },
  stats: {
    health: 394,
    attack: 383,
    defence: 282,
    speed: 287,
    specialAttack: 240,
    specialDefence: 328
  },
  moves: [hydroPump, surf, hyperBeam, thunder]
}

var gyarados = new Pokemon('Gyarados', gyaradosProps)

var aerodactylProps = {
  type: 'rock',
  avatar: {
    front: 'images/pokemon/aerodactyl-front.gif',
    back: 'images/pokemon/aerodactyl-back.gif',
    thumbnail: 'images/pokemon/aerodactyl-thumbnail.png'
  },
  stats: {
    health: 364,
    attack: 339,
    defence: 251,
    speed: 394,
    specialAttack: 240,
    specialDefence: 273
  },
  moves: [rockSlide, ancientPower, hyperBeam, wingAttack]
}

var aerodactyl = new Pokemon('Aerodactyl', aerodactylProps)

var venusaurProps = {
  type: 'grass',
  avatar: {
    front: 'images/pokemon/venusaur-front.gif',
    back: 'images/pokemon/venusaur-back.gif',
    thumbnail: 'images/pokemon/venusaur-thumbnail.png'
  },
  stats: {
    health: 364,
    attack: 289,
    defence: 291,
    speed: 284,
    specialAttack: 328,
    specialDefence: 328
  },
  moves: [razorLeaf, bodySlam, solarBeam, earthquake]
}

var venusaur = new Pokemon('Venusaur', venusaurProps)

var zapdosProps = {
  type: 'electric',
  avatar: {
    front: 'images/pokemon/zapdos-front.gif',
    back: 'images/pokemon/zapdos-back.gif',
    thumbnail: 'images/pokemon/zapdos-thumbnail.png'
  },
  stats: {
    health: 384,
    attack: 306,
    defence: 295,
    speed: 328,
    specialAttack: 383,
    specialDefence: 306
  },
  moves: [thunder, wingAttack, thunderBolt, swift]
}

var zapdos = new Pokemon('Zapdos', zapdosProps)

var gengarProps = {
  type: 'ghost',
  avatar: {
    front: 'images/pokemon/gengar-front.gif',
    back: 'images/pokemon/gengar-back.gif',
    thumbnail: 'images/pokemon/gengar-thumbnail.png'
  },
  stats: {
    health: 324,
    attack: 251,
    defence: 240,
    speed: 350,
    specialAttack: 394,
    specialDefence: 273
  },
  moves: [lick, shadowBall, psychic, willOWisp]
}

var gengar = new Pokemon("Gengar", gengarProps)

var allPokemon = [pikachu, venusaur, charizard, blastoise, gyarados, gengar, aerodactyl, articuno, zapdos, moltres, mewtwo, hooh, lugia, groudon, kyogre]