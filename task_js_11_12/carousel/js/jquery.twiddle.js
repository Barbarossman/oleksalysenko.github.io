'use strict';

(function ($) {
  $.fn.twiddle = function(options) {
    var defaults = $.extend({
        items: 3,
        marginRight: 10,
        speed: 500
      }, options),

      $this = $(this),
      $prev = $('.twiddle-left'),
      $next = $('.twiddle-right'),
      $item = $this.children(),
      viewportWidth = $this.parent().outerWidth(),
      itemWidth = (viewportWidth - defaults.marginRight * (defaults.items - 1)) / defaults.items,
      offset = itemWidth + defaults.marginRight,
      position = 0,
      current = 1;

    $item.css(
      {
        'width': itemWidth,
        'margin-right': defaults.marginRight
      }
    );

    $prev.on('click', function() {
      if (current !== 1) {
        $this.animate({left: position += offset}, defaults.speed, function() {
          --current;
        });
      }
    });

    $next.on('click', function() {
      if (current === $item.length - defaults.items + 1) {
        position = offset;
        current = 0;
      }

      $this.animate({left: position -= offset}, defaults.speed, function() {
        ++current;
      });
    });

  }
})(jQuery);