$(function() {

  // jCarousel init
  $('.jcarousel').jcarousel();

  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '" class="carousel-control"></a>';
    }
  });


  // jCarousel pagination settings
  $('.carousel-control').click(function() {
    var $this = $(this);
    $this.siblings('a.active').removeClass('active');
    $this.addClass('active');
  });


  // Dropdown menu with slide effect using jquery
  $('.dropdown').hover(
    function() {
      $(this).children('.sub-dropdown').slideDown(200);
    }, 
    function() {
      $(this).children('.sub-dropdown').slideUp(200);
    }
  );

  // jQuery color plugin init
  var $subDropdown = $('.sub-dropdown');
  $subDropdown.mouseenter(function() {
    $(this).animate({
      backgroundColor: 'rgba(32,32,32,1)'
    }, 800);
  });

  $($subDropdown).mouseleave(function() {
    $(this).animate({
      backgroundColor: 'rgba(32,32,32,.6)'
    }, 400);
  });

  // Dynamically created select options
  var i,
    j,
    $year = $('#year'),
    $month = $('#month'),
    $day = $('#day'),
    minAge = 18,
    maxAge = 100,
    currentYear = new Date().getFullYear(),
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  for (i = minAge; i <= maxAge; i++){
  var year = currentYear - i;
    $year.append($('<option />').val(year).html(year));
  }

  for (j = 0; j < months.length; j++) {
    $month.append($('<option />').val(j+1).html(months[j]))
  }

  for (i = 1; i <= 31; i++) {
    $day.append($('<option />').val(i).html(i))
  }

  // select2 init
  $year.select2({
    placeholder: 'Year',
    minimumResultsForSearch: Infinity
  });

  $month.select2({
    placeholder: 'Month',
    minimumResultsForSearch: Infinity
  });

  $day.select2({
    placeholder: 'Day',
    minimumResultsForSearch: Infinity
  });

  // Custom checkboxes using jquery
  var $checkbox = $('.checkbox');

  $checkbox.click(function() {
    changeState($(this));
  });

  $checkbox.each(function() {
    setState($(this));
  });

  function changeState(el) {
    var element = el,
      input = el.find('input').eq(0);

    if (input.is(':checked')) {
      element.css('background-position', '-60px 0');
      input.prop('checked', false);
    } else {
      element.css('background-position', '-40px 0');
      input.prop('checked', true);
    }
  }
  
  function setState(el) {
    var element = el,
      input = el.find('input').eq(0);

    if (input.prop('checked')) {
      element.css('background-position', '-40px 0');
    } else if (input.prop('disabled')) {
      element.css({'background-position': '-80px 0', 'pointer-events': 'none'});
    } else {
      element.css('background-position', '-60px 0');
    }
  }
});