$(function(){
  $(".navi-icon").on("click", function(){
    var rightVal = 0;
    if($(this).hasClass("open")) {
        rightVal = -200;
        $(this).removeClass("open");
    } else {
        $(this).addClass("open");
    }

    $(".header-navi").stop().animate({
        right: rightVal
    }, 200);
  })

  $(window).on('load scroll', function (){
    var box = $('.filter-off');
    var animated = 'animated';
    
    box.each(function(){   
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  
  });
});