$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});



});

$(window).scroll(function () {
    // set distance user needs to scroll before we fadeIn navbar
    if ($(this).scrollTop() > 600) {
        $('nav').css("background-color","#494D4B");
    } else {
        $('nav').css("background-color","transparent");
    }
});