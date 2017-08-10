var maxProfit = function(prices) {
    let sortedPrices = prices.slice().sort(function(a, b) {
       return a-b; 
    });
    let minEl = sortedPrices[0];
    let maxEl;
    let minInd = prices.indexOf(minEl); 
    for (let i = sortedPrices.length-1; i > 0; i--) {
        let diff = sortedPrices[i] - minEl
        let maxInd = prices.lastIndexOf(sortedPrices[i])
        if (maxInd > minInd) {
            return diff;
        }
    }
    return 0;
};
