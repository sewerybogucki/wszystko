"use strict"

var liczba1 = 13;
var liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik)

wynik += 3;
console.log(wynik);

//if (wynik == 7) {
//    console.log("PRAWDA");
//} else {
//    console.log("FAŁSZ");
//}
//

if ("2" === 2) {
    console.log("Prawda");
} else {
    console.log("Nie prawda");
}


if (!(("2" !== 2) && (8 < 4))) {
    document.write("<br> prawda")
    document.write("")
}


(3 > 2) ? console.log("prawda"):
    console.log("fałsz")
