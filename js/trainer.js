function Trainer(name, pokemon) {
  this.name = name
  this.pokemon = pokemon // array of pokemon objects
}
// get current pokemon
Trainer.prototype.currentPokemon = function() {
  // return first pokemon that isn't fainted
  var pokemonToReturn = false
  for(var i = 0; i < this.pokemon.length; i++) {
    if(!this.pokemon[i].fainted()){
      pokemonToReturn = this.pokemon[i]
      return pokemonToReturn
    }
  }

  // Note: if no remaining pokemon left, it will return false
  return false
}


// switch current pokemon
Trainer.prototype.switchPokemon = function(index) {
  if(index) {

  }
  else { // use the first non fainted pokemon

  }
}

