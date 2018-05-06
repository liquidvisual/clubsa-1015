/*
    HERO.JS - Last updated: 04.05.18, 20.10.15
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var isTablet = $(window).width() < 1025; // no more touch

//-----------------------------------------------------------------
// LAUNCH CAROUSEL
//-----------------------------------------------------------------

function launchCarousel() {
    $('.lv-hero').bxSlider({
        auto: true, //(isTablet ? false : true),
        mode: 'horizontal', // fade (much have fixed height or won't work)
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: true,
        oneToOneTouch: false,
        speed: 1000,
        pause: 4000,
        slideMargin: 0,
        slideSelector: ".lv-hero-item",
        minSlides: 1,
        controls: true,
        nextSelector: ".lv-hero-carousel-next-btn",
        prevSelector: ".lv-hero-carousel-prev-btn",
        nextText: "",
        prevText: "",
        infiniteLoop: true,
        useCSS: true,
        pager: false,
        autoHover: true,
        stopAutoOnClick: true,
        // pagerSelector: '.lv-hero-carousel-bullets'
        // onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');},
        // onSlideBefore: function(){  $('.lv-hero-caption').hide().removeClass('fadeInLeft');},
        // onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');}
    });
}

//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(document).ready(function(){
    launchCarousel();
});

//==================================================
//
//==================================================

