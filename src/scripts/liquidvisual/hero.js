/*
    HERO.JS - Last updated: 19.12.18, 04.05.18, 20.10.15
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var isTablet = $(window).width() < 1025; // no more touch

//-----------------------------------------------------------------
// LAUNCH CAROUSEL
//-----------------------------------------------------------------

function launchCarousel() {
    var $slider = $('.lv-hero');
    var pause = Number($slider.attr('data-pause') || 2000); // default is 2 seconds

    $slider.bxSlider({
        auto: true, //(isTablet ? false : true),
        mode: 'horizontal', // fade (much have fixed height or won't work)
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: false, // https://github.com/stevenwanderski/bxslider-4/issues/1240
        oneToOneTouch: false,
        speed: 1000,
        pause: pause,
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

