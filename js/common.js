$(document).ready(function(){

    // cycle 
     $('.js-scroll-index').cycle({ 
        fx:     'fade',
        timeout: 5000,
        speed: 700
    });

    // more
    $(".more-var").next().hide();
    $(".more-var").click(function(){
        $(this).slideUp("fast");
        $(this).next().slideDown("fast");
    });

    // show/hide popup enter
    $(".popup").hide();
    $(".popup-bg").hide();
    $(".popup-bg").click(function(){
        $(this).fadeOut();
        $(".popup").fadeOut();
    });
    $(".enter").click(function(){
        $(".popup_enter").fadeIn();
        $(".popup-bg").fadeIn();
    });

});