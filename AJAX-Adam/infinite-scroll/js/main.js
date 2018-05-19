'use strict';



$(window).scroll(function () {

    var theWindow = $(this);
    var theContainer = $('body');
    var wysokosc = 10;


    if (theWindow.scrollTop() >= theContainer.height() - theWindow.height() - wysokosc) {
        theContainer.append('<h1>Kolejny wariat</h1><br />');

        console.log("Jestem na dole strony")

        var ajaxUrl = ("https://jsonplaceholder.typicode.com/users")

        $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {


            data.forEach(function (elem) {

                console.log(elem);

                theContainer.append("<h1>" + elem.username + elem.email + "</h1>")

            })

        });



    };
});



//if (topOffset == docHeight) {
//
//
//    //    zapytanie ajax
//
//    $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
//
//                var newListElement = "";
//
//
//                data.forEach(function (elem, ind) {
//
//                        newListElement += ""
