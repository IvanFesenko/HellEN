$(document).ready(function () {
  $('.slider').slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    asNavFor: '.sliderbig',
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 7,
        },
      },
    ],
    mobileFirst: true,
  });

  $('.sliderbig').slick({
    asNavFor: '.slider',
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { arrows: true },
      },
    ],
    mobileFirst: true,
  });

  $('.first-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 1);
  });

  $('.second-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 2);
  });

  $('.third-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 3);
  });

  $('.fourth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 4);
  });

  $('.fifth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 5);
  });

  $('.sixth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 6);
  });

  $('.seventh-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 7);
  });
});
