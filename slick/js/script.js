$(document).ready(function () {
  $('.sl').slick({
  	autoplaySpeed: 2000,
  	cssEase: 'ease-out',
  	dots: true,
  	arrows: false,
  	rows: 2,
  	slidesPerRow: 3,
  	responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 2
        }
      }
    ]	
  });
  $('.prev').click(function(){
    $('.sl').slick('slickPrev');
  });

  $('.next').click(function(){
    $('.sl').slick('slickNext');
  });
  if ($(window).width() < 376) {
        if($('.sl').hasClass('slick-initialized')) {
          $('.sl').slick('unslick');
        }
          $('.sl').slick({
              autoplay: false,
              infinite: true,
              speed: 300,
              dots: true,
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              cssEase: 'linear'
          });
      }
});