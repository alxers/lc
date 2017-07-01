var matrixReshape = function(nums, r, c) {
    var allItems = [].concat.apply([], nums);
    var allItemsNum = allItems.length;
    
    if (r === 1 && c === allItemsNum || r === allItemsNum && c === 1 || r * c === allItemsNum) {
      var newCol = allItemsNum / r;
      var newRow = allItemsNum / c;
      var arr = [];

      for (var i=0;i<newRow;i++) {
        arr[i] = [];
        for (var j=0;j<newCol;j++) {
            arr[i].push(allItems.shift());
        }
      }

      return arr;
    } else {
        return nums
    }
};