$('#sendMail').on('click', function () {
  var name = $('#user-name').val();
  var phone = $('#phone-mask').val();

  if (name.length < 2) {
    smoke.alert('введите имя');
    return false;
  } else if (name.length != name.match(/[A-Z А-Я Ї І Є]/gi).length) {
    smoke.alert('Имя не может содержать цифры или символы');
    return false;
  } else if (phone.length < 18) {
    smoke.alert('введите номер телефона');
    return false;
  }

  $.ajax({
    url: '../form/mail.php',
    type: 'POST',
    cache: false,
    data: { name: name, phone: phone },
    dataType: 'html',
    beforeSend: function () {
      $('#sendMail').prop('disabled', true);
    },
    success: function (data) {
      $('.js-overlay-thank-you').fadeIn();
      // $(this).find('input').val('');
      $('#sendMail').prop('disabled', false);
      $('#mail-form').trigger('reset');
    },
  });

  $.ajax({
    url: '../form/telegram.php',
    type: 'POST',
    cache: false,
    data: { name: name, phone: phone },
    dataType: 'html',
    beforeSend: function () {
      $('#sendMail').prop('disabled', true);
    },

    success: function (data) {
      $('.js-overlay-thank-you').fadeIn();
      // $(this).find('input').val('');
      $('#sendMail').prop('disabled', false);
      $('#mail-form').trigger('reset');
    },
  });
});

$('.js-close-thank-you').click(function () {
  // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
  // location.reload();
});

$(document).mouseup(function (e) {
  // по клику вне попапа
  var popup = $('.popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut();
  }
});
