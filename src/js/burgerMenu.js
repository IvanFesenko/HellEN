$(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.navigation .logo').toggleClass('close');
    $('.burger__wrap .logo').toggleClass('open');
  });
});
