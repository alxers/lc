/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */

function updateAndReturnAdjacent(items, board, currentClick) {
    minesCount = 0
    emptyCells = []
    items.map((item) => {
        // ['Cell item', 'row', 'col']
        if (item[0] && (item[0] === 'E')) {
            emptyCells.push([item[1], item[2]]);
        } else if (item[0] && item[0] === 'M') {
            minesCount += 1;
        }
    })
    if (minesCount == 0) {
        return emptyCells
    } else {
        board[currentClick[0]][currentClick[1]] = minesCount.toString();
        return [];
    }
}

function revealItems(board, click, set) {
    let row = click[0];
    let col = click[1];

    if (board[row][col] === 'E') {
        board[row][col] = 'B';
    }
// console.table(board);
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
        bottomLeft = bottomRow[col - 1];
        bottom = bottomRow[col];
        bottomRight = bottomRow[col + 1];
    }

    items = updateAndReturnAdjacent([
            [upperLeft, row - 1, col - 1],
            [upper, row - 1, col],
            [upperRight, row - 1, col + 1],
            [left, row, col - 1],
            [right, row, col + 1],
            [bottomLeft, row + 1, col - 1],
            [bottom, row + 1, col],
            [bottomRight, row + 1, col + 1]
        ], board, click);

    items.map((item)=>{
        set.add(item[0] + ',' + item[1])
    });
    set.forEach((item) => {
        set.delete(item)
        let row = +item.split(',')[0];
        let col = +item.split(',')[1];
        revealItems(board, [row, col], set);
    })
}

function updateBoard(board, click) {
    let row = click[0];
    let col = click[1];
    let clickedItem = board[row][col];

    if (clickedItem === 'M') {
        board[row][col] = 'X';
        return board;
    }

    let set = new Set();
    if (clickedItem === 'E') {
        revealItems(board, click, set);
    }
    
    return board;
};



//OK If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.

// If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.

// Return the board when no more squares will be revealed.

// Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

// Click : [3,0]

// Output: 

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]
