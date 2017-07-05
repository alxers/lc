var islandPerimeter = function(grid) {
    var weight = 0;
    
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++) {
            var currEl = grid[i][j];
            var prevEl = grid[i][j-1] || 0;
            var nextEl = grid[i][j+1] || 0;
            var prevRowEl = grid[i-1] && grid[i-1][j] || 0;
            var nextRowEl = grid[i+1] && grid[i+1][j]  || 0;
            if(currEl) {
                weight += 4 - (prevEl + nextEl + prevRowEl + nextRowEl);
            }
        }
    }
    
    return weight;
};