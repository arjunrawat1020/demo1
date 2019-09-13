$('#democontact').submit(function(e){
	e.preventDefault();
	//var $form = $(this);
	// check if the input is valid
    var name = $('#name').val();
	var email = $('#email').val();
	var org = $('#org').val();
	email = email.replace("&", "_");
	 var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  if (reg.test(email)){
 //return 0;
 }
 else{
 //alert('Please Enter Business Email Address');
 $(".er").addClass("active");
 $("#email").val('');

 return false;
 }
	var dataString = 'email='+email+'&name='+name+'&org='+org;
	//alert(dataString);
	$.ajax({
		type: "POST",
		url: "democontact.php",
		data: dataString,
		cache: false,
		success: function(result) {
			//alert(result.trim());
			document.getElementById('democontact').reset();
			$(".gateway-outer .thankyou-message").show();
			$('#democontact').hide();
			$('#democontact').parent().prev().hide();
		}
	});
});
	
$('#howcanjoin').submit(function(e){
	e.preventDefault();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#emailjoin').val();
		var company = $('#company').val();
		var designation = $('#designation').val();
		var comments = $('#comments').val();
		email = email.replace("&", "_");
		 var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  if (reg.test(email)){
 //return 0;
 }
 else{
 //alert('Please Enter Business Email Address');
 $(".er").addClass("active");
 $("#emailjoin").val('');
 return false;
 }
		var dataString = 'email='+email+'&firstname='+firstname+'&company='+company+'&lastname='+lastname+'&designation='+designation+'&comments='+comments;
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: "howcanjoin.php",
			data: dataString,
			cache: false,
			success: function(result) {
				//alert(result.trim());
				document.getElementById('howcanjoin').reset();
				$(".howCanYouJoin .thankyou-message").show();
				$('#howcanjoin').hide();
				setTimeout(function(){
					$('#joinPopupForm').removeClass('active');
					$('body').removeClass('scrollOff');
				}, 3000);
			}
		});
	});	
	
	$("#organizationdetailshare").submit(function(e){
	e.preventDefault();
		var firstname = $('#firstnames').val();
		var lastname = $('#lastnames').val();
		var email = $('#emails').val();
		var company = $('#companys').val();
		var designation = $('#designations').val();
		var comments = $('#commentss').val();
		email = email.replace("&", "_");
		 var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  if (reg.test(email)){
 //return 0;
 }
 else{
	$(".er").addClass("active");
	$("#emails").val('');
 return false;
 }
		var dataString = 'email='+email+'&firstname='+firstname+'&company='+company+'&lastname='+lastname+'&designation='+designation+'&comments='+comments;
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: "organizationdetailshare.php",
			data: dataString,
			cache: false,
			success: function(result) {
				//alert(result.trim());
				document.getElementById('organizationdetailshare').reset();
				$(".thankyou-message").show();
				$("#organizationdetailshare").hide();
				setTimeout(function(){
					$('#contactPopupForm').removeClass('active');
					$('body').removeClass('scrollOff');
				}, 3000);
			}
		});
	});	
	
	$('#downloadpdf').submit(function(e){
		e.preventDefault();
		var email = $('#email').val();
		var phone = $('#phone').val();
		email = email.replace("&", "_");
		 var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  if (reg.test(email)){
 //return 0;
 }
 else{
	$(".er").addClass("active");
	$("#email").val('');
 return false;
 }
		var dataString = 'email='+email+'&phone='+phone;
		//alert(dataString);
		$.ajax({
			type: "POST",
			url: "downloadpdf.php",
			data: dataString,
			cache: false,
			success: function(result) {
				//alert(result.trim());
				document.getElementById('downloadpdf').reset();
				$("#caseStudyForm .thankyou-message").show();
				$('#downloadpdf').hide();
				setTimeout(function(){
					$('#caseStudyForm').removeClass('active');
					$('body').removeClass('scrollOff');
				}, 3000);
			}
		});
	});	
	