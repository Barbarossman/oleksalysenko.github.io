'use strict';

$(function() {

  $('.tab-link').click(function(e) {
    var $this = $(this),
      $currentTab = $this.attr('href');

    if (!($this).parent().hasClass('active')) {

      $($this).parent().siblings('.active').removeClass('active');
      $($this).parents('.tabs').siblings('.tab-content').find('.active').removeClass('active').hide();

      $($this).parent().addClass('active');
      $($currentTab).addClass('active').hide().fadeIn(500);
    }

    e.preventDefault();
  });

  $('.form-control').hover(
    function() {
      $(this).siblings('.tooltip').fadeTo(500, 1);

    }, function() {
      $(this).siblings('.tooltip').fadeTo(500, 0);
  });
});
