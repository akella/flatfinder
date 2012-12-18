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
        $(".popup_enter").fadeOut();
    });
    $(".enter").click(function(){
        $(".popup_enter").fadeIn();
        $(".popup-bg").fadeIn();
    });
    // show/hide popup add comment
    $(".popup-bg").click(function(){
        $(this).fadeOut();
        $(".popup_comm").fadeOut();
    });
    $(".js-add-comment").click(function(){
        $(".popup_comm").fadeIn();
        $(".popup-bg").fadeIn();
    });
    // sidebar accordion 
    // $(".js-extend").hide();
    // $(".filter-s__title i").addClass("icon_arr-b");
    // $(".filter-s__title").click(function(){
    //     if ($(this).hasClass("active")) {
    //         $(this).removeClass("active");
    //         $(this).next().slideUp("fast");
    //         $(this).children("i").removeClass("icon_arr-t");
    //     } 
    //     else{
    //         $(this).addClass("active");
    //         $(this).next().slideDown("fast");
    //         $(this).children("i").addClass("icon_arr-t");
    //     };
    // });

    // --------------------- TABS ---------------------------//
    // tab
    $(".tab-cont").hide();
    $(".tab-cont1").show();
    $(".tab li:first").addClass("active");
    $(".tab li").click(function(){
        $(".tab li").removeClass("active");
        $(this).addClass("active");
        $(".tab-cont").hide();
        $($(this).attr("data-tab")).show();
    });
    // tab button
    $(".tab-b-cont").hide();
    $(".tab-b-cont1").show();
    $(".tab-btn li:first").addClass("active");
    $(".tab-btn li").click(function(){
        $(".tab-btn li").removeClass("active");
        $(this).addClass("active");
        $(".tab-b-cont").hide();
        $($(this).attr("data-tab")).show();
    });
    // tab simple
    $(".tab-s-cont").hide();
    $(".tab-s-cont1").show();
    $(".tab-simple li:first").addClass("active");
    $(".tab-simple li").click(function(){
        $(".tab-simple li").removeClass("active");
        $(this).addClass("active");
        $(".tab-s-cont").hide();
        $($(this).attr("data-tab")).show();
    });
    // --------------- jquery ui-clider --------------------- //
    // filter time
    $(function() {
        $( "#slider-time" ).slider({
            range: true,
            min: 10,
            max: 180,
            values: [ 0, 60 ],
            slide: function( event, ui ) {
                $( "#filt_time" ).html( "<span>от</span> " + ui.values[ 0 ] + ' минут' + " <span>до</span> " + ui.values[ 1 ] + ' минут');
            }
        });
        $( "#filt_time" ).html( "<span>от</span> " + $( "#slider-time" ).slider( "values", 0 ) + ' минут' +
            " <span>до</span> " + $( "#slider-time" ).slider( "values", 1 ) + ' минут');
    });
    // filter term
    $(function() {
        $( "#slider-term" ).slider({
            range: true,
            min: 2,
            max: 30,
            values: [ 0, 24 ],
            slide: function( event, ui ) {
                $( "#filt_term" ).html( "<span>от</span> " + ui.values[ 0 ] + " <span>до</span> " + ui.values[ 1 ] + ' месяцев' );
            }
        });
        $( "#filt_term" ).html( "<span>от</span> " + $( "#slider-term" ).slider( "values", 0 ) +
            " <span>до</span> " + $( "#slider-term" ).slider( "values", 1 ) + ' месяцев' );
    });
    // filter price
    $(function() {
        $( "#slider-price" ).slider({
            range: true,
            min: 210,
            max: 48000,
            values: [ 0, 32000 ],
            slide: function( event, ui ) {
                $( "#filt_price" ).html( "<span>от</span> " + ui.values[ 0 ] + ' р' + " <span>до</span> " + ui.values[ 1 ] + ' р' );
            }
        });
        $( "#filt_price" ).html( "<span>от</span> " + $( "#slider-price" ).slider( "values", 0 ) + ' р' +
            " <span>до</span> " + $( "#slider-price" ).slider( "values", 1 ) + ' р' );
    });
    // filter price
    $(function() {
        $( "#slider-type" ).slider({
            range: true,
            min: 1,
            max: 6,
            values: [ 0, 2 ],
            slide: function( event, ui ) {
                $( "#filt_type" ).html( "<span>от</span> " + ui.values[ 0 ] + " <span>до</span> " + ui.values[ 1 ] + ' комнат' );
            }
        });
        $( "#filt_type" ).html( "<span>от</span> " + $( "#slider-type" ).slider( "values", 0 ) +
            " <span>до</span> " + $( "#slider-type" ).slider( "values", 1 ) + ' комнат' );
    });

});