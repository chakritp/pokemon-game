function Trainer(name, pokemon) {
  this.name = name
  this.pokemon = pokemon // array of pokemon objects
  this.currentPokemon = pokemon[0]
}

// switch current pokemon
Trainer.prototype.switchPokemon = function(index) {
  if(index) { // switch to the pokemon specified in index
    this.currentPokemon = this.pokemon[index]
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

