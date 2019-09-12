$(document).ready(function () {
      $('header nav ul.flex li').on('click', function () {
            // $('header nav ul.flex li');
            $(this).addClass('active').siblings('li').removeClass('active');
      })
      /* navigation*/
      $('.nav_btn').on('click', function () {
            $('header').toggleClass('active');
      });
      // $('li.has-child').on('click', function () {
      //       $('.submenu').toggleClass('show');
      // });
      $(document).click(function (event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest(" nav,.nav_btn").length) {
                  $("body").find("header").removeClass("active");
            }
      });
});


/*banner Animation */
$(document).ready(function () {
      const $slider = $("#homeSlider");
      $slider
            .on('init', () => {
                  mouseWheel($slider)
            })
            .slick({
                  dots: true,
                  vertical: false,
                  infinite: false,
                  draggable: false,
            })
      function mouseWheel($slider) {
            $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
      }
      function mouseWheelHandler(event) {
            event.preventDefault()
            const $slider = event.data.$slider
            const delta = event.originalEvent.deltaY
            if (delta > 0) {
                  $slider.slick('slickNext')
                  // alert('next');
            }
            else {

                  $slider.slick('slickPrev')
                  // alert('previous');
            }
      }

      if ($('.bannerSec .homeSlider .slick-slide').hasClass('slick-active')) {
            /*======================================for slide 1======================================*/
            // setTimeout(function () {  }, 100);
            $('.bannerSec .rusk-slide .chai-rusk').addClass('show');
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke').addClass('show'); }, 1000);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke').addClass('hide'); }, 3600);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke1').addClass('animate'); }, 1080);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke2').addClass('animate'); }, 1140);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke3').addClass('animate'); }, 2000);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke4').addClass('animate'); }, 2600);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke5').addClass('animate'); }, 3200);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke6').addClass('animate'); }, 3800);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke7').addClass('animate'); }, 4400);
            setTimeout(function () { $('.bannerSec .rusk-slide .smoke8').addClass('animate'); }, 5000);
            setTimeout(function () { $('.bannerSec .rusk-slide .grain, .bannerSec .rusk-slide .elaichi-bunch').addClass('show'); }, 1000);
            setTimeout(function () { $('.bannerSec .rusk-slide .crisp-tag').addClass('show'); }, 1200);
            setTimeout(function () { $('.bannerSec .rusk-slide .chai-grain').addClass('show'); }, 2800);
            setTimeout(function () { $('.bannerSec .rusk-slide .wheat').addClass('show'); }, 2800);
            setTimeout(function () { $('.bannerSec .rusk-slide .top-small-elaichi, .bannerSec .rusk-slide .top-elaichi, .bannerSec .rusk-slide .grain-elaichi, .bannerSec .rusk-slide .bottom-elaichi, .bannerSec .rusk-slide .elaichi1, .bannerSec .rusk-slide .elaichi2, .bannerSec .rusk-slide .elaichi3').addClass('show'); }, 3000);
            setTimeout(function () { $('.bannerSec .rusk-slide .quality-tag').addClass('show'); }, 3500);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-1').addClass('fadeUpText'); }, 3000);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-2').addClass('fadeUpText'); }, 3200);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-3').addClass('fadeUpText'); }, 3400);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-4').addClass('fadeUpText'); }, 3600);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-5').addClass('fadeUpText'); }, 3800);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-6').addClass('fadeUpText'); }, 4000);
            setTimeout(function () { $('.bannerSec .rusk-slide .text-7').addClass('fadeUpText'); }, 4200);

            /*======================================for slide 2====================================== */
            setTimeout(function () { $('.bannerSec .popcorn-slide .popcorn-bucket').addClass('show'); }, 200);
            setTimeout(function () { $('.bannerSec .popcorn-slide .popcorn-text').addClass('show'); }, 1100);
            setTimeout(function () { $('.bannerSec .popcorn-slide .popcorn-small-text').addClass('show'); }, 1400);
            setTimeout(function () { $('.bannerSec .popcorn-slide .popcorn1, .bannerSec .popcorn-slide .popcorn2, .bannerSec .popcorn-slide .popcorn3,.bannerSec .popcorn-slide .popcorn4').addClass('show'); }, 2000);
            setTimeout(function () { $('.bannerSec .popcorn-slide .red-chilli, .bannerSec .popcorn-slide .red-chilli1, .bannerSec .popcorn-slide .red-chilli2, .bannerSec .popcorn-slide .tomato,.bannerSec .popcorn-slide .tomato-1,.bannerSec .popcorn-slide .tomato-2,.bannerSec .popcorn-slide .tomato-3, .bannerSec .popcorn-slide .popcorn5,.bannerSec .popcorn-slide .popcorn6').addClass('show'); }, 2000);
            setTimeout(function () { $('.bannerSec .popcorn-slide .corn').addClass('show'); }, 3000);
            setTimeout(function () { $('.bannerSec .popcorn-slide .butter').addClass('show'); }, 4000);

            /*======================================for slide 3====================================== */
            setTimeout(function () { $('.bannerSec .pasta-slide .pasta-with-bowl,.bannerSec .pasta-slide .jeera-papad-with-bowl,.bannerSec .pasta-slide .soya-katori-with-bowl,.bannerSec .pasta-slide .jeera-1,.bannerSec .pasta-slide .jeera-2,.bannerSec .pasta-slide .jeera-3,.bannerSec .pasta-slide .jeera-4,.bannerSec .pasta-slide .jeera-5,.bannerSec .pasta-slide .jeera-6,.bannerSec .pasta-slide .jeera-7,.bannerSec .pasta-slide .jeera-8,.bannerSec .pasta-slide .jeera-9,.bannerSec .pasta-slide .jeera-10,.bannerSec .pasta-slide .jeera-11,.bannerSec .pasta-slide .jeera-12,.bannerSec .pasta-slide .jeera-13,.bannerSec .pasta-slide .jeera-14,.bannerSec .pasta-slide .jeera-15,.bannerSec .pasta-slide .jeera-16,.bannerSec .pasta-slide .jeera-17,.bannerSec .pasta-slide .jeera-18,.bannerSec .pasta-slide .jeera-19,.bannerSec .pasta-slide .jeera-20,.bannerSec .pasta-slide .jeera-21').addClass('show'); }, 1000);

            setTimeout(function () { $('.bannerSec .pasta-slide .jeera-papad-1, .bannerSec .pasta-slide .jeera-papad-2, .bannerSec .pasta-slide .jeera-papad-3, .bannerSec .pasta-slide .soya-katori--1, .bannerSec .pasta-slide .soya-katori--2,.bannerSec .pasta-slide  .pasta-1,.bannerSec .pasta-slide  .pasta-2').addClass('show'); }, 3000);


            setTimeout(function () { $('.bannerSec .pasta-slide .pasta-text,.bannerSec .pasta-slide .jeera-papad-text,.bannerSec .pasta-slide .soya-katori-text').addClass('show'); }, 2500);
            setTimeout(function () { $('.bannerSec .pasta-slide .kali-mirch-1, .bannerSec .pasta-slide .kali-mirch-3, .bannerSec .pasta-slide .kali-mirch-4,.bannerSec .pasta-slide .kali-mirch-11, .bannerSec .pasta-slide .tomato, .bannerSec .pasta-slide .red-chilli-1').addClass('show'); }, 3000);
            setTimeout(function () { $('.bannerSec .pasta-slide .kali-mirch-2, .bannerSec .pasta-slide .kali-mirch-6, .bannerSec .pasta-slide .kali-mirch-5,.bannerSec .pasta-slide .kali-mirch-7, .bannerSec .pasta-slide .red-chilli-3').addClass('show'); }, 3000);
            setTimeout(function () { $('.bannerSec .pasta-slide .kali-mirch-8, .bannerSec .pasta-slide .kali-mirch-9,.bannerSec .pasta-slide .kali-mirch-12 ,.bannerSec .pasta-slide .kali-mirch-10,.bannerSec .pasta-slide .kali-mirch-11 ,.bannerSec .pasta-slide .red-chilli-2 ,.bannerSec .pasta-slide .tomato-2, .bannerSec .pasta-slide .tomat-3,.bannerSec .pasta-slide .wheat,.bannerSec .pasta-slide .tomato-3').addClass('show'); }, 3000);
      }
      else {
            // alert('not active');
      }

})
$(document).ready(function () {
      var h = $(window).height();
      //var h = 600;
      // alert(h)
      var hh = $("header").height();
      h = h - hh;
 
      //$(".top-inside").height(h);
      var fpt = $("footer").offset().top;
      fpt = fpt - h ;
      // alert(fpt) 
      $(window).scroll(function (event) {
            // alert();
            var scroll = $(window).scrollTop();
            $(".top-inside .text-right").css('top', scroll);
            if (scroll > fpt) {
                  $(".top-inside .text-right").css({ "position": "absolute", "top": fpt });
                  $(".b-right").addClass('active');
            }
            else {
                  $(".b-right").removeClass("active");
            }
      });



})
/*banner dots navigation */
$(document).ready(function () {
      $('.homeSlider.slick-dotted .slick-dots li:eq(0) ').addClass('suji-rusk').append('<span class="slide-nav-title">suji-rusk</span>');
      $('.homeSlider.slick-dotted .slick-dots li:eq(1) ').addClass('pop-corn').append('<span class="slide-nav-title">pop corn</span>');
      $('.homeSlider.slick-dotted .slick-dots li:eq(2) ').addClass('snacks').append('<span class="slide-nav-title">snacks</span>');

      /*media slider */
      $('.proSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            centerPadding: 100,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
      });
      /*testimonial slider */
      $('.testiSlider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            centerPadding: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
      });

      setTimeout(function () {
            $('body').addClass('loaded');
      },300);

})



