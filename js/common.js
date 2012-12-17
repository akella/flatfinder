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

    // jquery ui-clider
    // filter time
    $(function() {
        $( "#slider-time" ).slider({
            range: true,
            min: 10,
            max: 180,
            values: [ 0, 60 ],
            slide: function( event, ui ) {
                $( "#filt_time" ).val( "от " + ui.values[ 0 ] + ' минут' + " - до " + ui.values[ 1 ] + ' минут');
            }
        });
        $( "#filt_time" ).val( "от " + $( "#slider-time" ).slider( "values", 0 ) + ' минут' +
            " - до " + $( "#slider-time" ).slider( "values", 1 ) + ' минут');
    });
    // filter term
    $(function() {
        $( "#slider-term" ).slider({
            range: true,
            min: 2,
            max: 30,
            values: [ 0, 24 ],
            slide: function( event, ui ) {
                $( "#filt_term" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] + ' месяцев' );
            }
        });
        $( "#filt_term" ).val( "от " + $( "#slider-term" ).slider( "values", 0 ) +
            " - до " + $( "#slider-term" ).slider( "values", 1 ) + ' месяцев' );
    });
    // filter price
    $(function() {
        $( "#slider-price" ).slider({
            range: true,
            min: 210,
            max: 48000,
            values: [ 0, 32000 ],
            slide: function( event, ui ) {
                $( "#filt_price" ).val( "от " + ui.values[ 0 ] + ' р' + " - до " + ui.values[ 1 ] + ' р' );
            }
        });
        $( "#filt_price" ).val( "от " + $( "#slider-price" ).slider( "values", 0 ) + ' р' +
            " - до " + $( "#slider-price" ).slider( "values", 1 ) + ' р' );
    });
    // filter price
    $(function() {
        $( "#slider-type" ).slider({
            range: true,
            min: 1,
            max: 6,
            values: [ 0, 2 ],
            slide: function( event, ui ) {
                $( "#filt_type" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] + ' комнат' );
            }
        });
        $( "#filt_type" ).val( "от " + $( "#slider-type" ).slider( "values", 0 ) +
            " - до " + $( "#slider-type" ).slider( "values", 1 ) + ' комнат' );
    });

});