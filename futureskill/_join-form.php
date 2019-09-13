<section class="popUp-sec join-form" id="joinPopupForm">
    <div class="popUpForm">
        <span class="close-btn"><img src="img/close.png" alt="close"></span>
        <form  method="post" id="howcanjoin">
            <!-- <p>Register for Demo Form</p> -->
            <p>Share your organization details and our team will get in touch with you</p><br>
            <!-- <span>Share your organization details and our team will get in touch with you</span> -->

            <input type="text" name="fname" id="firstname" required class="popup-fields" placeholder="First Name" oninvalid="this.setCustomValidity('Please enter first name')" onchange="this.setCustomValidity('')">
            <input type="text" name="lname" id="lastname" required class="popup-fields" placeholder="Last Name" oninvalid="this.setCustomValidity('Please enter last name')" onchange="this.setCustomValidity('')">
            <input type="text" name="cname" id="company" required class="popup-fields" placeholder="Company Name" oninvalid="this.setCustomValidity('Please enter company name')" onchange="this.setCustomValidity('')">
            <input type="text" name="designation" id="designation" required class="popup-fields" placeholder="Designation" oninvalid="this.setCustomValidity('Please enter designation')" onchange="this.setCustomValidity('')">
            <input type="email" name="email" id="emailjoin" required class="popup-fields" placeholder="Please enter only enterprise email id" oninvalid="this.setCustomValidity('Please enter valid email')" onchange="this.setCustomValidity('')">
            <!-- <p class="er">Please enter only enterprise email id.</p> -->
            <textarea name="comments" id="comments" cols="30" rows="2" placeholder="Tell us How you would like to Contribute & Join FutureSkills" oninvalid="this.setCustomValidity('Please enter comment')" onchange="this.setCustomValidity('')" required></textarea>
            <span>By signing up, I agree to be contacted by NASSCOM FutureSkills and the affiliated partners for program updates/promotions</span>
            <input type="submit" value="submit" id=" popUpSubmit-btn"  class="submitBtn">
        </form>
        <div class="thankyou-message" style="display:none">Thanks for Registering! We'll get back to you soon.</div>
    </div>
</section>