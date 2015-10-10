$(document).ready(function(){
  $('.bonus').one("click", function() {
    $('.easter-egg-1').css({display : 'list-item'});
    $('.easter-egg-1').animate({
        opacity : 1,
        height  : '25px',
        padding : '2px 0'
      },
      1000,
      "easeOutQuart"
    );
  });

  var big = 19;
  $('.easter-egg-2').click(function(){
    $('.easter-egg-1').css({ fontSize : big++ + 'px'})
  });

  console.log("What are you doing over here? Get out of here.");
});
