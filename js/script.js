$(document).ready(function () {
    $(".header-wrap").load("./header.html");
    $(".footer-wrap").load("footer.html .footer");
    $(".item-2020").load("./PortFolio-item/item-2020.html");
    $(".item-2019").load("./PortFolio-item/item-2019.html");
    $(".item-2018").load("./PortFolio-item/item-2018.html");
    $(".item-2017").load("./PortFolio-item/item-2017.html");
    $(".item-2016").load("./PortFolio-item/item-2016.html");
    $(".item-2015").load("./PortFolio-item/item-2015.html");
    $(".item-2014").load("./PortFolio-item/item-2014.html");
    var slider1 = $('.slide-content li:eq(0)');
    var slider2 = $('.slide-content li:eq(1)');
    var slider3 = $('.slide-content li:eq(2)');
    var slider4 = $('.slide-content li:eq(3)');
    var txt = $('.hide');
    slider2.hover(function () {
        $(this).find(txt).fadeIn();
        $(this).stop().animate({
            width: "80%"
        });
    }, function () {
        $(this).find(txt).fadeOut('fast');
        $(this).stop().animate({
            width: "15%"
        });
    });
    slider3.hover(function () {
        $(this).find(txt).fadeIn();
        $(this).stop().animate({
            width: "100%"
        });
    }, function () {
        $(this).find(txt).fadeOut('fast');
        $(this).stop().animate({
            width: "15%"
        });
    });
    slider4.hover(function () {
        $(this).find(txt).fadeIn();
        $(this).stop().animate({
            width: "100%"
        });
    }, function () {
        $(this).find(txt).fadeOut('fast');
        $(this).stop().animate({
            width: "15%"
        });
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $('.header-wrap').css("background", "white")
        } else {
            $('.header-wrap').css("background", "none")
        };
    });
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $("#map").replaceWith($(".container"));
        }
    })
});