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
