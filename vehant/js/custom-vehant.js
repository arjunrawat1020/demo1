$(document).ready(function () {
  //$(".banner").height(h);
  $(window).scroll(function () {
    var sticky = $('.header'),
      scroll = $(window).scrollTop();
    //if (scroll >= 50) sticky.addClass('fixed');
    //  else sticky.removeClass('fixed');
    (scroll >= 50) ? sticky.addClass('fixed') : sticky.removeClass('fixed');
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 1000) {
      $('.feat-menu ul').detach().appendTo('.navigation ul li:first');
    }
    else if ($(window).width() > 1000) {
      $('.navigation ul li:first ul').detach().appendTo('.feat-menu');
    }
    // $('.navigation > ul').slicknav();
  })
  $('.fancybox').fancybox();
  $(".banner").owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  $('.clientsLogoList').owlCarousel({
    items: 9,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  $(".tes-slider").owlCarousel({
    items: 2,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  $(".par-right").owlCarousel({
    items: 4,
    margin: 0,
    nav: true,
    loop: true,
    dots: false,
    autoplay: false,
    mouseDrag: true,
  });
  /*About us page slider */
  $(".aboutSlider").owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  /*X-ray scanner slider */
  $(".k-scan-topSlide").owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  $(".fg-bottomSlide").owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });
  $('.new-data .innerSec ul').owlCarousel({
    items: 3,
    margin: 0,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    mouseDrag: true,
  });

  /*Navigation js */
  $('.header-right ul li a').on('click', function () {
    // $('.header-right ul li').removeClass('active');
    $(this).addClass('active');
  });
  // $(".header-right ul").on('click','>li a',function () {
  //   $(this).parent('li').addClass('selected').siblings().removeClass('selected');
  // });

  /*tabination */
  $('.tab-data .main-ul li').click(function () {
    var iD = $(this).attr('data-id');
    $('.tab-data .main-ul li').removeClass('active');
    $('.tab-container .content').removeClass('active');
    $(this).addClass('active');
    $('#' + iD).addClass('active');
  })
  $(".scroll-data").mCustomScrollbar();

  $(document).on("click", ".search img", function () {
    $(".search-div").toggle();
  })

  /*about us Page View More Btn */
  $(document).on('click', '#viewMoreBtn', function () {
    $('.secondRow').slideDown().css("display", "flex");
    $(this).attr('id', 'viewLessBtn').children('a').text('view less');
  });

  $(document).on('click', '#viewLessBtn', function () {
    $('.secondRow').slideUp();
    $(this).attr('id', 'viewMoreBtn').children('a').text('view all');
  });

  /*open popUP */
  $('.explore a').on('click', function () {
    $('.currOpenPopUp').fadeIn();
  });

  /*close popUP */
  $('.popCloseBtn').on('click', function () {
    $('.currOpenPopUp').fadeOut();
  });

  /*current opening popup accordian*/
  $(document).on('click', '.tab .head', function () {
    $('.content').slideUp().parents('.tab').removeClass('active');
    $(this).siblings('.content').slideDown().parents('.tab').addClass('active');
  });

  /*current opening file upload */
  $('.fileFront input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.fileFront b').text(fileName);
  });


  /*Research & technology Page sync slider */
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    centerPadding: '10px',
    focusOnSelect: true,
    cssEase: 'ease',
    focusOnSelect: true,
    easing: 'linear'
  });



  // $(document).on("click", ".nav-list li.health-and-medical-care", function () {
  //  $('.csrTab .main-ul li').trigger('click');
  //   // $(this).text("It works!");
  // });

  // $(document).ready(function () {
  //   $("a").trigger("click");
  // });
});