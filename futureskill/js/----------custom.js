  $(document).on('ready', function () {

    $('.client-list').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        // responsive: [
        //     {
        //       breakpoint: 1024,
        //       settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     },
        //     {
        //       breakpoint: 767,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 2
        //       }
        //     },
        //     {
        //       breakpoint: 600,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //       }
        //     },
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        //   ]
    });

    // Custome scrollebar 
    $(".content").mCustomScrollbar();

    // blog sidebar accordian
    $('.year-title').on("click", function () {
        $(this).siblings('.year-content').slideToggle();
        $(this).toggleClass('active');
        $(".year-title").not(this).siblings('.year-content').slideUp();        
        $('.year-title').not(this).removeClass('active');
  
    });

    $('.month-title').on("click", function () {
        $(this).siblings('.month-content').slideToggle();
        $(this).toggleClass('active');
        $(".month-title").not(this).siblings('.month-content').slideUp();
        $('.month-title ').not(this).removeClass('active');
    });

    // case study popup 
    $('.downloadPdf-btn').on('click',function(){
        $('.popUp-sec').addClass('active');
        $('body').addClass('scrollOff');
    });
    $('.close-btn').on('click',function(){
        $('.popUp-sec').removeClass('active');
        $('body').removeClass('scrollOff');
    });

    //Gallery - fancybox initialization
    $(".photo-gallery-sec li > a").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
      });
      $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });      

    // Scroll to top 
    $(function() { $(".scrollToTop ").on('click', function() {
         $("HTML, BODY").animate({ scrollTop: 0 }, 1000); }); 
        });

    //fixed header 
    $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 150) {
      $(".header").addClass("compact");
    }
    else {
      $(".header").removeClass("compact");
    }
  });
});