# Pokemon Battle Arena ![Pokeball](https://cdn.emojidex.com/emoji/px32/Pokeball.png "Pokeball")

Play the game [here](https://chakritp.github.io/pokemon-game)

Based on one of the all-time classics, Pokemon Battle arena is a battle between two players and their party of 6 pokemon. Players take turns choosing attacking moves to attack the other player's pokemon. First player to knock out all 6 of the other player's pokemon wins!

---
### How To Play
1. Both players input their names
2. Both players choose 6 pokemon from a list of 15 pokemon
	- Player 1 chooses their 6 pokemon then Player 2 chooses their 6 pokemon after
	- Note: The same pokemon can be selected between the two players
3. Players take turns selecting moves to defeat their other player's pokemons
	- During a player's turn, they can either choose to use one attack move or to switch their current pokemon
	- Certain moves can do more damage or less damage depending on the element of the move chosen and the opponent's element type

	
---
### Development and Technologies
Pokemon Battle Arena was built using HTML, CSS, Javascript and the jQuery library. Additional libraries include:

- TypeIt ([https://macarthur.me/typeit/](https://macarthur.me/typeit/))

---
### Approach Taken
User stories can be found at the following [Trello Board](https://trello.com/b/iUwEn7jg/pokemon-game). Features were developed based on getting the basic battle gameplay working, followed by battle animations. The final features added were the menu features where players can input their names and select their personal pokemon to battle.

The game broken down into several javascript objects:

- Pokemon Object (the information of each pokemon)
```javascript
function Pokemon(name, props) {
  this.name = name
  this.avatar = props.avatar
  this.stats = props.stats
  this.moves = props.moves
  this.remainingHealth = props.stats.health
  this.type = props.type
}

var charizardProps = {
  type: 'fire',
  avatar: {
    front: 'images/pokemon/charizard-front.gif',
    back: 'images/pokemon/charizard-back.gif',
    thumbnail: 'images/pokemon/charizard-thumbnail.png'
  },
  stats: {
    health: 360,
    attack: 293,
    defence: 280,
    speed: 328,
    specialAttack: 348,
    specialDefence: 295
  },
  moves: [firePunch, flameThrower, scratch, fireBlast]
}

var charizard = new Pokemon('Charizard', charizardProps)

```

- Move Object (contains the details of each of the moves in the game)
```javascript
function Move(name, damage, element, img, animation) {
  this.name = name
  this.damage = damage
  this.element = element
  this.image = img
  this.animation = animation
}

var flameThrower = new Move("Flame Thrower", 90, "fire", "images/animations/fire.png", "beam")

```

- Trainer (information about each of the players and what pokemon they have)
```javascript
function Trainer(name, pokemon) {
  this.name = name
  this.pokemon = pokemon // array of pokemon objects
  this.currentPokemon = pokemon[0]
}

trainer1 = new Trainer(trainer1Name, pokemonPlayer1)

```

---
### Unsolved Problems / Dream Features
- An increased selection of pokemon
- A more intuitive pokemon select screen (currently it's hard to see what pokemon you've selected)
- Keyboard controls
- Implementing battle sounds of each pokemon and sounds of the moves
- Implementing personalized animations for each pokemon move
- Adding animations when switching pokemon in and out
- Responsive sizing across different size screens
- Toggle volume on/off button
- Choice of a ***Random Mode*** where both players are assigned 6 random pokemon each

---
### Additional Resources
All pokemon sprites were taken from (Pokestadium.com)[http://www.pokestadium.com/tools/sprites]
