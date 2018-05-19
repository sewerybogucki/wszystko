'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "gotowanie"
                }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "gotowanie"
                },
                {
                    nazwa: "języki"
                }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                {
                    nazwa: "programowanie"
                },
                {
                    nazwa: "podroze"
                },
                {
                    nazwa: "języki"
                }
            ]

        }
    ]
}

//console.log(jsonOsoby.osoby[0].zainteresowania);


var dlugosc = jsonOsoby.osoby.length;

console.log(dlugosc);

//for (console.log.)
//
//    console.log(jsonOsoby.osoby[0].zainteresowania);

//for (var i = 0; i < dlugosc; --i) {
//    console.log(jsonOsoby.osoby[i].zainteresowania)
//};


//jsonOsoby.osoby[2].zainteresowania.forEach(function (element, index) {
//    console.log(element.osoby[0].zainteresowania);
//});
//console.log(jsonOsoby.osoby[2].zainteresowania);


function iloczyn(l1, l2, l3) {
    var wynik = l1 * l2 * l3;
    return wynik;
}


console.log(iloczyn(2, 3, 4));


//jsonOsoby.osoby[0].zainteresowania.forEach( function(zainteresowanie, index) {
//    console.log("index: " + index + " zainteresowanie: " + zainteresowanie.nazwa)
//});



var osoba = {
    imie: "Piotr",
    nazwisko: "Jachowicz",
    getFullName: function () {
        return this.imie + "" + this.nazwisko;
    }
}

var i = 1;
i = {
    value: 3
};
i = function () {
    return 1;

};

i = [1, 3]
