
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 169) {
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
arrows: false,
fluid: true,
});
    });

