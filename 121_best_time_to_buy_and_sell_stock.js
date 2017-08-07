/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff = 0;
    let num = 0;
    for(let i = prices.length; i >= 0; i--) {
        for(let j = i - 1; j >= 0; j--) {
            num = prices[i] - prices[j];
            if (num > maxDiff) {
                maxDiff = num;
            }
        }
    }
    
    return maxDiff;
};
