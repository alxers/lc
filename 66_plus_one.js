/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = [];
    let rec = function(digits, index) {
        let last = digits.slice(index)[0];
        if (last + 1 > 9) {
            digits.splice(index, 1, 0);
            if (index - 1 < 0) {
                index++
                digits.unshift(0);
            }
            return rec(digits, index - 1);
        } else {
            return digits.splice(index, 1, last + 1);
        }
    }
    
    rec(digits, digits.length - 1);
    return digits
};
