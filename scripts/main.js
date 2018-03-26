// STICKY HEADER

$(document).ready(function() {
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass('sticky'));

  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

  // SMOOTH SCROLLING

  $('.menu li a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.hash);

    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100
      }, 1000);
    }
  });

  // RESPONSIVE MENU START
  var body = $('body');
  var menuTrigger = $('.js-menu-trigger');
  var mainOverlay = $('.js-main-overlay');

  menuTrigger.on('click', function() {
    body.addClass('menu-is-active');
  })

  mainOverlay.on('click', function() {
    body.removeClass('menu-is-active');
  })

  $('.menu li a').on('click', function() {
    body.removeClass('menu-is-active');
  })


});


// PARALLAX EFFECTS

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// MASONRY JS

$('.grid').masonry({
  // Options
  itemSelector: '.grid-item',
  columnWidth: 120,
  fitWidth: true,
  gutter: 0
});
