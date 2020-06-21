$("#sendMail").on("click", function () {
  var phone = $('#phone-mask').val();
  var name = $('#user-name').val();

  if (phone == "") {
    $("#errorMess").text("Введите телефон");
    return false;
  } else if (name == "") {
    $("#errorMess").text("Введите имя");
    return false;
  }

  $("#errorMess").text("");

  $.ajax({

    url: '../form/mail.php',
    type: 'POST',
    cache: false,
    data: { 'phone': phone, 'name': name },
    dataType: 'html',
    beforeSend: function () {

      $("#sendMail").prop("disabled", true);

      console.log
    },
    success: function (data) {
      if (data == false)
        alert("были ошибки");
      else
        $('.js-overlay-thank-you').fadeIn();
      $('#mail-form').trigger('reset');

      console.log
    }

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

});