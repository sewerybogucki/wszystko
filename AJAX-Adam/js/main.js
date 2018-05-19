'use strict';
//przypiujemy zmienna - get element by id i odwoływac sie do zdarzenia click, addeventlistenerClick. Potem nastepuje funckja i ja definiujemy

var btn = document.getElementById('wyslij');

//za pomoca jednej metody podbieram rozne elementy, query selector, getelementbyid, getelement by tagname lub queryselector

var output = document.querySelector("#output");

btn.addEventListener('click', function (event) {

    //    zawsze nazywamy zdarzenie - e albo event

    event.preventDefault();

    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    //    console.log(imie, nazwisko);


    //    pobieranie tesktu etc. - innerhtml/inner text

    output.innerHTML = "<p class="
    myClass " style="
    font - size: 2 rem; >
    imie: " + imie + " < /p><p>nazwisko:" + nazwisko + "</p > ";


});


//przycisk zablokowany.
//a teraz jak zrobic zeby wyswietlic wpisane dane w sasiadujacym divie?
