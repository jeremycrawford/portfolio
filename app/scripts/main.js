console.log('\'Allo \'Allo!');

$(".work-btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top
    }, 1000);
});

$(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});

$(".contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 1000);
});

$(".scroll-up-btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 2000);
});