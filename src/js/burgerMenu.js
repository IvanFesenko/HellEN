$(function () {
  $('.burger--btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.navigation .logo').toggleClass('close');
    $('.burger__wrap .logo').toggleClass('open');
  });
});

$(function () {
  $('.menu__link').click(function (e) {
    e.preventDefault();
    if (document.querySelectorAll('.lock').length > 0) {
      $('.burger').toggleClass('active');
      $('.burger--btn').toggleClass('active');

      $('body').toggleClass('lock');
      $('.navigation .logo').toggleClass('close');
      $('.burger__wrap .logo').toggleClass('open');
    }
  });
});

$(function () {
  $('.burger__btn').click(function (e) {
    e.preventDefault();
    $('.burger').toggleClass('active');
    $('.burger--btn').toggleClass('active');
    $('body').toggleClass('lock');
    $('.navigation .logo').toggleClass('close');
    $('.burger__wrap .logo').toggleClass('open');
  });
});
