/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = parseInt(digits.join(''), 10) + 1;
    return sum.toString().split('').map((el)=> parseInt(el, 10));
};
