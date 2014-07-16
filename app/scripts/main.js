console.log('\'Allo \'Allo!');

$("#work-btn").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top
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

// Design Buttons

$( ".design-button-one" ).click(function() {
  $( ".ettain-gallery-container" ).slideToggle( "slow" );
});

// exit Buttons

$( "#exit-ettain-container" ).click(function() {
  $( ".ettain-gallery-container" ).slideToggle( "slow" );
});

// Image Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.diy-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('show');
$items.eq(itemToShow).addClass('show');
};
 
$('.next').on('click', function(){
counter++;
showCurrent();
});
 
$('.prev').on('click', function(){
counter--;
showCurrent();
});
 
});
