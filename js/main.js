var ash = {
  name: "Ash",
  pokemon: [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]
}

var gary = {
  name: "Gary",
  pokemon: [pokemonA, pokemonB, pokemonC, pokemonD, pokemonE, pokemonF]
}

$(function() {
  $playerOneBox = $('#player-1')
  $playerTwoBox = $('#player-2')

  var game = {
    player1: ash,
    player2: gary,
    start: function(){
      // Name
      p1FirstPokemon = this.player1.pokemon[0];
      p2FirstPokemon = this.player2.pokemon[0];

      $playerOneBox.find('.name').text(p1FirstPokemon.name)
      $playerTwoBox.find('.name').text(p2FirstPokemon.name)

      //Avatar
      $playerOneBox.find('.avatar img').prop('src', p1FirstPokemon.avatar.back)
      $playerTwoBox.find('.avatar img').prop('src', p2FirstPokemon.avatar.front)

      //Moves
      for(var i = 0; i < p1FirstPokemon.moves.length; i++){
        document.querySelector('#player-1 #move-' + (i+1)).innerText = p1FirstPokemon.moves[i].name;
        document.querySelector('#player-1 #move-' + (i+1)).setAttribute('class', p1FirstPokemon.moves[i].element);
      }

      var $partyPokemonP1 = $playerOneBox.find('.party')
      var $partyPokemonP2 = $playerTwoBox.find('.party')

      // set tooltip text
      $.each($partyPokemonP1, function(index, partyPokemon) {
        $(partyPokemon).find('.tooltip').text(game.player1.pokemon[index + 1].name)
      })

      $.each($partyPokemonP2, function(index, partyPokemon) {
        $(partyPokemon).find('.tooltip').text(game.player2.pokemon[index + 1].name)
      })

      //set listener to show/hide tooltip
      $('.party-pokemon').on('mouseenter mouseout', 'img', function() {
        $(this).siblings('.tooltip').toggleClass('hide')
      })

      //set listener to animate pokeballs
      $('.party-pokemon').on('mouseenter mouseout', 'img', function() {
        $(this).toggleClass('rotate')
      })

    }
  };

  game.start();
})


