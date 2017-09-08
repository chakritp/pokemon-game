//move sprite table

function Move(name, damage, element, img, animation) {
  this.name = name
  this.damage = damage
  this.element = element
  this.image = img
  this.animation
}

Move.prototype.animate = function(style){
  console.log('animate', style, this.image)
}

// Fire
var firePunch = new Move("Fire Punch", 75, "fire", "images/animations/fire.png", "particle")
var flameThrower = new Move("Flame Thrower", 90, "fire", "images/animations/fire.png", "beam")
var fireBlast = new Move("Fire Blast", 110, "fire", "images/animations/fire.png", "beam")
var sacredFire = new Move("Sacred Fire", 100, "fire", "images/animations/rainbow_fire.png", "beam")
var willOWisp = new Move("Will-O-Wisp", 100, "fire", "images/animations/rainbow_fire.png", "particle")

// Normal
var scratch = new Move("Scratch", 40, "normal")
var hyperBeam = new Move("Hyper Beam", 150, "normal", "images/animations/hyper_beam.png", "beam")
var bodySlam = new Move("Body Slam", 85, "normal")
var swift = new Move("Swift", 60, "normal", "images/animations/stars.png", "particle")


// Flying
var fly = new Move("Fly", 90, "flying", "images/animations/gust.png", "beam")
var peck = new Move("Peck", 35, "flying")
var wingAttack = new Move("Wing Attack", 60, "flying", "images/animations/gust.png", "particle")

// Ghost
var lick = new Move("Lick", 30, "ghost")
var shadowBall = new Move("Shadow Ball", 80, "ghost", "images/animations/shadow_ball.png", "particle")

// Psychic
var psychic = new Move("Psychic", 90, "psychic", "images/animations/psychic.jpg", "particle")

// Water
var hydroPump = new Move("Hydropump", 110, "water", "images/animations/water.jpg", "beam")
var surf = new Move("Surf", 90, "water", "images/animations/water.jpg", "beam")

// Grass
var razorLeaf = new Move("Razor Leaf", 55, "grass", "images/animations/razor_leaf.png", "particle")
var solarBeam = new Move("Solar Beam", 120, "grass", "images/animations/solar_beam.png", "beam")

// Ice Beam
var iceBeam = new Move("Ice Beam", 90, "ice", "images/animations/ice_beam.png", "beam") 
var blizzard = new Move("Blizzard", 110, "ice", "images/animations/blizzard.png", "beam")

// Rock
var rockSlide = new Move("Rock Slide", 75, "rock", "images/animations/rock_slide.png", "beam")
var ancientPower = new Move("Ancient Power", 60, "rock", "images/animations/rock_slide.png", "particle")

// Ground
var earthquake = new Move("Earthquake", 100, "ground", "images/animations/earthquake.png", "beam")

// Electric
var thunder = new Move("Thunder", 110, "electric", "images/animations/thunder.jpg", "beam")
var thunderBolt = new Move("Thunder Bolt", 90, "electric", "images/animations/thunderbolt.png", "particle")

/**
 * 
 * var moves = {}

var movesSpecs = {
  flameThrower: {name: "Flame Thrower", damage: 90, element: "fire", img: "images/animations/fire.png"},
  scratch: {name: "Scratch", damage: 40, element: "normal"},
  firePunch: {name: "Fire Punch", 75, "fire", img: ''},
  flameThrower: {name: "Flame Thrower", 90, "fire", img: ''},
  fireBlast: {name: "Fire Blast", 110, "fire", img: ''},
  sacredFire: {name: "Sacred Fire", 100, "fire", img: ''},
  willOWisp: {name: "Will-O-Wisp", 100, "fire", img: ''},
  
  // Normal
  scratch: {name: "Scratch", 40, "normal", img: ''},
  hyperBeam: {name: "Hyper Beam", 150, "normal", img: ''},
  bodySlam: {name: "Body Slam", 85, "normal", img: ''},
  swift: {name: "Swift", 60, "normal", img: ''},
  
  
  // Flying
  fly: {name: "Fly", 90, "flying", img: ''},
  peck: {name: "Peck", 35, "flying", img: ''},
  wingAttack: {name: "Wing Attack", 60, "flying", img: ''},
  
  // Ghost
  lick: {name: "Lick", 30, "ghost", img: ''},
  shadowBall: {name: "Shadow Ball", 80, "ghost", img: ''},
  
  // Psychic
  psychic: {name: "Psychic", 90, "psychic", img: ''},
  
  // Water
  hydroPump: {name: "Hydropump", 110, "water", img: ''},
  surf: {name: "Surf", 90, "water", img: ''},
  
  // Grass
  razorLeaf: {name: "Razor Leaf", 55, "grass", img: ''},
  solarBeam: {name: "Solar Beam", 120, "grass", img: ''},
  
  // Ice Beam
  iceBeam: {name: "Ice Beam", 90, "ice", img: ''}, 
  blizzard: {name: "Blizzard", 110, "ice", img: ''},
  
  // Rock
  rockSlide: {name: "Rock Slide", 75, "rock", img: ''},
  ancientPower: {name: "Ancient Power", 60, "rock", img: ''},
  
  // Ground
  earthquake: {name: "Earthquake", 100, "ground", img: ''},
  
  // Electric
  thunder: {name: "Thunder", 110, "electric", img: ''},
  thunderBolt: {name: "Thunder Bolt", 90, "electric", img: ''}
  
}

for(move in movesSpecs){
  console.log(move)
  moves[move] = new Move(movesSpecs[move])
}

function Move(props) {
  this.name = props.name
  this.damage = props.damage
  this.element = props.element
  this.image = props.img
}

Move.prototype.animate = function(style){
  console.log('animate', style, this.image)
  $('<img>')
}
// Fire
 */