"use strict"

/*typ liczbowy*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*typ string*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplata)


/*
logiczne
*/

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("nie ma SMOGa");
}


/*typy specjalne*/


var niezdefiniowalnaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowalnaZmienna);
console.log(nullowaZmienna);
