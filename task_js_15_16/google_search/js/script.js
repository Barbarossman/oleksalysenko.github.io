'use strict';

$(function() {

  var $form = $('#search-form'),
    $input = $('#query');

  $form.on('submit', googleSearch);
  $form.on('submit', emptyResults);

  $input.onEnter(googleSearch);
  $input.onEnter(emptyResults);

});

// callback function
function googleCallback (func, data) {
  window[func](data);
}

function googleSearch(settings) {
  var defaults = $.extend({
      key: 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg',
      rsz: 'large'    // A value indicates a large result set or 8 results
    }, settings);

  defaults.query = encodeURIComponent($('#query').val());

  var apiURL = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=' + defaults.key + '&rsz=' + defaults.rsz + '&q=' + defaults.query + '&callback=googleCallback&context=?';

  $.ajax({
    url: apiURL,
    dataType: 'jsonp',
    success: function(data) {

      var $ul = $('<ul></ul>'),
        $container = $('.result-container'),
        $stats = '<div class="result-stats">About ' + data.cursor.resultCount + ' results (' + data.cursor.searchResultTime + ' seconds)</div>';

      $container.html($stats).append($ul).hide().fadeIn();


      $.each(data.results, function(i, val) {
        var $li = $('<li></li>'),
          html = '<h3><a href="' + val.url + '">' + val.title + '</a></h3><cite>' + val.url + '</cite><span>' + val.content + '</span>';

        $ul.append($li);
        $li.html(html);
      });
    }
  });

  return false;
}

function emptyResults() {
  $('.result-container').empty();
}

// Event listener on enter press
$.fn.onEnter = function(fn) {
  var $this = $(this);

  return this.each(function() {
    $this.bind('enterPress', fn);
    $this.keyup(function(e){

      if (e.keyCode == 13) {
        $this.trigger("enterPress");
      }
    });
  });
};