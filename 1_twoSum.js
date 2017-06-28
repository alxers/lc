function twoSum(nums, target) {
    function doMagic(arr) {
        var first = arr[0];
        var rest = arr.slice(1);

        var result = rest.map(function(num) {
           if(first + num === target) {
               return [nums.indexOf(first), nums.lastIndexOf(num)];
           } 
        }).filter(Boolean);
        
        if(result.length) {
            return result[0];
        } else {
            return doMagic(rest);
        }
    }

    return doMagic(nums);
}

function twoSum(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, nums.lastIndexOf(nums[j])];
            }
        }
    }
}
