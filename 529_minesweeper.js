/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const ROW = 0;
    const COL = 1;

    if (board[click[ROW]][click[COL]] === 'M') {
        board[click[ROW]][click[COL]] = 'X';
        return board;
    }

    if (board[click[ROW]][click[COL]] === 'E') {
        if (noAdjacentMines()) {
            revealWithAdjacent();
        } else {
            revealWithAdjacentMines();
        }
    }
    
    return board;
};


//OK If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.

// If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.

// Return the board when no more squares will be revealed.

// Input: 

// [['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'M', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E']]

// Click : [3,0]

// Output: 

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]
