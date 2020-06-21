$(function () {
  $('body').on('click', '[href*="#"]', function (e) {
    var fixed_offset = '';
    $('html,body')
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 400);
    e.preventDefault();
  });
});
