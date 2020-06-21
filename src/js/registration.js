$(document).ready(function () {
  $('#phone-mask').mask('+38 (000) 000 0000');
});

$('#phone-mask').click(function (e) {
  e.preventDefault();
  e.target.value = '+38 (0';
});
