'use strict';
//klamry sa w notacji obiektowej
//$("el").animate

$(function () {

    $("#btn-animuj").on('click', function () {
        $("#anim").animate({

            "top": "200px",
            "left": "300px",
            "width": "500px",
            "height": "350px",
            "opacity": "0.2",
        }, 1500, function () {
            $("#anim").addClass("new_background");

            $('#anim').delay(3000).animate({
                "top": "0px",
                "left": "100px",
                "width": "200px",
                "height": "250px",
                "opacity": "0.4",
            }, 2000)

        });

    });
});
