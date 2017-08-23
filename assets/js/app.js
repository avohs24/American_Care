$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$(document).ready(function(){
  $('.parallax').parallax();
});

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.how-it-works', { duration: 1000 });
sr.reveal('#contact', { duration: 1000 });
