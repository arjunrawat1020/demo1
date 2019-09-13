<?php 
$baseurl=(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; $actual_link = strtok($url, "?");
if($actual_link=='http://futureskills.nasscom.in/'|| $actual_link=='http://futureskills.nasscom.in'){	
?>
<title>NASSCOM FutureSkills: Homepage </title>




<?php
}
?>
<?php
if($actual_link==$baseurl.'index.php'){
?>
<title>NASSCOM FutureSkills: Homepage</title>





<?php
}
?>
<?php
if($actual_link==$baseurl.'team.php'){
?>
<title>NASSCOM FutureSkills: Team</title>

<?php
}
?>
<?php
if($actual_link==$baseurl.'6_ways_to_make_online_learning_more_engaging_some_real_stroies.php'){
?>
<title>NASSCOM FutureSkills: Blog</title>


<?php
}
?>
<?php
if($actual_link==$baseurl.'the_urgent_need_to_skill.php'){
?>
<title>NASSCOM FutureSkills: Blog</title>



<?php
}
?>
<?php
if($actual_link==$baseurl.'future_skills_in_digital_era.php'){
?>
<title>NASSCOM FutureSkills: Blog</title>

<?php
}
?>
<?php
if($actual_link==$baseurl.'potential_solutions_to_skill_india_in_emerging_technology.php'){
?>
<title>NASSCOM FutureSkills: Blog</title>

<?php
}
?>
<?php
if($actual_link==$baseurl.'about-futureskill.php'){
?>
<title>NASSCOM FutureSkills:</title>

<?php
}
?>
<?php
if($actual_link==$baseurl.'how-does-it-work.php'){
?>
<title>NASSCOM FutureSkills: How Does It Work</title>
<?php
}
?>
<?php
if($actual_link==$baseurl.'news-views.php'){
?>
<title> NASSCOM FutureSkills: News Views</title>

<?php
}
?>
<?php
if($actual_link==$baseurl.'case-study.php'){
?>
<title>NASSCOM FutureSkills: Case Study</title>
<?php
}
?>
<?php
if($actual_link==$baseurl.'research.php'){
?>
<title>NASSCOM FutureSkills: Research</title>
<?php
}
?>
<?php
if($actual_link==$baseurl.'blog.php'){
?>
<title>NASSCOM FutureSkills: Blogs</title>
<?php
}
?>
<?php
if($actual_link==$baseurl.'video-gallery.php'){
?>
<title>NASSCOM FutureSkills: Video Gallery</title>
<?php
}
?>
<?php
if($actual_link==$baseurl.'photo-gallery.php'){
?>
<title>NASSCOM FutureSkills: Photo Gallery</title>
<?php
}
?>
