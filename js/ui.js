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
          var target = $(event.target);
          console.log("is this happening?");
      })

})();
