
// let readMore = document.querySelectorAll('.more-text'),
//   dots = document.querySelectorAll('.sliderbig__item-content_dots'),
//   readMoreButtons = document.querySelectorAll(
//     '.sliderbig__item-content-button',
//   );

// console.log(readMore);
// console.log(dots);
// console.log(readMoreButtons);

// let i = 0;
// let button;

// let readMoreArr = Array.from(readMore);

// let dotsArr = Array.from(dots);

// let buttonsArr = Array.from(readMoreButtons);

// console.log(readMoreArr);
// console.log(dotsArr);
// console.log(buttonsArr);

// function read() {
//   if (!i) {
//     readMore[0].style.display = 'inline';
//     dots[0].style.display = 'none';
//     readMoreButtons[0].innerHTML = 'скрыть текст';
//     i = 1;
//   } else {
//     readMore[0].style.display = 'none';
//     dots[0].style.display = 'inline';
//     readMoreButtons[0].innerHTML = 'Читать дальше';
//     i = 0;
//   }
// }

let button = document.getElementsByClassName('sliderbig__item-content-button');
let dots = document.getElementsByClassName('sliderbig__item-content_dots');
let readMoreText = document.getElementsByClassName('more-text');
let offBtn = document.getElementsByClassName(
  'sliderbig__item-content-button-active',
);

$(function () {
  $(button).click(function (e) {
    e.preventDefault();
    $(this).toggleClass('sliderbig__item-content-button-active');
    $(dots).toggleClass('sliderbig__item-content_dots-off');
    $(readMoreText).toggleClass('more-text-on');
    $('.read').toggleClass('read-off');
    $('.unread').toggleClass('unread-on');
  });
});

