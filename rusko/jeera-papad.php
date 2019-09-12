<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('head.php'); ?>
</head>

<body class="blue-bg">
      <div class="header-rotate">
            <div class="bgBlack"></div>
      </div>
            <?php include('header.php'); ?>
      <div class="top-inside">
            <div class="container prod-wrap">
                  <div class="flex">
                        <div class="text-left">
                              <img src="images/text-left.png" alt="">
                        </div>
                        <div class="text-right">
                              <img src="images/pr-1.png" alt="">
                        </div>
                  </div>
            </div>
      </div>
      <div class="bottom-inside">
            <div class="container">
                  <div class="flex">
                        <div class="b-left">
                              <div class="avail">
                                    <h2>Available In</h2>
                                    <h3>Rs 10/- & Rs 5/- Pack</h3>
                              </div>
                              <div class="avai-txt">
                                    <h4>Jeera Papad Chips</h4>
                                    <h5>Crispy and delicious fried snacks for munching</h5>
                                    <div class="text">Made from wheat and rice flour, cumin and other mixed spices, this mini unique Jeera Papad come in a chatpata taste. You can enjoy this wonderful papad with your friends and family in fun & party time.
                                    </div>
                              </div>
                        </div>
                        <div class="b-right">
                              <div class="pro-mimg">
                                    <img src="images/chips-bowl.png" alt="">
                              </div>      
                              <div class="ingra">
                                    <div class="ing-1 ing-sm"> <img src="images/elaichi.png" alt=""></div>
                                    <div class="ing-2 ing-sm"> <img src="images/elaichi-1.png" alt=""></div>
                                    <div class="ing-3 ing-sm"> <img src="images/elaichi-2.png" alt=""></div>
                                    <div class="ing-4 ing-sm"> <img src="images/jeera-papad-1.png" alt=""></div>
                                    <div class="ing-5 ing-sm"> <img src="images/jeera-papad-2.png" alt=""></div>
                                    <div class="ing-6 ing-sm"> <img src="images/kali-mirch.png" alt=""></div>
                                    <div class="ing-7 ing-sm"> <img src="images/kali-mirch-1.png" alt=""></div>
                                    <div class="ing-8 ing-sm"> <img src="images/kali-mirch-clove.png" alt=""></div>
                                    <div class="ing-9 ing-sm"> <img src="images/kali-mirch-clove-1.png" alt=""></div>
                                    <div class="ing-10 ing-sm"> <img src="images/red-chilli.png" alt=""></div>
                                    <div class="ing-11 ing-sm"> <img src="images/red-chilli-1.png" alt=""></div>
                                    <div class="ing-12 ing-sm"> <img src="images/tomato.png" alt=""></div>
                                    <div class="ing-13 ing-sm"> <img src="images/tomato-1.png" alt=""></div>
                                    
                                    <!-- <img src="images/ingr.png" alt=""> -->
                              </div>
                        </div>
                  </div>
            </div>
      </div>
     <?php include('footer.php'); ?>
</body>

<!-- <script>
      $(document).ready(function(){          
            var h = $(window).height();
            //var h = 600;
            var hh = $("header").height();
            h = h - hh;
            //$(".top-inside").height(h);
            var fpt = $("footer").offset().top;
            fpt = fpt - h - 180;
            //alert(fpt) 
            $(window).scroll(function (event) {
                  var scroll = $(window).scrollTop();
                  $(".top-inside .text-right").css('top' , scroll);
                  if(scroll > fpt)
                  {
                        $(".top-inside .text-right").css({"position":"absolute" , "top":fpt });
                        $(".b-right").addClass('active');
                  }
                  else{
                        $(".b-right").removeClass("active");
                  }                 
            });              
      })

</script> -->

</html>