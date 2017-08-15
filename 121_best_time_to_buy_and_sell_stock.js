var maxProfit = function(prices) {
    let min = prices[0];
    let max = prices[0];
    let maxDiff = 0;
    let diff = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
            max = 0;
        }
        if (max < prices[i]) {
            max = prices[i];
            
            diff = max - min;
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
        
    }
    
    return maxDiff;
};
