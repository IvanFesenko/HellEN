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
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 7,
        },
      },
    ],
    mobileFirst: true,
  });

  $('.sliderbig').slick({
    asNavFor: '.slider',
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: { arrows: true },
      },
    ],
    mobileFirst: true,
  });
});
