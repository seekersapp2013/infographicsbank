$tooltip = $(".tooltip");

  $('.map a').hover(function() {
    
    $(this).attr("class", "enabled heyo");
    $tooltip.addClass('active');
    $tooltip.html($(this).children().attr('title'));
  }, function() {
    $tooltip.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $tooltip.css({
    left:  e.pageX,
    top:   e.pageY - 50
  });
  
});