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
        breakpoint: 768,
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
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
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

const readMore = document.getElementsByClassName('more-text'),
  dots = document.getElementsByClassName('sliderbig__item-content_dots'),
  readMoreButton = document.getElementsByClassName(
    'sliderbig__item-content-button',
  );
console.log(readMore);
console.log(dots);
console.log(readMoreButton);
let i = 0;
// let indexOfButton;

// indexOfButton =
function read() {
  if (!i) {
    readMore[2].style.display = 'inline';
    dots[2].style.display = 'none';
    readMoreButton[2].innerHTML = 'скрыть текст';
    i = 1;
  } else {
    readMore[2].style.display = 'none';

    dots[2].style.display = 'inline';
    readMoreButton[2].innerHTML = 'Читать дальше';
    i = 0;
  }
}

$(function () {
  $('body').on('click', '[href*="#"]', function (e) {
    var fixed_offset = '';
    $('html,body')
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 400);
    e.preventDefault();
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
