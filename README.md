# Tic Tac Toe
[Play the game](https://bootcamp-fs07.github.io/adrian-rojas-practice-3/)
# About the Classes
- Game manages the state of the game, switching palyer turns, and handling DOM events
- Board made up of individual Space objects and renders the game board in the DOM
- Space represents a space on the board. When a token occupies a space the object is marked as having an owner
- Token represents an "X" or "O" svg and allows a player to make a move. Each token has a property that points to it's owner
- Player represents each player in the game. Each player owns a set of tokens that are played each turn
