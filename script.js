var main = function() {
  $('.day').click(function(){
    $('.hourly').toggle();
    $('.weekday').find('span').toggleClass('glyphicon-minus');
  });
};

$(document).ready(main);