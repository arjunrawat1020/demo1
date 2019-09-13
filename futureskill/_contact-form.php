<section class="popUp-sec contact-form" id="contactPopupForm">
    <div class="popUpForm">
        <span class="close-btn"><img src="img/close.png" alt="close"></span>
        <form action="#" id="organizationdetailshare">
            <p>Got a Question?</p>
            <span>Share your organization details and our team will get in touch with you</span>

            <input type="text" name="fname" required class="popup-fields" placeholder="First Name" id="firstnames" oninvalid="this.setCustomValidity('Please enter first name')" onchange="this.setCustomValidity('')">
            <input type="text" name="lname" required class="popup-fields" placeholder="Last Name" id="lastnames" oninvalid="this.setCustomValidity('Please enter last name')" onchange="this.setCustomValidity('')">
            <input type="text" name="cname" required class="popup-fields" placeholder="Company Name" id="companys" oninvalid="this.setCustomValidity('Please enter company name')" onchange="this.setCustomValidity('')">
            <input type="text" name="designation" required class="popup-fields" placeholder="Designation" id="designations" oninvalid="this.setCustomValidity('Please enter Designation')" onchange="this.setCustomValidity('')">
            <input type="email" name="email" required class="popup-fields" placeholder="Please enter only enterprise email id" id="emails" oninvalid="this.setCustomValidity('Please enter valid email')" onchange="this.setCustomValidity('')">
            <!-- <p class="er">Please enter only enterprise email id.</p> -->
            <textarea name="comments" id="commentss" cols="30" rows="2" placeholder="Tell us How you would like to Contribute & Join FutureSkills" id="commentss" oninvalid="this.setCustomValidity('Please enter your comment')" onchange="this.setCustomValidity('')" required></textarea>
            <span>By signing up, I agree to be contacted by NASSCOM FutureSkills and the affiliated partners for program updates/promotions</span>
            <input type="submit" value="submit" id=" popUpSubmit-btn" class="submitBtn">
        </form>
        <div class="thankyou-message" style="display:none">Thanks for Registering! We'll get back to you soon.</div>
    </div>
</section>