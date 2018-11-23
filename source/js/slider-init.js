'use strict';

(function () {
  $(document).ready(function(){
    $('.portfolio__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      dots: true,
      dotsClass: 'custom_paging',
      customPaging: function (slider, i) {
          return  (i + 1) + '  /  ' + slider.slideCount;
      }
    });
  });
})();
