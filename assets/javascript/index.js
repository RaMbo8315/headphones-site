$(document).ready(function () {
    console.log($(document).width());
    var width = $(window).innerWidth();
    if (width <= 1000) {
        $(".main-menu").css("display", "none")
        $(".mobile-menu").css("display", "block");
    }


    $(window).resize(function () {
        var width = $(window).innerWidth();
        if (width <= 1003) {
            $(".main-menu").css("display", "none");
            $(".mobile-menu").css("display", "block");
        } else if (width >= 1003) {
            $(".main-menu").css("display", "block");
            $(".mobile-menu").css("display", "none");
            $(".flip-container .flipper, .flip-container.hover .flipper").css("transform", "rotateX(0deg)")
        }
    })
});