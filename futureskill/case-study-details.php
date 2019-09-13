<?php include('head.php'); ?>
<?php include('navigation.php'); ?>
<section class="home-banner inner-banner">
    <img src="img/case-study/banner-details-bg.jpg" alt="" height="400px" width="1366px" class="inner-banner-bg">
    <div class="wrapper">
        <div class="banner-content">
            <div class="banner-heading"> <span>case </span>studies</div>
        </div>
    </div>
</section>
<section class="breadcum">
    <div class="wrapper">
        <ul>
            <li>Home</li>
            <li class="seprator"><img src="img/bradcum-arrow.png" alt=""></li>
            <li>resources</li>
            <li class="seprator"><img src="img/bradcum-arrow.png" alt=""></li>
            <li class="active">case studies</li>
        </ul>
    </div>
</section>

<section class="caseStudies-sec caseStudyDetails-sec">
    <div class="wrapper">
        <div class="left">
            <img src="img/case-study/details-case-study-img.png" alt="">
        </div>
        <div class="right">
            <div class="heading">NASSCOM FutureSkills Accelerates Tech Mahindra's Digital Learning Journey</div>
            <p>Tech Mahindra's partnership with NASSCOM FutureSkills has opened doors for its employees to access the
                best-in-class learning experience. They now have seamless access to 1000+ hours of free and open
                content, offerings from global EdTech partners, and expert- and machine-curated content. From taking
                control of their own learning, collaborating and knowledge-sharing, Tech Mahindra's employees have
                transcended from being limited to just content consumers to being collaborators and curators of learning
                content. This is a true testament to building a digital organization.</p>
            <!-- <a href="javascript:void(0)" class="readMore_btn">read more</a> -->
        </div>
    </div>
</section>

<section class="keyHeighLight-sec">
    <div class="wrapper">
        <div class="heading"><span>Key</span> heighlights</div>
        <div class="kh-list">
            <ul>
                <li>Over 125,000 employees across the organisation are digitally aware. This includes knowledge of what
                    these digital skills are and why they are important. Of 125,000 employees, about 55,000 employees
                    are developing at least one digital skill beyond awareness.</li>
                <li>Over 70,000 employees, with various experience levels, across the organisation, have chosen at least
                    2 digital skills in which they can comfortably make conversations with customers. </li>
                <li>Trend.Nxt & Digital.Nxt: Through these initiatives Wipro is building in-depth knowledge in at least
                    2 digital skills for more than half its employees in IT. Hands-on experience is a big focus area.
                </li>
                <li>Wipro’s TopGear platform’s prime focus is to transform the workforce in ‘digital’ and ‘in-demand’
                    skills. It consists of 80 + cloud-based development environments. It has over 1750 learning
                    assignments and case studies covering 170+ skills. It provides virtual development environments for
                    the employees to gain hands-on experience in emerging digital skills. Till date, over 92,000
                    employees have registered on the platform. There are about 38,000 users engaged in enhancing their
                    skills which include employees, who have completed one or more learning assignments.</li>
            </ul>
            <div class="downlaod-btn downloadPdf-btn">
                <a href="javascript:void(0)">Download pdf <span><img src="img/download-icon.png" alt=""></span></a>
            </div>

        </div>
    </div>
</section>

<section class="csBox-sec blog-sec relatedCS-sec">
    <div class="wrapper">
        <div class="heading"><span>related</span> case studies</div>
        <div class="left">
            <ul>
                <li>
                    <img src="img/case-study/case-thumb-1.png" alt="">
                    <div class="context">
                        <div class="heading">NASSCOM FutureSkills Accelerates Tech Mahindra's Digital Learning Journey
                        </div>
                        <p>Nowhere is the impact of the shifting digital landscape as visible as in India’s large IT
                            services organisations that work.</p>
                        <a href="javascript:void(0)" class="readMore_btn">read more</a>
                    </div>
                </li>
                <li>
                    <img src="img/case-study/case-thumb-2.png" alt="">
                    <div class="context">
                        <div class="heading">Driving Knowledge Sharing & Future Readiness through NASSCOM FutureSkills
                        </div>
                        <p>Wipro's vision of Talent transformation struck a resonance with NASSCOM FutureSkills. Through
                            FutureSkills, learners can build.</p>
                        <a href="javascript:void(0)" class="readMore_btn">read more</a>
                    </div>
                </li>
                <li>
                    <img src="img/case-study/case-thumb-3.png" alt="">
                    <div class="context">
                        <div class="heading">Transforming Knowledge Evolution at [x] cube LABS through Social &
                            Collaborative Learning</div>
                        <p>Within five months of implementation, NASSCOM FutureSkills has enabled a culture.</p>
                        <a href="javascript:void(0)" class="readMore_btn">read more</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>


<section class="popUp-sec" id="caseStudyForm">
    <div class="popUpForm">
        <span class="close-btn"><img src="img/close.png" alt="close"></span>
        <form action="#" id="downloadpdf">
            <p>To download the report, please share your Email I'd & Mobile Number</p>

            <input type="email" name="email" id="email" required class="popup-fields" placeholder="Email" />
            <input type="text" name="phone" id="phone" required class="popup-fields" placeholder="Phone Number" />
            <input type="submit" value="submit" id="popUpSubmit-btn" class="submitBtn">
        </form>
        <div class="thankyou-message">Thanks for Registering! We'll get back to you soon.</div>
    </div>
</section>

<!-- intrested section -->
<?php include('_intrested2.php'); ?>
<!-- Join Us PopUp Form -->
<section class="howCanYouJoin"><?php include('_join-form.php'); ?></section>
<!-- footer section -->
<?php include('footer.php'); ?>