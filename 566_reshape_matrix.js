/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var allItemsNum = nums.reduce(function(acc, currVal){ return acc += currVal.length }, 0)

    var newCol = allItmesNum / r;
    var newRow = allItmesNum / c;
    
    if (r === 1 && c === allItemsNum || r === allItemsNum && c === 1 || r * c === allItemsNum) {
      var arr = [];
      var subArr = [];

      for (var i=0;i<rows;i++) {
        arr[i] = [];
        for (var j=0;j<cols;j++) {
            arr[i].push(nums[nums.indexOf(j)]);
            //console.log("i: ",i,"j: ",j)
        }
      }

      return arr;
    }
};
