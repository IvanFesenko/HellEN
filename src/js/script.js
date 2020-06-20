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

let readMore = document.querySelectorAll('.more-text'),
  dots = document.querySelectorAll('.sliderbig__item-content_dots'),
  readMoreButtons = document.querySelectorAll(
    '.sliderbig__item-content-button',
  );
console.log(readMore);
console.log(dots);
console.log(readMoreButtons);

let i = 0;
let button;

let readMoreArr = Array.from(readMore);

let dotsArr = Array.from(dots);

let buttonsArr = Array.from(readMoreButtons);

console.log(readMoreArr);
console.log(dotsArr);
console.log(buttonsArr);

// for (let button of readMoreButtons) {0
//   console.log(button);
// }
// let indexOfButton;
// readMoreButtons.forEach(function (button, index, buttonArr) {
//   indexOfButton = index;
//   console.log(indexOfButton);
// });

// map
// let indexOfButton = buttonsArr.map(index => {
//   return index;
// });
// console.log(index);

// console.log(indexOfButton);

function read() {
  if (!i) {
    readMore[0].style.display = 'inline';
    dots[0].style.display = 'none';
    readMoreButtons[0].innerHTML = 'скрыть текст';
    i = 1;
  } else {
    readMore[0].style.display = 'none';
    dots[0].style.display = 'inline';
    readMoreButtons[0].innerHTML = 'Читать дальше';
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

//PRELOADER

document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.querySelector('#preloader');

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  });
};
