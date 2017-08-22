/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    if (board[click[0]][click[1]] === 'M') {
        board[click[0]][click[1]] = 'X';
    }
    
    return board;
};
