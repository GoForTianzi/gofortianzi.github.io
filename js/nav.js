$(document).ready(function() {
    $(window).on("scroll", function() {
        var wn = $(window).scrollTop();
        if (wn > 10) {
            $("nav").css("background", "rgba(120,120,120,0.5)");
            $("path").css("fill", "white");
            $(".nav-a").css("color", "white");
        } else {
            $("nav").css("background", "rgb(0,0,0,0)");
            $("path").css("fill", "rgb(41, 41, 41)");
            $(".nav-a").css("color", "rgb(41, 41, 41)");
        }
    });
});