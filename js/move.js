// weak to method

function Move(name, damage, element) {
  this.name = name
  this.damage = damage
  this.element = element
}

// Fire
var firePunch = new Move("Fire Punch", 75, "fire")
var flameThrower = new Move("Flame Thrower", 90, "fire")
var fireBlast = new Move("Fire Blast", 110, "fire")
var sacredFire = new Move("Sacred Fire", 100, "fire")
var willOWisp = new Moove("Will-O-Wisp", 100, "fire")

// Normal
var scratch = new Move("Scratch", 40, "normal")
var hyperBeam = new Move("Hyper Beam", 150, "normal")
var bodySlam = new Move("Body Slam", 85, "normal")
var swift = new Move("Swift", 60, "normal")


// Flying
var fly = new Move("Fly", 90, "flying")
var peck = new Move("Peck", 35, "flying")
var wingAttack = new Move("Wing Attack", 60, "flying")

// Ghost
var lick = new Move("Lick", 30, "ghost")
var shadowBall = new Move("Shadow Ball", 80, "ghost")

// Psychic
var psychic = new Move("Psychic", 90, "psychic")

// Water
var hydroPump = new Move("Hydropump", 110, "water")
var surf = new Move("Surf", 90, "water")

// Grass
var razorLeaf = new Move("Razor Leaf", 55, "grass")
var solarBeam = new Move("Solar Beam", 120, "grass")

// Ice Beam
var iceBeam = new Move("Ice Beam", 90, "ice") 
var blizzard = new Move("Blizzard", 110, "ice")

// Rock
var rockSlide = new Move("Rock Slide", 75, "rock")
var ancientPower = new Move("Ancient Power", 60, "rock")

// Ground
var earthquake = new Move("Earthquake", 100, "ground")

// Electric
var thunder = new Move("Thunder", 110, "electric")
var thunderBolt = new Move("Thunder Bolt", 90, "electric")