var ash = {
  name: "Ash",
  pokemon: [charizard, hooh, lugia, kyogre, groudon, articuno],
  currentPokemon: function() {
    return this.pokemon[0]
  }
}

var gary = {
  name: "Gary",
  pokemon: [blastoise, pokemonB, pokemonC, pokemonD, pokemonE, pokemonF],
  currentPokemon: function() {
    return this.pokemon[0]
  }
}

function setCssHealthBox(box, currentHealth, maxHealth){
  currentHealth = Number(currentHealth)
  maxHealth = Number(maxHealth)

  //remove border radius
  // box.css('border-radius', '0')
  
  //set color of health
  var color = ''
  var ratio = currentHealth / maxHealth * 100

  if(ratio > 50){
    color = 'green'
  } else if (ratio > 20) {
    color = 'yellow'
  } else {
    color = 'red'
  }

  box.find('.health-bar > .remaining-health').css({
    width: ratio  + '%',
    background: color,
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0'
  })
}

$(function() {
  $playerOneBox = $('#player-1')
  $playerTwoBox = $('#player-2')

  var game = {
    player1: ash,
    player2: gary,
    currentPlayer: ash,
    switchPlayers: function() {
      if(this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2
      }
      else {
        this.currentPlayer = this.player1
      }
    },
    setHealth: function(player) {
      if(player === 'player-1') {
        currentHealth = game.player2.currentPokemon().stats.health
        maxHealth = $playerTwoBox.find('.health-points .max').text()
        $playerTwoBox.find('.health .remaining').text(currentHealth)
    
        //set width of healthbox
        setCssHealthBox($playerTwoBox, currentHealth, maxHealth)
      }
      else {
        currentHealth = game.player1.currentPokemon().stats.health
        maxHealth = $playerOneBox.find('.health-points .max').text()
        $playerOneBox.find('.health .remaining').text(currentHealth)
    
        //set width of healthbox
        setCssHealthBox($playerOneBox, currentHealth, maxHealth)
      }
    },
    start: function(){
      // Name
      p1FirstPokemon = this.player1.pokemon[0];
      p2FirstPokemon = this.player2.pokemon[0];

      $playerOneBox.find('.name').text(p1FirstPokemon.name)
      $playerTwoBox.find('.name').text(p2FirstPokemon.name)

      // Avatar
      $playerOneBox.find('.avatar img').prop('src', p1FirstPokemon.avatar.back)
      $playerTwoBox.find('.avatar img').prop('src', p2FirstPokemon.avatar.front)

      // Health
      $playerOneBox.find('.health .remaining').text(p1FirstPokemon.stats.health)
      $playerOneBox.find('.health .max').text(p1FirstPokemon.stats.health)
      $playerTwoBox.find('.health .remaining').text(p2FirstPokemon.stats.health)
      $playerTwoBox.find('.health .max').text(p2FirstPokemon.stats.health)

      // Moves
      var $movesPlayerOne = $playerOneBox.find('.moves li')
      $movesPlayerOne.each(function(index, move){
        $(move).addClass(p1FirstPokemon.moves[index].element)
        $(move).text(p1FirstPokemon.moves[index].name)
      })

      var $movesPlayerTwo = $playerTwoBox.find('.moves li')
      $movesPlayerTwo.each(function(index, move){
        $(move).addClass(p2FirstPokemon.moves[index].element)
        $(move).text(p2FirstPokemon.moves[index].name)
      })

      // Party Pokemon
      var $partyPokemonP1 = $playerOneBox.find('.party')
      var $partyPokemonP2 = $playerTwoBox.find('.party')

      // set tooltip text
      $partyPokemonP1.each(function(index, partyPokemon) {
        $(partyPokemon).find('.tooltip').text(game.player1.pokemon[index + 1].name)
      })

      $partyPokemonP2.each(function(index, partyPokemon) {
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

      // add listeners for moves
      $('.moves').on('click', 'li', function() {
        var currentPlayer = $(this).closest('.player-board').prop('id')
        var moveId = $(this).prop('id').replace('move-', '')

        if(game.currentPlayer == game.player1){
          game.currentPlayer.currentPokemon().attack(moveId, game.player2.currentPokemon())
        }
        else {
          game.currentPlayer.currentPokemon().attack(moveId, game.player1.currentPokemon())
        }

        //adjust health of pokemon
        game.setHealth(currentPlayer)
      })
    }
  };

  currentPlayer = game.player1
  game.start()
})


