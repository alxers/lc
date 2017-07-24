/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
<<<<<<< HEAD
    return s.split('').reduce(function(acc, el, index) {
        let pos = s.length - index;
        return acc += Math.pow(26, (pos - 1)) * (el.charCodeAt(0) - 64);
    }, 0)
=======
    //  "A".charCodeAt(0)
    // 65
>>>>>>> 21424e8573cbd56386864db2178213621d2b3d59
};
