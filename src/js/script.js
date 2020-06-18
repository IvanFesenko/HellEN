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
          asNavFor: '',
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
        settings: {
          arrows: true,
          asNavFor: '',
        },
      },
    ],
    mobileFirst: true,
  });

  $('.first-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 0);
  });

  $('.second-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 1);
  });

  $('.third-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 2);
  });

  $('.fourth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 3);
  });

  $('.fifth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 4);
  });

  $('.sixth-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 5);
  });

  $('.seventh-slider__item').click(function (event) {
    $('.sliderbig').slick('goTo', 6);
  });
});

// const readMoreLink = document.querySelector('.sliderbig__content-link');
// const box = document.querySelector('.sliderbig__content');

// readMoreLink.onclick = function () {
//   box.classList.add('sliderbig__content-open');
// };
