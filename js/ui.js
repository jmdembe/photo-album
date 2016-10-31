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

      $('nav').on('click', 'button', function nextImage(event) {
          event.stopPropagation();
          var $target = $(event.target);
          var previousImage = $(this).closest('li').prev();
          var nextImage = $(this).closest('li').next();

          if ($target.is('.previous')) {
              previousImage.toggleClass('zoomed');
          }

          if ($target.is ('.next')) {
              nextImage.toggleClass('zoomed');
          }


          // once you have the li... you can call .next() or .prev()
          // then what do you need to add to that new li?

      })

})();
