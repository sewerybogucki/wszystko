'use strict';

$(function () {

    var jsonURL = "http://leguralnie.pl/json/ogloszenia-json.json";

    var output = $(".offers");
    var myHTML = "";

    function getData() {



        $.ajax({
            url: jsonURL,
            dataType: "json",
            success: function (response) {

                response.forEach(function (el, ind) {

                    myHTML += "<div class='offer'>";
                    myHTML += "<figure class='offer__image'>";
                    myHTML += "<img src ='" + el.image + "'>";
                    myHTML += "</figure>";
                    myHTML += "<div class='offer__description'>";
                    myHTML += "<small>ID:" + el.id + "</small>";
                    myHTML += "<h1>" + el.title + "</h1>";
                    myHTML += "<p>" + el.description + "</p>";
                    myHTML += "<small>";
                    myHTML += " Kategoria:" + el.category + "<br>";
                    myHTML += " Miasto:" + el.city + "<br>";
                    myHTML += " Kontakt:" + el.contact + "<br>";
                    myHTML += "</small>";
                    myHTML += "</div>";
                    myHTML += "</div>";

                });

                output.html(myHTML);
            }
        });

    };

    var btn = $("#get");


    btn.on("click", function (e) {

        getData();

    });

});
