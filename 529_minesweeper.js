/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let ROW = click[0];
    let COL = click[1];
    let clickedItem = board[ROW][COL];

    var adjacentItems = function(items) {
        return items.map((item) => {
            if (item && (item !== 'M' || item !== 'B')) {
                return item;
            }
        })
    }

    var updateAdjacent = function(board, item) {
        let itemsToCheck = [];

        let upperRow = board[ROW - 1];
        let bottomRow = board[ROW + 1];

        let left = board[ROW][COL - 1];
        let right = board[ROW][COL + 1];

        let upperLeft = false;
        let upper = false;
        let upperRight = false;

        let bottomLeft = false;
        let bottom = false;
        let bottomRight = false;

        if (upperRow) {
            upperLeft = upperRow[COL - 1];
            upper = upperRow[COL];
            upperRight = upperRow[COL + 1];
        }

        if (bottomRow) {
            bottomLeft = upperRow[COL - 1];
            bottom = upperRow[COL];
            bottomRight = upperRow[COL + 1];
        }

        items = adjacentItems([upperLeft, upper, upperRight, left, right, bottomLeft, bottom, bottomRight]);
    }


    if (clickedItem === 'M') {
        clickedItem = 'X';
        return board;
    }

    if (clickedItem === 'E') {
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
