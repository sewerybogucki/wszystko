'use strict';

var wynik = document.getElementById("pobierz");


function showData(show) {

    console.log(show);
    output.innerHTML = show

    $("div").html(show.userId + " " + show.userName + " " + show.userURL);
}

$("button").click(function () {

    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        function (data) {

            showData(data);


        })


});









//
//var btn = document.getElementById("pobierz");
//var output = document.getElementById("output");
//
//
//function pobierzDane() {
//    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108.pl");
//}
//
//function ajax(method, url) {
//
//    var httpReq = new XMLHttpRequest();
//
//    httpReq.open(method, url);
//
//    httpReq.addEventListener('readystatechange', function () {
//
//        if (httpReq.readyState == 4) {
//
//            if (httpReq.status === 200) {
//
//                var data = httpReq.responseText;
//                output.innerHTML = data;
//            }
//        }
//    });
//
//    httpReq.send();
//
//}
//
//
//btn.addEventListener("click", pobierzDane);
