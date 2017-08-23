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


$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
