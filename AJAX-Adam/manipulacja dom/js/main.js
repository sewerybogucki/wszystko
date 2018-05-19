//'use strict';
////klamry sa w notacji obiektowej
////$("el").animate
//
//$(function () {
'use strict';
//
//    $("#btn-animuj").on('click', function () {
//        $("#anim").animate({
//
//            "top": "200px",
//            "left": "300px",
//            "width": "500px",
//            "height": "350px",
//            "opacity": "0.2",
//        }, 1500, function () {
//            $("#anim").addClass("new_background");
//
//            $('#anim').delay(3000).animate({
//                "top": "0px",
//                "left": "100px",
//                "width": "200px",
//                "height": "250px",
//                "opacity": "0.4",
//            }, 2000)
//
//        });
//
//    });
//});



//przypisujemy elementy do zmiennych
var paragraf = document.getElementById("copy");

var btnCopy = document.getElementById("btn-c");

var btnPaste = document.getElementById("btn-p");

var output = document.getElementById("output");

var txt = "";

btnCopy.addEventListener("click", function () {

    txt = paragraf.innerHTML;


});

btnPaste.addEventListener("click", function () {

    if (txt == "") {
        output.innerHTML = "Skopiuj tekst";
    } else {
        output.innerHTML = txt;

    }

});
