$(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('burger--active');
    $('.burger-wrap').toggleClass('burger--active');
    $('.navigation').toggleClass('popup-menu');
    $('body').toggleClass('lock');
  });
});
