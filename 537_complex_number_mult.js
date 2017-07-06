var complexNumberMultiply = function(a, b) {
    let aNum, aComplexNum, bNum, bComplexNum;
    [aNum, aComplexNum] = a.split('+');
    [bNum, bComplexNum] = b.split('+');
    
    aNum = parseInt(aNum, 10);
    bNum = parseInt(bNum, 10);
    aComplexNum = parseInt(aComplexNum, 10);
    bComplexNum = parseInt(bComplexNum, 10);
    
    let result = aNum * bNum +
                 aNum * bComplexNum +
                 aComplexNum * bNum +
                (aComplexNum * bComplexNum * -1)
    return `0+${result}i`;
};
