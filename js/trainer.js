function Trainer(name, pokemon) {
  this.name = name
  this.pokemon = pokemon // array of pokemon objects
  this.currentPokemon = pokemon[0]
}

// switch current pokemon by name
Trainer.prototype.switchPokemon = function(name) {
  if(name) { // switch to the pokemon specified in index
    for(var i = 0; i < this.pokemon.length; i++) {
      if(this.pokemon[i].name == name) {
        this.currentPokemon = this.pokemon[i]
        break;
      }
    }
  }
  else { // use the first non fainted pokemon
    for(var i = 0; i < this.pokemon.length; i++) {
      if(!this.pokemon[i].fainted()){
        this.currentPokemon = this.pokemon[i]
        break;
      }
    }
  }

  return this.currentPokemon
}

Trainer.prototype.hasPokemonRemaining = function() {
  var flag = false;
  for(var i = 0; i < this.pokemon.length; i++) {
    if(!this.pokemon[i].fainted()){
      flag = true;
      break
    }
  }
  return flag;
}
