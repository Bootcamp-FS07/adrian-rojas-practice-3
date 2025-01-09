/**
 * Board is made up of individual spaces where each space represents a DOM element
 */
class Board {
    constructor(size){
        console.log(size)
        this.rows = size;
        this.cols = size;
        this.spaces = this.createSpaces();
    }

    /**
     * Create obects to represent spaces on the board
     * @return {array} spaces - array of Space objects
     */
    createSpaces(){
        const spaces = [];
        for (let x = 0; x < this.cols; x++) {
            const col = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                col.push(space);
            }
            spaces.push(col);
        }
        console.log("board", spaces)
        return spaces;
    }

    /**
     * Render the game board using the spaces array of objects
     */
    renderHTMLBoard(){
        console.log("setting board size to", 180*this.rows);
        const board = document.querySelector('ul.boxes');
        console.log("board",board);
        board.style.width = 180*this.rows + "px";

        for (let column of this.spaces) {
            for (let space of column) {
                space.renderHTMLSpace();
            }
        }
    }

    /**
     * Get an individual space object
     * @param {string} spaceId - ID of the space requested
     * @return {object} targetSpace - the space to be marked
     */
    findSpace(spaceId){
        let targetSpace;
        for (let column of this.spaces) {
            for (let space of column) {
                if (space.id == spaceId) {
                    targetSpace = space;
                }
            }
        }
        return targetSpace;
    }
}
