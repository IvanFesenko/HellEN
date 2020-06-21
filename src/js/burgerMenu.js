$(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('burger--active');
    $('.burger-wrap').toggleClass('burger--active');
    $('.navigation').toggleClass('popup-menu');
    $('body').toggleClass('lock');
    $('body').toggleClass('overflow-hidden');
  });
});

$(function () {
  $('.menu__link').click(function (e) {
    e.preventDefault();
    $('.navigation').toggleClass('popup-menu');
    $('.header__burger').toggleClass('burger--active');
    $('body').toggleClass('overflow-hidden');
  });
});
