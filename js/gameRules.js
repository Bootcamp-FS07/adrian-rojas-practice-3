export const checkWin = (iClicked, board, cPlayer) => {
    const x = Math.floor(iClicked/size);
    const row = board.slice(x * size, (x +1)*size);
    if(row.every( el => el === cPlayer)) return row.map((_,i) => x*size + i);
    const y = iClicked%size;
    if(row.every((_, index)=> board[index*size + y] === cPlayer)) return row.map((_,i) => (i * size + y));
    if(row.every((_, index)=> board[index*size + index] === cPlayer)) return row.map((_,i) => (i*size+i));
    if(row.every((_, index)=> board[(index+1)*size - index - 1] === cPlayer)) return row.map((_,i) => ((i+1)*size-i-1));
    return false;
};
