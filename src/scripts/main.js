/*
    MAIN.JS - Last updated: 04.05.18, 27.10.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).on('ready', function() {
    NProgress.start(); // Start preloader bar
});

$(window).on('load', function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Off Canvas Menu
//-----------------------------------------------------------------

var $offCanvasMenu = $("[data-off-canvas-menu]");

$offCanvasMenu.mmenu({ "offCanvas": { "position": "right" }});

$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    $offCanvasMenu.trigger('open.mm');
});

//==================================================
//
//==================================================