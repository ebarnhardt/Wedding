
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 550) {
            $('.nav').addClass('nav-scrolled');
        }
        else {
            $('.nav').removeClass('nav-scrolled');
        }
    });
});


    jQuery(document).ready(function($) {
      $('.my-slider').unslider({
dots: true,
arrows: true
});
    });

