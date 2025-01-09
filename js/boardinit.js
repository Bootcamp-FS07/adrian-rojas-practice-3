//Implement singleton for board.

export class Board {
    constructor(size){
        if(Board._instance){
            return Board._instance;
        }
        Board._instance = this;
        document.getElementById("reset")
        .addEventListener("click", () => this.reset());
        _instance = document.getElementById("board");
        _instance.style["grid-template-columns"] = `repeat(${size}, 100px)`;
        _instance.innerHTML = "";

        _instance.addEventListener("click", (e) => handleClick(e)); // Handle clicks on the board
        this.uMessage(`Player ${this.cPlayer}'s turn`);
this.state.forEach((_, i) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    board.appendChild(cell);
});
    }
}
