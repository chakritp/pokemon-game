var gameOver = false
var pokemonPlayer1 = [charizard, hooh, lugia, kyogre, groudon, articuno]
var trainer1 = new Trainer("Ash", pokemonPlayer1)

var pokemonPlayer2 = [blastoise, mewtwo, moltres, pikachu, gyarados, aerodactyl]
var trainer2 = new Trainer("Gary", pokemonPlayer2)

var dialogTextArray = []
var effectiveText = ""

function flickerOpponent(player) {
  console.log('flicker')
  if(player == "player-1") {
    $('.player-board#player-1 .avatar img').animate({
      opacity: 0
    }, 100, function(){
      $('.player-board#player-1 .avatar img').animate({
        opacity: 1
      }, 100)
    })
  } 
  else {
    $('.player-board#player-2 .avatar img').animate({
      opacity: 0
    }, 100, function(){
      $('.player-board#player-2 .avatar img').animate({
        opacity: 1
      }, 100)
    })
  }
}

function animateAttack(player, $image, pokemon, moveId) {
  if(player == "player-1") {
    //check move and attach the image to the animation
    pokemon.moves[moveId].animate('player-1')

    // move pokemon
    $image.animate({
      left: '30px'
    }, 100, function(){
      $image.animate({
        left: 0
      }, 100)

      //flicker player-2
      flickerOpponent('player-2')
    })
  } 
  else {
    //check move and attach the image to the animation
    pokemon.moves[moveId].animate('player-2')

    // move pokemon
    $image.animate({
      left: '-30px'
    }, 100, function(){
      $image.animate({
        left: 0
      }, 100)

      //flicker player-1
      flickerOpponent('player-1')
    })
  }
}

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

function checkSpeedAndSetTurn(player1Pokemon, player2Pokemon, game) {
  if(player1Pokemon.stats.speed > player2Pokemon.stats.speed) {
    setTurn($('.player-board#player-1'))
    game.currentPlayer = game.player1
  }
  else if(player1Pokemon.stats.speed < player2Pokemon.stats.speed) {
    setTurn($('.player-board#player-2'))
    game.currentPlayer = game.player2
  }
  else {
    randomizeTurn(game)
  }
}

function randomizeTurn(game) {
  var randomNumber = Math.floor(Math.random() * 2)
  if(randomNumber == 0) {
    setTurn($('.player-board#player-1'))
    game.currentPlayer = game.player1
  }
  else {
    setTurn($('.player-board#player-2'))
    game.currentPlayer = game.player2
  }
}

function disableBothPlayers() {
  $('.overlay').show()
}

function displayDialogueBoxText(text) {
  // $('#dialogueBox #text').text(text)
  $('#dialogueBox #text').typeIt({
    strings: text,
    speed: 20,
    breakLines: false,
  })
  //empty text array to reset for next time
  dialogTextArray = []
  effectiveText = ""
}

function animateHealthText($healthBox, previousHealth, currentHealth) {
  $({ countNum: previousHealth }).animate({countNum: currentHealth}, {
    duration: 1000,
    easing:'linear',
    step: function() {
      $healthBox.text(Math.floor(this.countNum));
      // console.log(this.countNum);
    },
    complete: function() {
      $healthBox.text(this.countNum);
      // console.log('finished');
    }
  });
}

function setUpPlayerBoard($playerBox, newPokemon, game) {
  var player;

  if($playerBox.prop('id') == 'player-1') {
    player = game.player1
  }
  else {
    player = game.player2
  }
  
  // name
  $playerBox.find('.name').text(newPokemon.name)
  
  // avatar
  if($playerBox.prop('id') == 'player-1'){
    $playerBox.find('.avatar img').prop('src', newPokemon.avatar.back)
  }
  else {
    $playerBox.find('.avatar img').prop('src', newPokemon.avatar.front)
  }

  //health
  var fullHealth = newPokemon.stats.health
  var remainingHealth = newPokemon.remainingHealth 
  
  $(".remaining-health").promise().done(function() {
    //wait for all animations to finish before setting remaining health box again
    console.log("Remaining health: " + remainingHealth)
    $playerBox.find('.health .remaining').text(remainingHealth)
  });

  $playerBox.find('.health .max').text(fullHealth)
  setCssHealthBox($playerBox, remainingHealth, fullHealth)

  //moves
  var $moves = $playerBox.find('.moves li')
  $moves.each(function(index, move){
    $(move).removeClass()
    $(move).addClass(newPokemon.moves[index].element)
    $(move).text(newPokemon.moves[index].name)
  })

  //party pokemon
  var $partyPokemon = $playerBox.find('.party')
    
  //tooltip text
  var indexToRemove = player.pokemon.indexOf(newPokemon)
  var remainingPokemon = player.pokemon.slice(0, indexToRemove).concat(player.pokemon.slice(indexToRemove + 1, player.pokemon.length))
  $partyPokemon.each(function(index, partyPokemon) {
    // set text of other pokemon
    $(partyPokemon).find('.tooltip').text(remainingPokemon[index].name)

    // set id to images
    $(partyPokemon).find('img').prop('id', remainingPokemon[index].name)

    //put an 'X' over the ball that can't be selected
    if(remainingPokemon[index].fainted()){
      $(partyPokemon).addClass('fainted')
    }
  })
}

function checkOpponentFainted(player, opponent, $opponentBox, game) {
  if(opponent.currentPokemon.fainted()) {
    var faintedPokemonName = opponent.currentPokemon.name
    console.log(faintedPokemonName + " fainted!")
    if(opponent.hasPokemonRemaining()){ 
      var newPokemon = opponent.switchPokemon()
      console.log(newPokemon.name + " switched in!")
      dialogTextArray.push(faintedPokemonName + " fainted! " + opponent.name + " switched " + newPokemon.name + " in!")
      //reinitialize box with new pokemon
      setUpPlayerBoard($opponentBox, newPokemon, game)
    }
    else { //opponent has lost
      dialogTextArray.push(faintedPokemonName + " fainted!")
      if(player == 'player-1'){
        console.log("GAME OVER! " + game.player1.name + " has won")
        dialogTextArray.push("GAME OVER! " + game.player1.name + " has won")
      }
      else {
        console.log("GAME OVER! " + game.player2.name + " has won")
        dialogTextArray.push("GAME OVER! " + game.player2.name + " has won")
      }
      gameOver = true
    }
  }
  displayDialogueBoxText(dialogTextArray)
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
  var $remainingHealthBox = box.find('.health-bar > .remaining-health')
  // $remainingHealthBox.css('background-color', color)
  // set width
  $remainingHealthBox.animate({
    width: ratio  + '%',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0'
  }, {
    duration: 1000,
    complete: function() {
      //set color after 
      $remainingHealthBox.css('background-color', color)
    }
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
      remainingHealth = opponent.currentPokemon.remainingHealth // the new remaining health

      maxHealth = $opponentBox.find('.health-points .max').text()
      
      //set text of health box
      var $healthBox = $opponentBox.find('.health .remaining')
      var previousHealth = $opponentBox.find('.health .remaining').text() // the health before getting attacked

      // animated health box
      animateHealthText($healthBox, previousHealth, remainingHealth)
      
      // non animated health box
      // $healthBox.text(remainingHealth)
      
      //set width of healthbox
      setCssHealthBox($opponentBox, remainingHealth, maxHealth)
      
      // if pokemon fainted, switch to next pokemon if they have pokemon remaining
      checkOpponentFainted(player, opponent, $opponentBox, game)
    },
    start: function(){
      p1FirstPokemon = this.player1.pokemon[0];
      p2FirstPokemon = this.player2.pokemon[0];

      setUpPlayerBoard($playerOneBox, p1FirstPokemon, this)
      setUpPlayerBoard($playerTwoBox, p2FirstPokemon, this)

      //set listener to show/hide tooltip
      $('.party-pokemon').on('mouseenter mouseout', 'img', function() {
        $(this).siblings('.tooltip').toggleClass('hide')
      })

      //set listener to animate pokeballs
      $('.party-pokemon').on('mouseenter mouseout', '.party:not(".fainted") img', function() {
        $(this).toggleClass('rotate')
      })

      //set listener to switch pokemon
      $('.party-pokemon').on('click', '.party:not(".fainted") img', function() {
        //Note: 'this' is the img tag itself
        var $currentPlayerBox = $(this).closest('.player-board')
        var pokemonName = $(this).prop('id')
        console.log(pokemonName)

        var newPokemon = game.currentPlayer.switchPokemon(pokemonName)

        displayDialogueBoxText(game.currentPlayer.name + " switched " + newPokemon.name + " in!")

        //reinitialize player box with new pokmemon details
        setUpPlayerBoard($currentPlayerBox, newPokemon, game);

        //switch players after switching pokemon
        game.switchPlayers()
      })

      // add listeners for moves
      $('.moves').on('click', 'li', function() {
        disableBothPlayers()
        var currentPlayer = $(this).closest('.player-board').prop('id')
        var moveId = $(this).prop('id').replace('move-', '')

        var $currentAvatar = $(this).closest('.player-board').find('.avatar img')
        if(game.currentPlayer == game.player1){
          game.currentPlayer.currentPokemon.attack(moveId, game.player2.currentPokemon)
          animateAttack("player-1", $currentAvatar, game.currentPlayer.currentPokemon, moveId)
        }
        else {
          game.currentPlayer.currentPokemon.attack(moveId, game.player1.currentPokemon)
          animateAttack("player-2", $currentAvatar, game.currentPlayer.currentPokemon, moveId)
        }

        // set text of dialog box
        // check if super effective or not to add text
        
        var moveElement;
        var opponentElement;

        moveElement = game.currentPlayer.currentPokemon.moves[moveId].element;
        
        if(game.currentPlayer == game.player1){
          opponentElement = game.player2.currentPokemon.type
        }
        else {
          opponentElement = game.player1.currentPokemon.type
        }

        if(superEffective(moveElement, opponentElement)) {
          console.log("It's super effective!")
          effectiveText = " It's super effective!"
        } 
        else if(notVeryEffective(moveElement, opponentElement)) {
          console.log(" It's not very effective!")
          effectiveText = " It's not very effective!"
        }

        dialogTextArray.push(game.currentPlayer.currentPokemon.name + " used " + $(this).text() + "!" + effectiveText)

        //adjust health of pokemon
        game.setHealth(currentPlayer)

        //switch turns
        // wait for all animations before switching turns

        $(".remaining-health").promise().done(function() {
          console.log('here')
          if(!gameOver){
            game.switchPlayers()
          }
          else {
            disableBothPlayers()
          }
        })
      })
      
      // check initial speed only for now
      checkSpeedAndSetTurn(p1FirstPokemon, p2FirstPokemon, game)
    } // end start method
  }; // end game object

  game.start()
})


