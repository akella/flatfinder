$(document).ready(function(){

    // cycle 
     $('.js-scroll-index').cycle({ 
        fx:     'fade',
        timeout: 5000,
        speed: 700
    });

    $(".select-city strong").click(function(){
        if ($(this).hasClass("active"))
            {
                $(this).next().hide();
                $(this).removeClass("active");
            }
        else {
                $(this).next().show();
                $(this).addClass("active");
             }
        return false;
    });
    // more
    $(".more-var").next().hide();
    $(".more-var").click(function(){
        $(this).slideUp("fast");
        $(this).next().slideDown("fast");
    });

    // select
    $(".select span").each(function(){
        $(this).text($(this).next().val());
    });
    
    $(".select select").change(function(){
        var val = $(this).val();
        $(this).prev().text(val);
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

    // fotorama gallery

});