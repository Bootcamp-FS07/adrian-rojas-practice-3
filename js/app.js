/**
 * Connect the objects to the DOM
 */
const startButton = document.querySelector('#start-button');
const playerNames = document.querySelector('.player-names')
const sizeInput = document.getElementById('size');
const start = document.getElementById('start');
const finish = document.getElementById('finish');
const spaces = document.querySelector('ul.boxes');
const newGameButton = document.querySelector('#finish a.button');
let currentGame;
let boardSize = 3;
board.style.display = 'none';
finish.style.display = 'none';

startButton.addEventListener("click", () => {
    start.style.display = 'none';
    board.style.display = 'block';
    handleInitGameClass()
    currentGame.startGame();
});

spaces.addEventListener("mouseover", (e) => {
    currentGame.handleMouseOver(e);
});

spaces.addEventListener("mouseout", (e) => {
    currentGame.handleMouseOut(e);
});

spaces.addEventListener("click", (e) => {
    currentGame.handleClick(e);
});

newGameButton.addEventListener("click", () => {
    finish.style.display = 'none';
    spaces.innerHTML = '';
    board.style.display = 'block';
    handleInitGameClass(size);
    currentGame.startGame();
});

/**
 * Handles initiating an instance of the game
 */
function handleInitGameClass(){
    const size = parseInt(document.getElementById("size").value || boardSize);
    currentGame = new Game(size)
}


/**
 * Shows the player name inputs and the start game button
 */
function showStartActions(){
    playerNames.style.display = 'block';
    startButton.style.display = 'inline-block';
}
