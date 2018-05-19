var btn = document.getElementById("oblicz");

btn.addEventListener("click", function (e) {
    'use strict';
    e.preventDefault();
    oblicz("wynik");
});

function oblicz() {

    var dane = pobierzDane();

    if (dane.podatek == true) {
        var oprocentowanieOpodatkowanie = dane.oprocentowanie - (dane.oprocentowanie * 19 / 100)
    } else {
        var oprocentowanieOpodatkowanie = dane.oprocentowanie;
    }


    var suma = dane.wyplata * Math.pow(1 + (oprocentowanieOpodatkowanie / dane.okresKapitalizacji), dane.iloscLat * dane.okresKapitalizacji);

    suma = parseFloat(suma).toFixed(2);

    wyswietlWynik(suma, "wynik");

}

function pobierzDane() {
    var wyplata = parseInt(document.getElementById("wyplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100; //dzielimy przez sto bo to procenty
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
    var podatek = parseInt(document.getElementById("podatek").checked);


    var data = {
        'wyplata': wyplata,
        'iloscLat': iloscLat,
        'oprocentowanie': oprocentowanie,
        'okresKapitalizacji': okresKapitalizacji,
        'podatek': podatek,


    }
    return data;
}

function wyswietlWynik(kwotaDoWyswietlenia, idElementu) {
    document.getElementById(idElementu).innerHTML = kwotaDoWyswietlenia;


}
