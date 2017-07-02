var isUgly = function(num) {
    if (num === 0) {
        return false;
    }
    var res = num;
    while(true) { 
      if (res === 1 || res === 2 || res === 3 || res === 5) {
        console.log('res ugly', res);
        return true;
      } else {
        if (res % 2 === 0) {
            res = res / 2;
        } else if (res % 3 === 0) {
            res = res / 3;
        } else if (res % 5 === 0) {
            res = res / 5;
        } else {
            console.log('not ugly');
            return false;
        }
      }
    }
};
