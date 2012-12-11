$(document).ready(function(){
// cycle 
 $('.js-scroll-index').cycle({ 
    fx:     'fade',
    timeout: 5000,
    speed: 700
});

$(".more-var").next().hide();
$(".more-var").click(function(){
    $(this).slideUp("fast");
    $(this).next().slideDown("fast");
});

})