var maxProfit = function(prices) {
    let min = 0;
    let max = 0;
    let maxDiff = 0;
    let diff = 0;
    for (let i = 0; i > prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i];
        }
        if (max < prices[i]) {
            max = prices[i];
        }
        
    }
};
