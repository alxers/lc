/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    return s.split('').reduce(function(acc, el, index) {
        let pos = s.length - index;
        return acc += Math.pow(26, (pos - 1)) * (el.charCodeAt(0) - 64);
    }, 0)
};
