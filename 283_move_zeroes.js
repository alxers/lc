var moveZeroes = function(nums) {
    // let zeroes = 0;
    // nums.filter(function(el) {
    //     if (el === 0) {
    //         zeroes++;
    //     }
    //     return el !== 0
    // }).concat(Array(zeroes).fill(0));
    
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroes++;
            nums.splice(i, 1);
            i--;
        }
    }
    
    for (let j = 0; j < zeroes; j++) {
        nums.push(0);
    }
};
