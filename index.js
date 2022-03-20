$(function() {


    let header = $("#header");
    let headerH = $("#headerh").innerHeight();
    let scrollOfSet = 0;


        $(window).on("scroll", function() {

            
            scrollOfSet = $(this).scrollTop();
            
            if (scrollOfSet >= headerH ) {
                header.addClass("fixed");
            }else {
                header.removeClass("fixed");
            }
        });


});


$("#nav-burger").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#menu").toggleClass("active");



});