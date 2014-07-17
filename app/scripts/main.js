console.log('\'Allo \'Allo!');

// Main Nav Buttons

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


// Navbar

$(window).scroll(function () { 
  if ($(this).scrollTop() > 779) {
    $('#logo-page-header').slideDown(500);
  } else {
    $("#logo-page-header").slideUp(500);
  }
});


// Project Buttons

$( ".design-button-one" ).click(function() {
  $( ".ettain-gallery-container" ).slideDown( "slow" );
});




// exit Buttons

$( "#exit-ettain-container" ).click(function() {
  $( ".ettain-gallery-container" ).slideUp( "slow" );
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

// buttons-scroll-to

$(".design-button-one").click(function() {
    $('body').animate({
        scrollTop: $(".ettain-gallery-container").offset().top +32.5
    }, 750);
});

// exit-scroll-to-buttons

$("#exit-ettain-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top 
    }, 750);
});
