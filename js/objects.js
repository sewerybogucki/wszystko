'use strict';

var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function () {
        console.log(this.imie);
    }
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function () {
        console.log(this.imie);
    }
}


kaja.przedstawOsobe(kaja.wzrost);

console.log(kaja.wzrost);
console.log(kaja);

//krystian.przedstawOsobe();

"use strict";

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;   
        this.nazwisko = nazwisko;   
    }
}
var agata = new Osoba("Agata", "Biesaga");

var marcin = new Osoba("Marcin", "Kwiatkowski");

console.log(marcin);

agata.wyswietlInfo();


wyswietlInfo() {       
    console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko);   
}
