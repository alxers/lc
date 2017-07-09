var hammingDistance = function(x, y) {
    let binX = x.toString(2).split('');
    let binY = y.toString(2).split('');
    
    let diff = Math.abs(binX.length - binY.length)
    let zeros = Array(diff).fill('0');
    
    if (binX.length < binY.length) {
        binX = zeros.concat(binX);
    } else if (binY.length < binX.length) {
        binY = zeros.concat(binY);
    }
    
    let res = binX.filter(function(num, index) { return binY[index] !== num });
    return res.length;
};