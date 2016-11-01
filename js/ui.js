(function (){
    'use strict';

    $('main')
        .find('.photos')
            .on('click', 'li', function zoomImage (event) {
                $('main').toggleClass('zooming')
                $(this)
                  .toggleClass('zoomed')
                  .append($('nav'));
            })

      $('nav').on('click', 'button', function imageToggle(event) {
          event.stopPropagation();
          var $target = $(event.target);
          var currentElement = $(this).closest('li');
          var previousImage = currentElement.prev();
          var nextImage = currentElement.next();

          if ($target.is('.previous') && !currentElement.is(':first-child')) {
              currentElement.removeClass('zoomed')
              previousImage
                  .addClass('zoomed')
                  .append($('nav'));
          }

          if ($target.is('.next') && !currentElement.is(':last-child')) {
              currentElement.removeClass('zoomed');
              nextImage
                .toggleClass('zoomed')
                .append($('nav'));
          }

          if (currentElement.is(':first-child') || currentElement.is(':last-child')) {
              currentElement
                  .removeClass('zoomed');
              $('main')
                  .removeClass('zooming');

          }

      })

})();
