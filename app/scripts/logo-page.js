console.log('\'Allo \'Allo!');

$("#scroll-up-btn").click(function() {
    $('body').animate({
        scrollTop: $("#header").offset().top
    }, 500);
});