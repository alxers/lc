/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    nums.map(function(el, index) {
        if (el === 0) {
            nums.push(nums.splice(index, 1)[0]);   
        }
    });
};
