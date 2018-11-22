'use strict';

(function () {
  $(document).ready(function(){
    $('.slider__list').slick({
      fade: true,
      dots: true,
      speed: 500
    });
  });

  $(document).ready(function(){
    $('.team__list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.clients__list').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1139,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.reviews__list').slick({
      speed: 500,
      adaptiveHeight: true,
      dots: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false
          }
        }
      ]
    });
  });

  let authorTrigger = document.querySelector('.advanced__selector--author');
  let formatTrigger = document.querySelector('.advanced__selector--format');
  let themeTrigger = document.querySelector('.advanced__selector--theme');
  let pickerTrigger = document.querySelector('.advanced__selector--start');
  let start = document.querySelector('.advanced__date-start');
  let end = document.querySelector('.advanced__date-end');

  if (authorTrigger) {
    function showAuthors () {
      $('.advanced__list--author').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
      authorTrigger.removeEventListener('click', showAuthors);
    }

    function showFormats () {
      $('.advanced__list--format').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      formatTrigger.removeEventListener('click', showFormats);
    }

    function showThemes () {
      $('.advanced__list--theme').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
      themeTrigger.removeEventListener('click', showThemes);
    }

    let picker = document.querySelector('.advanced__datepicker');

    function showPicker () {
      pickmeup('.advanced__datepicker', {
        flat  : true,
        mode  : 'range',
        prev: '',
        next: ''
      });
      pickerTrigger.removeEventListener('click', showPicker);

      picker.addEventListener('pickmeup-change', function (e) {
        start.value = e.detail.formatted_date[0];
        end.value = e.detail.formatted_date[1];
      })
    }

    authorTrigger.addEventListener('click', showAuthors);
    if (formatTrigger) {
      formatTrigger.addEventListener('click', showFormats);
    }
    themeTrigger.addEventListener('click', showThemes);
    pickerTrigger.addEventListener('click', showPicker);
  }

  if (document.querySelector('.authors')) {
    $(document).ready(function(){
      let letters = document.querySelectorAll('.authors__letter');

      $('.authors__alphabet').slick({
        fade: true,
        dots: true,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
        customPaging: function(slider, i) {
          return $('<button type="button" />').text(letters[i].dataset.letter);
        },
        appendDots: $('.authors__paginator')
      });

      let authorsArea = document.querySelector('.authors');
      let dotButtons = authorsArea.querySelectorAll('.authors .slick-dots button');
      let dotElements = authorsArea.querySelectorAll('.authors .slick-dots li');
      let authors = authorsArea.querySelectorAll('.authors__list');

      authors.forEach((item, i) => {
        if (item.children.length === 0) {
          dotButtons[i].style.color = 'grey';
          dotElements[i].style.pointerEvents = 'none';
        }
      });
    });
  }

})();
