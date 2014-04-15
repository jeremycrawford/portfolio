console.log('\'Allo \'Allo!');

$("#work-btn").click(function() {
    $('body').animate({
        scrollTop: $("#work").offset().top
    }, 1250);
});

$("#about-btn").click(function() {
    $('body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#contact-btn").click(function() {
    $('body').animate({
        scrollTop: $("#footer").offset().top
    }, 750);
});

$("#scroll-up-btn").click(function() {
    $('body').animate({
        scrollTop: 0}, 500);
});

// $(window).scroll(function () { 
//   if ($('body').scrollTop() < 380) {
//     $("#logo-page-header").removeClass("logo-page-header-hidden", 1500);
//   }
//       else
//         $("#logo-page-header").addClass("logo-page-header-hidden", 1000);
// });

$(window).scroll(function () { 
  if ($(this).scrollTop() < 300) {
    $('#logo-page-header').fadeIn(500);
  } else {
    // $('#logo-page-header').hide();
    $("#logo-page-header").fadeOut(500);
  }
});