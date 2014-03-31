console.log('\'Allo \'Allo!');

$("#contact-button").click(function() {
    $('body').animate({
        scrollTop: $("#footer").offset().top
    }, 750);
});

$("#scroll-up-btn").click(function() {
    $('body').animate({
        scrollTop: 0}, 500);
});