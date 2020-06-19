function backToTop() {
  let button = $('.to-header-btn');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 100) {
      button.fadeOut();
    } else {
      button.fadeIn();
    }
  });

  button.on('click', e => {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 1000);
  });
}

backToTop();
