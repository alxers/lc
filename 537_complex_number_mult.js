var complexNumberMultiply = function(a, b) {
    let aNum, aComplexNum, bNum, bComplexNum;
    
    aNum = a.split('+')[0];
    aComplexNum = a.split('+')[1];
    
    bNum = b.split('+')[0];
    bComplexNum = b.split('+')[1];
    
    aNum = parseInt(aNum, 10);
    bNum = parseInt(bNum, 10);
    aComplexNum = parseInt(aComplexNum, 10);
    bComplexNum = parseInt(bComplexNum, 10);
    
    let complexNumProd = aNum * bComplexNum + aComplexNum * bNum;
    let numProd = aNum * bNum + (aComplexNum * bComplexNum * -1);
    
    return numProd + "+" + complexNumProd + "i";
};
