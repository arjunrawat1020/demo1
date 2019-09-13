<?php
ob_start();
error_reporting(0);
session_start();
$success = "";
$error = "";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  $data = htmlentities($data);
  $data = strip_tags($data, "<a><img><table><tr><td><th><h2><h3><h4><blockquote><script></script><ul><ol><li><br><br/><br />");
  return $data;
}



$email = isset($_POST['email'])? $_GET['email']: '';

$email = test_input($email);


@extract($_POST);



$whitelist = array('email');

// Building an array with the $_POST-superglobal 
// foreach ($_POST as $key=>$item) 
// {


// // Check if the value $key (fieldname from $_POST) can be found in the whitelisting array, if not, die with a short message to the hacker
// if (!in_array($key, $whitelist)) 
// {
// echo "<span  style='color:red;'>Hack-Attempt detected. Please use only the fields in the form</span><br/>";
// exit;
// }
// }


if(empty($email)){
  $error .= "<span  style='color:red;'>Please Enter Your E-mail !</span><br/>";
}

if($email) {
if (!eregi("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$", $email)){
$error .= "<span  style='color:red;' >Please enter an exact email address ! <br/></span>" ;
}
}


if($error=='')
{
$messages="
Hi User,<br/>
Thanks for Registering! We'll get back to you soon.<br/><br/>
--------------------------------------------------------------------------------<br/><br/>
Thanks & Regards <br/>
NASSCOM FutureSkills.";
$to=$email;
$from='donotreply@mail.nasscom.in';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: NASSCOM FutureSkills<'.$from.'>' . "\r\n";
mail($to,'Thank You For Subscribing Skill Development Community',$messages,$headers);

$messages1="
Dear Admin,<br/>
Subscriber Email ID.<br/>
------------------------------------------------------------------------------------------------------<br/>
Email : $email<br/>
phone : $phone<br/>
------------------------------------------------------------------------------------------------------<br/><br/>
Thanks & Regards <br/>
User ";

$to1='futureskills@nasscom.in';
$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$header .= 'From: Subscribing<'.$email.'>' . "\r\n";
mail($to1,'Thank You For Subscribing Skill Development Community',$messages1,$header); 
echo "<span  style='color:green;' >Thank You For Subscribing</span>";


define('LOG_FILE','downloadpdf.txt');
$f = @fopen(LOG_FILE, 'a+');
if ($f) {
  @fputs($f, $semail.",");
  @fclose($f);
}




  }
  else
  {
echo $error;  
  }

?>
