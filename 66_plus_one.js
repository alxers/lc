var plusOne = function(digits) {
    let nums = digits;
    let res = []
    let rec = function(nums) {
        let last = nums[nums.length - 1];
        if (last <= 9) {
            return nums
        }
        if (!last) {
            let first = digits[0] + 1;
            // debugger
            if (first > 9) {
                return res.unshift(1);
            } else {
                return res.unshift(digits[0] + 1);   
            }
        } else {
            res.unshift(0);
            return rec(nums.slice(0, -1));
        }
    }
    rec(nums);
    return res;
};
