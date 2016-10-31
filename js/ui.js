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
          console.log("HELLO.");

      })

})();
