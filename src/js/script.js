$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    speed: 500,
    autoplay: false,
  });
});

$(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.burger-wrap').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
