console.log('\'Allo \'Allo!');

// Main Nav Buttons

$("#work-btn").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top -80
    }, 1250);
});

$("#about-btn").click(function() {
    $('body').animate({
        scrollTop: $("#about").offset().top -80
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

// Header Nav Buttons

$("#header-home-button").click(function() {
    $('body').animate({
        scrollTop: 0}, 500);
});

$(".menu-graphic-design").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top -80
    }, 750);
});

$(".menu-ui-design").click(function() {
    $('body').animate({
        scrollTop: $("#ui-design").offset().top -80
    }, 750);
});

$(".menu-web-dev").click(function() {
    $('body').animate({
        scrollTop: $("#web-development").offset().top -80
    }, 750);
});

$("#header-about-button").click(function() {
    $('body').animate({
        scrollTop: $("#about").offset().top -80
    }, 750);
});

$("#header-contact-button").click(function() {
    $('body').animate({
        scrollTop: $("#footer").offset().top
    }, 750);
});


// Header Nav Dropdown 

$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});


// Navbar

$(window).scroll(function () { 
  if ($(this).scrollTop() > 699) {
    $('#logo-page-header').slideDown(50);
  } else {
    $("#logo-page-header").slideUp(500);
  }
});


// Project Buttons

$( ".design-button-one" ).click(function() {
  $( ".ettain-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-two" ).click(function() {
  $( ".logo-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-three" ).click(function() {
  $( ".woolpert-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-four" ).click(function() {
  $( ".river-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-five" ).click(function() {
  $( ".home-depot-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-six" ).click(function() {
  $( ".affluent-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-seven" ).click(function() {
  $( ".chicopee-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-eight" ).click(function() {
  $( ".smart-fox-gallery-container" ).slideDown( "slow" );
});

$( ".design-button-nine" ).click(function() {
  $( ".red-sea-gallery-container" ).slideDown( "slow" );
});

$( ".ui-button-one" ).click(function() {
  $( ".mello-yello-gallery-container" ).slideDown( "slow" );
});

$( ".ui-button-three" ).click(function() {
  $( ".gag-gallery-container" ).slideDown( "slow" );
});

$( ".ui-button-four" ).click(function() {
  $( ".river-ui-gallery-container" ).slideDown( "slow" );
});


// exit Buttons

$( "#exit-ettain-container" ).click(function() {
  $( ".ettain-gallery-container" ).slideUp( "slow" );
});

$( "#exit-logo-container" ).click(function() {
  $( ".logo-gallery-container" ).slideUp( "slow" );
});

$( "#exit-woolpert-container" ).click(function() {
  $( ".woolpert-gallery-container" ).slideUp( "slow" );
});

$( "#exit-river-container" ).click(function() {
  $( ".river-gallery-container" ).slideUp( "slow" );
});

$( "#exit-home-depot-container" ).click(function() {
  $( ".home-depot-gallery-container" ).slideUp( "slow" );
});

$( "#exit-affluent-container" ).click(function() {
  $( ".affluent-gallery-container" ).slideUp( "slow" );
});

$( "#exit-chicopee-container" ).click(function() {
  $( ".chicopee-gallery-container" ).slideUp( "slow" );
});

$( "#exit-smart-fox-container" ).click(function() {
  $( ".smart-fox-gallery-container" ).slideUp( "slow" );
});

$( "#exit-red-sea-container" ).click(function() {
  $( ".red-sea-gallery-container" ).slideUp( "slow" );
});

$( "#exit-mello-yello-container" ).click(function() {
  $( ".mello-yello-gallery-container" ).slideUp( "slow" );
});

$( "#exit-gag-container" ).click(function() {
  $( ".gag-gallery-container" ).slideUp( "slow" );
});

$( "#exit-river-ui-container" ).click(function() {
  $( ".river-ui-gallery-container" ).slideUp( "slow" );
});






// Ettain Group Image Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.ettain-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('ettain-show');
$items.eq(itemToShow).addClass('ettain-show');
};
 
$('.ettain-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.ettain-prev').on('click', function(){
counter--;
showCurrent();
});
 
});


// Woolpert Image Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.woolpert-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('woolpert-show');
$items.eq(itemToShow).addClass('woolpert-show');
};
 
$('.woolpert-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.woolpert-prev').on('click', function(){
counter--;
showCurrent();
});
 
});


// River Church Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.river-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('river-show');
$items.eq(itemToShow).addClass('river-show');
};
 
$('.river-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.river-prev').on('click', function(){
counter--;
showCurrent();
});
 
});


// Home Depot Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.home-depot-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('home-depot-show');
$items.eq(itemToShow).addClass('home-depot-show');
};
 
$('.home-depot-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.home-depot-prev').on('click', function(){
counter--;
showCurrent();
});
 
});


// Affluent Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.affluent-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('affluent-show');
$items.eq(itemToShow).addClass('affluent-show');
};
 
$('.affluent-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.affluent-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// Booming Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.chicopee-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('chicopee-show');
$items.eq(itemToShow).addClass('chicopee-show');
};
 
$('.chicopee-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.chicopee-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// Smart Fox Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.smart-fox-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('smart-fox-show');
$items.eq(itemToShow).addClass('smart-fox-show');
};
 
$('.smart-fox-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.smart-fox-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// Red Sea Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.red-sea-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('red-sea-show');
$items.eq(itemToShow).addClass('red-sea-show');
};
 
$('.red-sea-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.red-sea-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// Mello Yello Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.mello-yello-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('mello-yello-show');
$items.eq(itemToShow).addClass('mello-yello-show');
};
 
$('.mello-yello-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.mello-yello-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// Get A Gig Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.gag-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('gag-show');
$items.eq(itemToShow).addClass('gag-show');
};
 
$('.gag-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.gag-prev').on('click', function(){
counter--;
showCurrent();
});
 
});

// River UI Gallery
 
$(document).ready(function(){
 
var counter = 0,
$items = $('.river-ui-slideshow figure'),
numItems = $items.length;
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems);
$items.removeClass('river-ui-show');
$items.eq(itemToShow).addClass('river-ui-show');
};
 
$('.river-ui-next').on('click', function(){
counter++;
showCurrent();
});
 
$('.river-ui-prev').on('click', function(){
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

$(".design-button-two").click(function() {
    $('body').animate({
        scrollTop: $(".logo-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-three").click(function() {
    $('body').animate({
        scrollTop: $(".woolpert-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-four").click(function() {
    $('body').animate({
        scrollTop: $(".river-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-five").click(function() {
    $('body').animate({
        scrollTop: $(".home-depot-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-six").click(function() {
    $('body').animate({
        scrollTop: $(".affluent-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-seven").click(function() {
    $('body').animate({
        scrollTop: $(".chicopee-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-eight").click(function() {
    $('body').animate({
        scrollTop: $(".smart-fox-gallery-container").offset().top +32.5
    }, 750);
});

$(".design-button-nine").click(function() {
    $('body').animate({
        scrollTop: $(".red-sea-gallery-container").offset().top +32.5
    }, 750);
});

$(".ui-button-one").click(function() {
    $('body').animate({
        scrollTop: $(".mello-yello-gallery-container").offset().top +32.5
    }, 750);
});

$(".ui-button-three").click(function() {
    $('body').animate({
        scrollTop: $(".gag-gallery-container").offset().top +32.5
    }, 750);
});

$(".ui-button-four").click(function() {
    $('body').animate({
        scrollTop: $(".river-ui-gallery-container").offset().top +32.5
    }, 750);
});

// exit-scroll-to-buttons

$("#exit-ettain-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top 
    }, 750);
});

$("#exit-logo-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top 
    }, 750);
});

$("#exit-woolpert-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top 
    }, 750);
});

$("#exit-river-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +430
    }, 750);
});

$("#exit-home-depot-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +430
    }, 750);
});

$("#exit-affluent-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +430
    }, 750);
});

$("#exit-chicopee-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +820
    }, 750);
});

$("#exit-smart-fox-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +820
    }, 750);
});

$("#exit-red-sea-container").click(function() {
    $('body').animate({
        scrollTop: $("#graphic-design").offset().top +820
    }, 750);
});

$("#exit-mello-yello-container").click(function() {
    $('body').animate({
        scrollTop: $("#ui-design").offset().top -80 
    }, 750);
});

$("#exit-gag-container").click(function() {
    $('body').animate({
        scrollTop: $("#ui-design").offset().top -80 
    }, 750);
});

$("#exit-river-ui-container").click(function() {
    $('body').animate({
        scrollTop: $("#ui-design").offset().top +430
    }, 750);
});
