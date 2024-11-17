$(function(){
  
  $(window).on("scroll", function() {    
    var banner =  $(".floating-banner");
    var off = $('.info').offset();

    if ($(this).scrollTop() > off.top -600) {
      banner.fadeOut();
    } else {
      banner.fadeIn();
    }
  });  

}); 
