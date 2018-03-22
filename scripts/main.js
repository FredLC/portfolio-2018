// STICKY HEADER

$(document).ready(function() {
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass('sticky'));

  $(window).on("scroll", function() {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });
});


// PARALLAX EFFECTS

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
