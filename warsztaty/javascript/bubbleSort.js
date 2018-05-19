var unsortedArray = [15, 22, 87, 1, 33, 55, 24, 50, 66, 67];

console.log("przed sortowaniem");
console.log(unsortedArray);


for (i = 0; i < unsortedArray.length; i++) {
    'use strict';

    for (var j = 0; j < unsortedArray.length - 1; j++) {
        if (unsortedArray[j] < unsortedArray[j + 1]) {}

        var temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
    }
}

console.log("po sortowaniu");
console.log(unsortedArray);
