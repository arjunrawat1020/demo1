<?php include('head.php'); ?>
<script>
window.onload= function(){
    $(".loader").hide();
}
</script>
<div class="loader"><img src="img/loader.gif" alt=""></div>
<?php include('navigation.php'); ?>
<section class="home-banner">
    <ul>
        <li>
            <img src="img/banner-5.jpg" alt="" height="400px" width="1366px" class="home-banner-bg">
            <div class="wrapper blue-div">
                <div class="banner-content-blue">
                    <div class="banner-heading"><span>NASSCOM FutureSkills</span><img src="img/banner-heading.png" alt="Curate-a-Thon"></div>
                    <div class="banner-sub-heading">If content is your kingdom, here’s your chance to be its ruler</div>
                    <p>Calling all Cyber Security practitioners & experts to participate and translate their knowledge to curate open-source content for IT professionals on Cybersecurity.</p>
                </div>
                <div class="banner-content-2">
                    <div class="banner-heading">Win Cash Prizes worth INR 225,000 !</div>
                    <div class="banner-list">
                        <ul>
                            <li><img src="img/calender.png" alt="Calender"><span>30<sup>th</sup> August, 2019</span></li>
                            <li><img src="img/venue.png" alt="Venue"><span>NASSCOM 10K Warehouse, Domlur Bangalore</span></li>
                        </ul>
                    </div>
                    <div class="register"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfujftMSDPLVLhcVpT9ShTVEc3HIp9-6mw2OIsHlzR74WM7MQ/viewform?vc=0&c=0&w=1" target="_blank">Register Now</a></div>
                </div>
            </div>
        </li>
        <li>
            <img src="img/banner-1.jpg" alt="" height="400px" width="1366px" class="home-banner-bg">
            <div class="wrapper">
                <div class="banner-content">
                    <div class="banner-heading"><span>NASSCOM</span>FutureSkills</div>
                    <p>An industry driven learning ecosystem to get India accelerated on the journey to building skills and becoming the global hub for talent on emerging technologies. The initiative focuses on building technology skills spanning 155+ skills for 70+ job roles on 10 emerging technologies and 10 non-tech skills.</p>
                    <div class="read-more"><a href="about-futureskill.php">Know More</a></div>
                </div>
            </div>
        </li>
        <li>
            <img src="img/banner-2.jpg" alt="" height="400px" width="1366px" class="home-banner-bg">
            <div class="wrapper">
                <div class="banner-content">
                    <div class="banner-heading"><span>Join the Skilling</span>Revolution!</div>
                    <div class="sub-heading">NASSCOM FutureSkills: <span>A truly Industry led Learning Ecosystem</span></div>
                    <div class="banner-list">
                        <ol> <!-- class="content mCustomScrollbar" -->
                            <li>
                                <div class="image"><img src="img/icon-technology.png" alt=""></div>
                                <div class="desc">10 Emerging Technologies</div>
                            </li>
                            <li>
                                <div class="image"><img src="img/icon-roles.png" alt=""></div>
                                <div class="desc">70+ Job Roles</div>
                            </li>
                            <li>
                                <div class="image"><img src="img/icon-users.png" alt=""></div>
                                <div class="desc">150,000 Registered Users</div>
                            </li>
                            <li>
                                <div class="image"><img src="img/icon-skills.png" alt=""></div>
                                <div class="desc">155+ Skills</div>
                            </li>
                            <li>
                                <div class="image"><img src="img/icon-partners.png" alt=""></div>
                                <div class="desc">30+ Content Partners</div>
                            </li>
                            <li>
                                <div class="image"><img src="img/icon-companies.png" alt=""></div>
                                <div class="desc">100 + Companies</div>
                            </li>
                        </ol>
                    </div>
                    <div class="read-more"><a href="how-does-it-work.php">Know More</a></div>
                </div>
            </div>
        </li>
        <li>
            <img src="img/banner-3.jpg" alt="" height="400px" width="1366px" class="home-banner-bg">
            <div class="wrapper">
                <div class="banner-content">
                    <div class="banner-heading"><span>Reskill</span>or Perish</div>
                    <p>Soon your employability will be as good as the skills you possess. But what are these skills and how can you keep pace?</p>
                    <div class="read-more"><a href="how-does-it-work.php#subscriptionModel">Know More</a></div>
                </div>
                <!-- <div class="b-img">
                    <img src="img/nasscom-feature-skill.png" alt="">
                </div> -->
            </div>
        </li>
        <li>
            <img src="img/banner-4.jpg" alt="" height="400px" width="1366px" class="home-banner-bg">
            <div class="wrapper">
                <div class="banner-content">
                    <div class="banner-heading"><span>Stay</span>Relevant</div>
                    <p>The world of work is changing and so would your skills. Build your skills and keep up pace with the changes driven by technology.</p>
                    <div class="read-more"><a id="joinForm" href="javascript:void(0);">Know More</a></div>
                </div>
                <!-- <div class="b-img">
                    <img src="img/nasscom-feature-skill.png" alt="">
                </div> -->
            </div>
        </li>
    </ul>
</section>
<section class="interest-demo" id="register-for-demo">
    <div class="wrapper">
        <div class="gateway-outer">
            <div class="left">
                <div class="heading">Your Gateway to Stay Relevant for the Future.</div>
                <div class="register-demo">
                    <div class="heading">Interested in a Demo?</div>
                    <div class="form">
                        <form  method="post" id="democontact">
                            <div class="fields">
                                <input type="text" placeholder="Full Name" id="name" oninvalid="this.setCustomValidity('User ID is a must')" required oninvalid="this.setCustomValidity('Please enter full name')" onchange="this.setCustomValidity('')">
                            </div>
                            <div class="fields">
                                <input type="email" placeholder="Please enter only enterprise email id" id="email" required oninvalid="this.setCustomValidity('Please enter valid email')" onchange="this.setCustomValidity('')">
                            </div>
							<p class="er">Please enter only enterprise email id.</p>
                            <div class="fields">
                                <input type="text" pattern="^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$" placeholder="Organization Name" id="org" required oninvalid="this.setCustomValidity('Please enter organization name')" onchange="this.setCustomValidity('')">
                            </div>
                            <p>By signing up, I agree to be contacted by NASSCOM FutureSkills and the affiliated partners for program updates/promotions</p>
                            <div class="action"><input type="submit" value="Register for Free Demo"  class="submitBtn"></div>
                        </form>
                    </div>
                    <div class="thankyou-message">Thanks for Registering! We'll get back to you soon.</div>
                </div>
            </div>
            <div class="right">
                <div class="video">
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/TWwkmg7OxzQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img src="img/future.jpg" alt="Future">
                    <div class="play"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="workforce-sec">
    <div class="wrapper">
        <div class="workforce-inner">
            <div class="heading"><span>Helping companies navigate their</span>workforce into future</div>
            <p>NASSCOM FutureSkills has enabled thousands of IT professionals to be future-ready by creating a culture
                of continuous learning, collaboration and co-creation.</p>
            <div class="workforce-clientLogo">
                <h5>Our Pioneer Associates</h5>
                <div class="workClients">
                    <div class="item"><img src="img/client1.png" alt="client1" /> </div>
                    <div class="item"><img src="img/client2.png" alt="client2" /> </div>
                    <div class="item"><img src="img/client3.png" alt="client3" /> </div>
                    <div class="item"><img src="img/client4.png" alt="client4" /> </div>
                    <div class="item"><img src="img/client5.png" alt="client5" /> </div>
                    <div class="item"><img src="img/client6.png" alt="client6" /> </div>
                    <div class="item"><img src="img/client7.png" alt="client7" /> </div>
                    <div class="item"><img src="img/client8.png" alt="client8" /> </div>
                </div><br>
                <div class="powered-by">
                    <h5>Powered by</h5>
                    <img src="img/edcast.png" width="100" alt="Edcast" />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ecosystem" id="ecosystem">
    <div class="wrapper">
        <div class="heading">An industry driven learning ecosystem </div>
        <p>FutureSkills platform is powered by EdCast, a leading silicon valley organization for personalized
            learning. It brings together best-in-class global providers of content and learning along with renowned
            subject matter experts from the industry for a seamless and continuous learning experience</p>
    </div>
    <div class="client-list">
        <div class="item">
            <div class="client-logo"><img src="img/logo-ahunt.png" alt=""></div>
            <div class="client-logo b-bottom "><img src="img/logo-aws.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo "><img src="img/logo-automation.png" alt=""></div>
            <div class="client-logo b-bottom "><img src="img/logo-corestack.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo "><img src="img/logo-datacamp.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-edx.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo "><img src="img/logo-empass.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-pearson.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo "><img src="img/logo-ibm-developer.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-ieee.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo "><img src="img/logo-jigsaw.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-khan.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo"><img src="img/logo-redhat.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-manipal-prolearn.png" alt=""></div>
        </div>

        <div class="item">
            <div class="client-logo"><img src="img/logo-aspiring-minds.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-mettl.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo"><img src="img/logo-mitx.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-onptel.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo"><img src="img/logo-nuvepro.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-simplilearn.png" alt=""></div>
        </div>
        <div class="item">
            <div class="client-logo"><img src="img/logo-uipath.png" alt=""></div>
            <div class="client-logo b-bottom"><img src="img/logo-upgrad.png" alt=""></div>
        </div>
    </div>
</section>
<!-- Join Us PopUp Form -->
<section class="howCanYouJoin"><?php include('_join-form.php'); ?></section>
<!-- Footer Section -->
<?php include('footer.php'); ?>
<style>
.er.active {
	color: red;
	font-weight: bold;
	font-size: 13px !important;
}
</style>
<script>
    $(document).ready(function(){
       //
    })
</script>