'use strict';

(function () {
  $(document).ready(function(){
    $('.portfolio__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'custom_paging',
      customPaging: function (slider, i) {
        return  (i + 1) + '  /  ' + slider.slideCount;
      }
    });
  });

  $(document).ready(function(){
    $('.consultants__list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });
})();
