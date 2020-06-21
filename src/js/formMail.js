$("#sendMail").on("click", function () {
  var name = $('#user-name').val();
  var phone = $('#phone-mask').val();


  $.ajax({
    url: '../form/mail.php',
    type: 'POST',
    cache: false,
    data: { 'name': name, 'phone': phone },
    dataType: 'html',
    beforeSend: function () {
      $("#sendMail").prop("disabled", true);
    },
    success: function (data) {
      $('.js-overlay-thank-you').fadeIn();
      // $(this).find('input').val('');
      $('#mail-form').trigger('reset');
    }
  });


})

$('.js-close-thank-you').click(function () { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
  var popup = $('.popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut();
  }
});


