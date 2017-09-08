var gameOver = false
// var pokemonPlayer1 = [charizard, hooh, lugia, kyogre, groudon, articuno]
// var trainer1 = new Trainer("Ash", pokemonPlayer1)
// var pokemonPlayer2 = [blastoise, mewtwo, moltres, pikachu, gyarados, aerodactyl]
// var trainer2 = new Trainer("Gary", pokemonPlayer2)

var pokemonPlayer1 = [];
var pokemonPlayer2 = [];
var trainer1 = null;
var trainer2 = null;

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
    }, 200, function(){
      $image.animate({
        left: 0
      }, 200)

      //flicker player-2
      $image.promise().done(function(){
        flickerOpponent('player-2')
      })
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
      $image.promise().done(function(){
        flickerOpponent('player-1')
      })
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

    //add image
    var $thumbnail = $('<img>').prop('src', remainingPokemon[index].avatar.thumbnail)
    $(partyPokemon).find('.tooltip').append($thumbnail)

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
      $('.remaining-health').promise().done(function() {
        setUpPlayerBoard($opponentBox, newPokemon, game)
      })
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
      //set trainer text
      $('#trainer-1 .trainer-name').text(this.player1.name)
      $('#trainer-2 .trainer-name').text(this.player2.name)

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

  // game.start()
  
  //add sound
  var pokemonSong = new Audio('images/pokemon.mp3')

  pokemonSong.loop = true
  // pokemonSong.play()



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //1. hide everything initially

  //2. show player name div
  dialogTextArray.push("Please input your trainer names")
  displayDialogueBoxText(dialogTextArray)
  var trainer1Name;
  var trainer2Name;

  //disable button if name is not filled
  $('#inputTrainerContainer input').on('input', function(){
    if($('#trainer1Input').val() != '' && $('#trainer2Input').val() != '') {
      $('#submitNamesButton').removeClass('disabled')
    }
    else {
      $('#submitNamesButton').addClass('disabled')
    }
  })

  $('#submitNamesButton').on('click', function() {
    //check text fields aren't empty
    if($('#trainer1Input').val() != '' && $('#trainer2Input').val() != '') {
      trainer1Name = $('#trainer1Input').val()
      trainer2Name = $('#trainer2Input').val()

      console.log(trainer1Name, trainer2Name)

      //fade out inputTrainerContainer
      $('#inputTrainerContainer').fadeOut('slow', function(){
        
        //3. show pokemon select for player 1
        dialogTextArray.push("Please select your 6 pokemon to battle  , " + trainer1Name)
        displayDialogueBoxText(dialogTextArray)
        $('#pokemonSelectContainer').fadeIn('slow', function(){

          // append pokemon to list
          allPokemon.forEach(function(pokemon){
            var $newPokemonImg = $('<img>').prop({
              src: "images/pokeball.svg",
              id: pokemon.name,
              class: 'pokeball'
            })

            var $tooltip = $('<div>').prop({
              class: 'tooltip'
            })

            
            $tooltip.css('display', 'none')
            console.log(pokemon.avatar.thumbnail)
            var $newThumbnail = $('<img>').prop('src', pokemon.avatar.thumbnail)
            $tooltip.text(pokemon.name).append($newThumbnail)

            var $newPokemonDiv = $('<div>').addClass('pokemon')

            $newPokemonDiv.append($tooltip, $newPokemonImg)

            $('#pokemonSelectContainer .pokemon-list').append($newPokemonDiv)
          })
        })
      })
    }
  })

  // show tooltip of pokemon when hovering
  $('#pokemonSelectContainer').on('mouseenter', '.pokemon', function(){
    $(this).find('.tooltip').css('display', 'block')
  })

  // hide tooltip of pokemon after hovering
  $('#pokemonSelectContainer').on('mouseout', '.pokemon', function(){
    $(this).find('.tooltip').css('display', 'none')
  })

  $('#pokemonSelectContainer').on('click', '.pokeball', function(){
    //cannot select more than 6
    if($('.pokeball.active').length != 6){
      $(this).toggleClass('active')

      if($('.pokeball.active').length == 6) {
        $('#pokemonSelectContainer #submitPokemonButton').removeClass('disabled')
      }
      else {
        $('#pokemonSelectContainer #submitPokemonButton').addClass('disabled')
      }
    }
    else if($('.pokeball.active').length == 6) {
      $('.pokeball.active').first().removeClass('active')
      $(this).addClass('active')
    }
  })

  //set submit button active if 6 are selected
  $('#pokemonSelectContainer').on('click', '#submitPokemonButton', function(){
    if(!$(this).hasClass('disabled')){
      console.log('here')
      //set trainer 1 pokemon if null
      if(pokemonPlayer1.length == 0){
        var pokemonNames = [];
        $('.active').each(function(index, pokemon){
          pokemonNames.push($(pokemon).prop('id'))
        })

        console.log(pokemonNames)

        pokemonNames.forEach(function(pokemonName){
          var pokemon = getPokemonByNameFromArray(allPokemon, pokemonName)
          //push pokemon object
          pokemonPlayer1.push(pokemon)
        })
      }
      // trainer 1 has already selected (time to set trainer 2's pokemon)
      else {
        var pokemonNames = [];
        $('.active').each(function(index, pokemon){
          pokemonNames.push($(pokemon).prop('id'))
        })

        pokemonNames.forEach(function(pokemonName){
          var pokemon = getPokemonByNameFromArray(allPokemon, pokemonName)
          //push pokemon object
          pokemonPlayer2.push($.extend(true, {}, pokemon)) //clone the pokemon
        })
      }
    }

    if(pokemonPlayer2.length == 0){
      //clear the selection
      $('.active').removeClass('active')

      // set dialog box for player 2 to pick
      dialogTextArray.push("Please select your 6 pokemon to battle  , " + trainer2Name)
      displayDialogueBoxText(dialogTextArray)
    }
    else { // both players have selected
      //hide the container
      $('#pokemonSelectContainer').fadeOut('slow', function(){
        // start the game
        dialogTextArray.push(trainer1Name + " challenged " + trainer2Name + " to a battle")
        displayDialogueBoxText(dialogTextArray)

        trainer1 = new Trainer(trainer1Name, pokemonPlayer1)
        trainer2 = new Trainer(trainer2Name, pokemonPlayer2)
        
        game.player1 = trainer1
        game.player2 = trainer2

        game.start()
        $('#playerContainer').fadeIn('slow')
      })
    }
  })

  //4. show player select for player 2
  //5. start game

})


