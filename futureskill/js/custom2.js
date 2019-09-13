$(document).on("click", 'li.has-child > .navArrow', function () {
    $(this).siblings('.sub-menu').slideToggle();
    $(this).toggleClass('rotate');
    $('.navArrow').not(this).siblings('.sub-menu').slideUp();
    $('.navArrow').not(this).removeClass('rotate');
});
$(window).load(function(){
    $('.nav li.has-child li > a').on('click',function(){
        // alert();
        $('.nav').removeClass('show');
    });
});

