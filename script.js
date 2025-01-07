const size = parseInt(document.getElementById("size").value);
const TicTac = {
    cPlayer: "X", // Tracks current player (X or O)
    state: Array(size**2).fill(null), // Board state (null for empty cells)
    gameOver: false, // Indicates if the game is over

    // Initialize the game
    init() {
        this.cBoard();
        document
            .getElementById("reset")
            .addEventListener("click", () => this.reset());
    },

    // Create the game board dynamically
    cBoard() {
        const board = document.getElementById("board");
        board.style["grid-template-columns"] = `repeat(${size}, 100px)`;

        board.innerHTML = ""; // Clear previous board
        this.state.forEach((_, i) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        });
        board.addEventListener("click", (e) => this.handleClick(e)); // Handle clicks on the board
        this.uMessage(`Player ${this.cPlayer}'s turn`);
    },

    // Handle a cell click
    handleClick(e) {
        const cell = e.target;
        const i = cell.dataset.index;

        // Ignore clicks if game is over or cell is taken
        if (this.gameOver || !cell.classList.contains("cell") || this.state[i])
            return;

        // Update board state and UI
        this.state[i] = this.cPlayer;
        cell.textContent = this.cPlayer;
        cell.classList.add("taken");

        // Check for winner or tie
        const winCombo = checkWin(i, this.state, this.cPlayer);
        if (winCombo) {
            this.highlight(winCombo);
            this.uMessage(`Player ${this.cPlayer} wins!`);
            this.gameOver = true;
        } else if (this.state.every((cell) => cell)) {
            this.uMessage("It's a tie!");
            this.gameOver = true;
        } else {
            // Switch players
            this.cPlayer = this.cPlayer === "X" ? "O" : "X";
            this.uMessage(`Player ${this.cPlayer}'s turn`);
        }
    },


    // Highlight winning cells
    highlight(combo) {
        console.log("Winner:", combo);
        combo.forEach((i) => {
            document.getElementById("board").children[i].style.color = "red";
        });
    },

    // Reset the game
    reset() {
        this.state = Array(size**2).fill(null);
        this.cPlayer = "X";
        this.gameOver = false;
        this.cBoard();
    },

    // Update the game status message
    uMessage(msg) {
        document.getElementById("message").textContent = msg;
    },
};
const checkWin = (iClicked, board, cPlayer) => {
    const x = Math.floor(iClicked/size);
    const row = board.slice(x * size, (x +1)*size);
    if(row.every( el => el === cPlayer)) return row.map((_,i) => x*size + i);
    const y = iClicked%size;
    if(row.every((_, index)=> board[index*size + y] === cPlayer)) return row.map((_,i) => (i * size + y));
    if(row.every((_, index)=> board[index*size + index] === cPlayer)) return row.map((_,i) => (i*size+i));
    if(row.every((_, index)=> board[(index+1)*size - index - 1] === cPlayer)) return row.map((_,i) => ((i+1)*size-i-1));
    return false;
};
// Start the game
TicTac.init();
