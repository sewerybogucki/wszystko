'use strict';
//
//$(function () {
//
//    function showData(arrData) {
//
//        var html = "";
//        arrData.forEach(function (elem, index) {
//
//            html += "<p>Tytuł:<strong>" + elem.title + "</strong></p>";
//        });
//
//        document.body.innerHTML = html;
//
//    }
//    $.getJSON("https://jsonplaceholder.typicode.com/posts/", function (data) {
//        showData(data);
//    });
//
//});

$(function () {

    var ajaxUrl = "https://jsonplaceholder.typicode.com/posts/";

    $.ajax({


        url: ajaxUrl,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }

    })
});
