let $header = $("header");
let $brand = $(".branding");
let $logoLG = $(".logo-lg");
let $logoSM = $(".logo-sm");
let $overlay = $('<div class="overlay"></div>');
let $menu = $(".mobileMenu");
let $ul = $("<ul></ul>");
let $close_btn = $(".close_btn");

$("body").append($overlay);

$overlay.add($menu).on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
});

$("#mobileButton").click(function (event) {
    event.preventDefault();
    $overlay.show().animate({ opacity: 0.8 }, 200);
    $close_btn.show().animate({ opacity: 0.8 }, 200);
    $menu.toggleClass("slideOut");
});

$close_btn.click(function () {
    $overlay.hide().animate({ opacity: 0 }, 200);
    $menu.toggleClass("slideOut");
});

$overlay.click(function () {
    $overlay.hide().animate({ opacity: 0 }, 200);
    $menu.toggleClass("slideOut");
});

$menu.append($ul);
$(".listMenu a").each(function () {
    let $anchor = $(this);
    let $li = $("<li></li>");
    $anchor.clone().appendTo($li);
    $ul.append($li);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $($header).addClass("stick");
        $($brand).addClass("stick");
        $($logoLG).hide();
        $($logoSM).show();
        $($close_btn).show();
    } else {
        $($header).removeClass("stick");
        $($brand).removeClass("stick");
        $($logoSM).hide();
        $($logoLG).show();
        $($close_btn).show();
    }
});
