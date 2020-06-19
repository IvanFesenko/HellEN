let popup = document.getElementById('mypopup'),
  popupToogle = document.getElementById('popup__btn'),
  popupClose = document.querySelector('.close');

popupToogle.onclick = function () {
  popup.style.display = 'block';
};

popupClose.onclick = function () {
  popup.style.display = 'none';
};

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
};
