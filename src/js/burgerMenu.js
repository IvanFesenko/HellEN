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
  $('.menu__item').click(function (e) {
    e.preventDefault();
    $('.burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.navigation .logo').toggleClass('close');
    $('.burger__wrap .logo').toggleClass('open');
  });
});
