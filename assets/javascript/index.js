$(document).ready(function () {
    console.log($(document).width());
    var width = $(window).width();
    if (width <= 1000) {
        $(".main-menu").css("display", "none")
        $(".mobile-menu").css("display", "block");
    }


    $(window).resize(function () {
        var width = $(window).width();
        if (width <= 1000) {
            $(".main-menu").css("display", "none");
            $(".mobile-menu").css("display", "block");
        } else if (width >= 1001) {
            $(".main-menu").css("display", "block");
            $(".mobile-menu").css("display", "none");
        }
        console.log($(window).width())
    })
});