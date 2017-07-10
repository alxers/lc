// var findComplement = function(num) {
//     if (num === 1) {
//         return 0;
//     }
//     return parseInt(num.toString(2).split('').map(function(n) { return 1 - n }).join(''), 2);
    
// };

var findComplement = function(num) {
    let biNum = num.toString(2);
    let flippedNum = (~ num) >>> 0;
    return parseInt(flippedNum.toString(2).slice(- biNum.length), 2);
    
};
