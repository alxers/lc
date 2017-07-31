/**
 * @param {number} n
 * @return {number}
 */
let mem = {1: 1, 2: 2};
var climbStairs = function(n) {   
    if (mem[n]) {
        return mem[n];
    } else {
        mem[n] = climbStairs(n - 1) + climbStairs(n - 2);
        return mem[n];
    }
};
