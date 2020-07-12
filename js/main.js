$(document).ready(function () {
  $(".testimonial_carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop:true,
    margin:30,
    navText: ['<i class="fa fa-long-arrow-left"> </i>', '<i class="fa fa-long-arrow-right"> </i>'],
    autoplay: true,
  });
});