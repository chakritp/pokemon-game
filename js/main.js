var pokemonPlayer1 = [charizard, hooh, lugia, kyogre, groudon, articuno]
var trainer1 = new Trainer("Ash", pokemonPlayer1)

var pokemonPlayer2 = [blastoise, mewtwo, moltres, pikachu, gyarados, aerodactyl]
var trainer2 = new Trainer("Gary", pokemonPlayer2)

function setTurn($player) {
  $player.find('.overlay').hide()
  $player.addClass('active-player')
  
  //set overlay for other player
  if($player.prop('id') == 'player-1'){
    $('.player-board#player-2').removeClass('active-player')
    $('.player-board#player-2 .overlay').show()
  }
  else {
    $('.player-board#player-1').removeClass('active-player')
    $('.player-board#player-1 .overlay').show()
  }
}

function disableBothPlayers() {
  $('.overlay').css({
    height: "100%"
  })
  $('.overlay').show()
}

function setDialogueBoxText(text) {
  $('#dialogueBox').text(text)
}

function setCssHealthBox(box, currentHealth, maxHealth){
  currentHealth = Number(currentHealth)
  maxHealth = Number(maxHealth)
  
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
    player1: trainer1,
    player2: trainer2,
    currentPlayer: trainer1,
    switchPlayers: function() {
      if(this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2
        setTurn($('#player-2'))
      }
      else {
        this.currentPlayer = this.player1
        setTurn($('#player-1'))
      }
    },
    setHealth: function(player) {
      var opponent, $opponentBox;

      if(player === 'player-1') {
        opponent = game.player2
        $opponentBox = $playerTwoBox
      }
      else {
        opponent = game.player1
        $opponentBox = $playerOneBox
      }
      currentHealth = opponent.currentPokemon.stats.health
      
      maxHealth = $opponentBox.find('.health-points .max').text()
      $opponentBox.find('.health .remaining').text(currentHealth)
      
      //set width of healthbox
      setCssHealthBox($opponentBox, currentHealth, maxHealth)
      
      // if pokemon fainted, switch to next pokemon if they have pokemon remaining
      if(opponent.currentPokemon.fainted()) {
        console.log(opponent.currentPokemon.name + " fainted!")
        if(opponent.hasPokemonRemaining()){ 
          var newPokemon = opponent.switchPokemon()
          console.log(newPokemon.name + " switched in!")
  
          //reinitialize box with new pokemon
          // name
          $opponentBox.find('.name').text(newPokemon.name)
          
          // avatar
          if(player == 'player-1'){
            $opponentBox.find('.avatar img').prop('src', newPokemon.avatar.front)
          }
          else {
            $opponentBox.find('.avatar img').prop('src', newPokemon.avatar.back)
          }
  
          //health
          var fullHealth = newPokemon.stats.health
          $opponentBox.find('.health .remaining').text(fullHealth)
          $opponentBox.find('.health .max').text(fullHealth)
          setCssHealthBox($opponentBox, fullHealth, fullHealth)
  
          //moves
          var $moves = $opponentBox.find('.moves li')
          $moves.each(function(index, move){
            $(move).removeClass()
            $(move).addClass(newPokemon.moves[index].element)
            $(move).text(newPokemon.moves[index].name)
          })
  
          //party pokemon
          var $partyPokemon = $opponentBox.find('.party')
            
          //tooltip text
          var indexToRemove = opponent.pokemon.indexOf(newPokemon)
          console.log(indexToRemove)
          var remainingPokemon = opponent.pokemon.slice(0, indexToRemove).concat(opponent.pokemon.slice(indexToRemove + 1, opponent.pokemon.length))
          $partyPokemon.each(function(index, partyPokemon) {
            // set text of other pokemon
            $(partyPokemon).find('.tooltip').text(remainingPokemon[index].name)

            //put an 'X' over the ball that can't be selected
            if(remainingPokemon[index].fainted()){
              $(partyPokemon).addClass('fainted')
            }
          })
        }
        else { //opponent has lost
          if(player == 'player-1'){
            console.log("GAME OVER! " + game.player1.name + " has won")
            setDialogueBoxText("GAME OVER! " + game.player1.name + " has won")
          }
          else {
            console.log("GAME OVER! " + game.player2.name + " has won")
            setDialogueBoxText("GAME OVER! " + game.player2.name + " has won")
          }
        }
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
      $('.party-pokemon').on('mouseenter mouseout', '.party:not(".fainted") img', function() {
        $(this).toggleClass('rotate')
      })

      // add listeners for moves
      $('.moves').on('click', 'li', function() {
        var currentPlayer = $(this).closest('.player-board').prop('id')
        var moveId = $(this).prop('id').replace('move-', '')

        if(game.currentPlayer == game.player1){
          game.currentPlayer.currentPokemon.attack(moveId, game.player2.currentPokemon)
        }
        else {
          game.currentPlayer.currentPokemon.attack(moveId, game.player1.currentPokemon)
        }

        //adjust health of pokemon
        game.setHealth(currentPlayer)

        //switch turns
        game.switchPlayers()
      })
      
      // set turn to player 1 (for now)
      setTurn($playerOneBox)
    } // end start method
  }; // end game object

  game.start()
})


