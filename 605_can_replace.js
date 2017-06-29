var canPlaceFlowers = function(flowerbed, n) {

    var i = 0;

    var counter = 0;

    for (; i < flowerbed.length; i++) {

        var prevIndex = i - 1;

        var nextIndex = i + 1;

        if ((flowerbed[prevIndex] === 0 || flowerbed[prevIndex] === undefined) &&

             (flowerbed[nextIndex] === 0 || flowerbed[i+1] === undefined ) &&

             flowerbed[i] === 0) {

            counter += 1;

            i = nextIndex;

        } 

    }

    

    return counter >= n;

};
