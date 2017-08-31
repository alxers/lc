/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
function updateAndReturnAdjacent(items) {
    return items.map((item, index) => {
        if (item && (item !== 'M' || item !== 'B')) {
            item = 'B';
            return index;
        }
    })
}

function revealItems(board, click) {
    let row = click[0];
    let col = click[1];

    let upperRow = board[row - 1];
    let bottomRow = board[row + 1];

    let left = board[row][col - 1];
    let right = board[row][col + 1];

    let upperLeft = false;
    let upper = false;
    let upperRight = false;

    let bottomLeft = false;
    let bottom = false;
    let bottomRight = false;

    if (upperRow) {
        upperLeft = upperRow[col - 1];
        upper = upperRow[col];
        upperRight = upperRow[col + 1];
    }

    if (bottomRow) {
        bottomLeft = upperRow[col - 1];
        bottom = upperRow[col];
        bottomRight = upperRow[col + 1];
    }

    items = updateAndReturnAdjacent([upperLeft, upper, upperRight, left, right, bottomLeft, bottom, bottomRight]);

    items.map(()=>{
        // change click to the item in 'items' POSITION, recursively call revealItems
    })
}

function updateBoard(board, click) {
    let row = click[0];
    let col = click[1];
    let clickedItem = board[row][col];

    if (clickedItem === 'M') {
        clickedItem = 'X';
        return board;
    }

    if (clickedItem === 'E') {
        revealItems(board, click);
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
