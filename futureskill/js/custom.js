window.onload= function(){
    $(".loader").hide();
}
$(document).ready(function(){

    $("#email , #emails , #emailjoin").keyup(function(){
        $(".er").removeClass("active");
    })

    if ($(window).width() < 767) {
        $('.home-banner > ul > li:eq(0) > img').attr('src','img/banner-mobile-5.jpg');
        $('.home-banner > ul > li:eq(1) > img').attr('src','img/banner-mobile-1.jpg');
        $('.home-banner > ul > li:eq(2) > img').attr('src','img/banner-mobile-2.jpg');
        $('.home-banner > ul > li:eq(3) > img').attr('src','img/banner-mobile-3.jpg');
        $('.home-banner > ul > li:eq(4) > img').attr('src','img/banner-mobile-4.jpg');
    }
    else if ($(window).width() > 767) {
        $('.home-banner > ul > li:eq(0) > img').attr('src','img/banner-5.jpg');
        $('.home-banner > ul > li:eq(1) > img').attr('src','img/banner-1.jpg');
        $('.home-banner > ul > li:eq(2) > img').attr('src','img/banner-2.jpg');
        $('.home-banner > ul > li:eq(3) > img').attr('src','img/banner-3.jpg');
        $('.home-banner > ul > li:eq(4) > img').attr('src','img/banner-4.jpg');
    }
    $('.home-banner > ul').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
    });
})
$(window).on('load', function () {
    $('.workClients').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.client-list').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3, 
                    autoplay: true,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    });

});

$(document).on('ready', function () {

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
    $('.downloadPdf-btn').on('click', function () {
        $('#caseStudyForm').addClass('active');
        $('body').addClass('scrollOff');
    });
    $('.close-btn').on('click', function () {
        $('.popUp-sec').removeClass('active');
        $('body').removeClass('scrollOff');
    });

    // How can you join form
    $('#joinForm, .intrestedJoinForm').on('click', function () {
        $('#joinPopupForm').addClass('active');
        $('body').addClass('scrollOff');
        $(".thankyou-message").hide();
        $('.er').removeClass('active');

    });
    
    $('#contantForm').on('click', function () {
        $('#contactPopupForm').addClass('active');
        $('body').addClass('scrollOff');
        $(".thankyou-message").hide();
        $('.er').removeClass('active');
    });
    $('.close-btn').on('click', function () {
        $('#joinPopupForm').removeClass('active');
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
        youtube: {
            controls: 0,
            showinfo: 0
        }
    });

    // Scroll to top 
    $(function () {
        $(".scrollToTop ").on('click', function () {
            $("HTML, BODY").animate({ scrollTop: 0 }, 1000);
        });
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



    // hamburger close btn
    if ($(window).width() < 1025) {
        $('.header .nav').prepend("<span class='navCloseBtn'><img src='img/close.png' alt='close btn'/></span>")
        $('li.has-child ').prepend('<span class="navArrow"><img src="img/down-arrow.png"></span>');
    }
    $('.hamburger').on('click', function () {
        $('.nav').addClass('show');
    });
    $('.navCloseBtn').on('click', function () {
        $('.nav').removeClass('show');
    });

    $(".news-list li .date").each(function () {
        var a = $(this).text();
         //alert(a);
        //var data =$('#date').text();
        // console.log('value of variable a : ' + a);
        var arr = a.split('-');
        // alert(arr);
        console.log('value of variable array : ' + arr);
        var b = a[0];
        var c = a[1];
        var z = a[4];
        console.log(z);
        if (c == "Jan") {
            c = 1;
        } else if (c == "Feb") {
            c = 2;
        } else if (c == "Mar") {
            c = 3;
        } else if (c == "Apr") {
            c = 4;
        } else if (c == "May") {
            c = 5;
        } else if (c == "Jun") {
            c = 6;
        } else if (c == "Jul") {
            c = 7;
        } else if (c == "Aug") {
            c = 8;
        } else if (c == "Sep") {
            c = 9;
        } else if (c == "Oct") {
            c = 10;
        } else if (c == "Nov") {
            c = 11;
        } else if (c == "Dec") {
            c = 12;
        }
        var d = arr[2];
        //alert(d);
        // var d = a[2];
        $(this).addClass(d + "-" + c);
        $(this).addClass(d + "-0");
        $(this).addClass("0-" + c);
        //alert(b);
    });
    $(".filter-button").click(function () {
        var year = $("#ddlYear-notice").val();
        var monty = $("#ddlMonth-notice").val();
        var show = year + "-" + monty;
        //alert(show);
        $(".news-list li").hide();
        $(".news-list li." + show).show();
        if (show == "0-0") {
            $(".news-list li").show();
        }
        var acle = $(".news-list li:visible").length
        if (acle < 1) {
            $(".show-error").show();
        } else {
            $(".show-error").hide();
        }
    });

    $('.gateway-outer .video iframe').hide();
    $('.gateway-outer .video img, .gateway-outer .video .play').click(function(){
        $('.gateway-outer .video img').hide();
        $('.gateway-outer .video .play').hide();
        $('.gateway-outer .video iframe').fadeIn();
    });

});