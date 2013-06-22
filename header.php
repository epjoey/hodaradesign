<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Hodara Design</title>
                <meta name="Description" content="HODARA DESIGN. Graphic and web deisgn by Joseph Hodara">
		<meta name="Keywords" content="design, hodara, joey, joey hodara, joseph hodara, graphic design, web design, AIGA, golden league, dawn patrol ">
<link rel="stylesheet" type="text/css" media="all" href="<?php $base ?>/css/site1.css" />
<link rel="stylesheet" href="<?php $base ?>/css/flade.css" type="text/css" media="screen" />
<link rel="icon" type="image/gif" href="<?php $base ?>/favicon.gif" />

<script type="text/javascript" src="<?php $base ?>/js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="<?php $base ?>/js/jquery.easing.js"></script>
     
      
<!--[if lt IE 7.]>
<script defer type="text/javascript" src="<?php $base ?>/js/pngfix.js"></script>
<![endif]-->
<?php

$agent = $_SERVER['HTTP_USER_AGENT'];

if(preg_match('/Linux/',$agent)) $os = 'Linux';
elseif(preg_match('/Win/',$agent)) $os = 'Windows';
elseif(preg_match('/Mac/',$agent)) $os = 'Mac';
else $os = 'UnKnown';

$current_folder = basename(dirname(__FILE__));
$base = $_SERVER['SERVER_PROTOCOL'].'://'. $_SERVER['HTTP_HOST'];
$uri = $_SERVER["REQUEST_URI"];
$self = $_SERVER['PHP_SELF'];
$base_uri = $base . $uri;

if ($uri == '/' || $self == '/identities/index.php' || $self == '/packaging/index.php' || $self == '/posters/index.php' || $self == '/web/index.php' || $self == '/fineart/index.php') $section = 'port';
elseif($uri == '/about/') $section = 'about';
elseif($uri == '/contact/') $section = 'contact';
else $section = 'other';

if ($uri == '/about/' || $uri == '/contact/' || $uri == '/') $level = 'top';
else $level = 'lower';

?>



</head>
<body>

<div id="wrap">

<div id="left-fade"><img alt="" src="<?php $base ?>/graphics/left.png" height="416" width="30" border="0">
	<?php
	if($level == 'top') { ?>
	<img alt="" src="<?php $base ?>/graphics/left-a.png" height="300" width="30">
	<?php } else { ?>
    <img alt="" src="<?php $base ?>/graphics/leftb.png" height="600" width="30">
    <?php } ?>
</div>

<div id="right-fade"><img alt="" src="<?php $base ?>/graphics/right.png" height="416" width="30">
	<?php
	if($level == 'top') { ?>
	<img alt="" src="<?php $base ?>/graphics/right-a.png" height="300" width="30">
	<?php } else { ?>
    <img alt="" src="<?php $base ?>/graphics/rightb.png" height="600" width="30">
    <?php } ?>
</div>



<div id="header">
	<?php if($os == 'Mac') { ?>
    <div id="tophead">
    <?php } else { ?>  
    <div id="tophead-notmac">
    <?php } ?>
    
		<div id="topnav">
        
        <a <?php if($section == 'port') echo 'class="on"' ?> id="firsttop" href="/">portfolio</a> 
        
        <a <?php if($section == 'about') echo 'class="on"' ?> id="sectop" href="/about">about</a>
   
        <a <?php if($section == 'contact') echo 'class="on"' ?> id="lasttop" href="/contact">contact</a>         
                        
        </div>
		<div id="email"><a href="mailto:jhodara@gmail.com" title="You sure you want to open your e-mail program?">jhodara@gmail.com</a></div>
	</div>
	<div id="nav">
                    	<div id="nleft"><img alt="" src="<?php $base ?>/graphics/row5.1.jpg" width="121"></div>
                    	
                    	<div id="n1"><a href="/identities">
                        <?php if ($self != '/identities/index.php') { ?>
                        <img alt="" class="roll1" src="<?php $base ?>/graphics/row5.2-vis1.jpg" width="126" /> 
						<?php } ?>
                        <img alt="" src="<?php $base ?>/graphics/row5.2-vis2.jpg" />
                        </a></div>
                    	
                    	<div id="n2"><a href="/packaging">
                        <?php if ($self != '/packaging/index.php') { ?>
                        <img alt="" class="roll2" src="<?php $base ?>/graphics/row5.3-pack1.jpg"  />
                        <?php } ?>
                        <img alt="" src="<?php $base ?>/graphics/row5.3-pack2.jpg" /></a></div>
   					
                    	<div id="n3"><a href="/posters">
                        <?php if ($self != '/posters/index.php') { ?>
                        <img alt="" class="roll3" src="<?php $base ?>/graphics/row5.4-pos1.jpg" />
                        <?php } ?>
                        <img alt="" src="<?php $base ?>/graphics/row5.4-pos2.jpg" /></a></div>
                    		
                    	<div id="n4"><a href="/web">
                        <?php if ($self != '/web/index.php') { ?>
                        <img alt="" class="roll4" src="<?php $base ?>/graphics/row5.5-web1.jpg" />
                        <?php } ?>
                        <img alt="" src="<?php $base ?>/graphics/row5.5-web2.jpg" /></a></div>
   						
                    	<div id="n5"><a href="/fineart">
                        <?php if ($self != '/fineart/index.php') { ?>
                        <img alt="" class="roll5" src="<?php $base ?>/graphics/row5.6-fine1.jpg" />
                        <?php } ?>
                        <img alt="" src="<?php $base ?>/graphics/row5.6-fine2.jpg" /></a></div>
   							
                      	<div id="nright"><img alt="" src="<?php $base ?>/graphics/row5.7.jpg" /></div>
                	
          </div> 
          
          <div id="home-link"><a href="<?php $base ?>/"><img alt="" src="<?php $base ?>/graphics/blank.gif" class="home-link" /></a></div>
</div>
<?php if($os == 'Mac') { ?>
    <div id="content">
    <?php } else { ?>  
    <div id="content-notmac">
    <?php } ?>
          
<script type="text/javascript">
	
$(".roll1, .roll2, .roll3, .roll4, .roll5 ").hover(
function () {
$(this).stop().animate({"opacity": "0"}, 250);
},
function () {
$(this).stop().animate({"opacity": "1"}, 250);
});
</script>          
          
<?php if($uri == '/') { ?>
          
<script type="text/javascript">
$(window).load(function () {
        var iCounter = 1;
        var interValKey = null;
        setTimeout (function(){
            interValKey = setInterval(function(){
                pulse(iCounter); 
                iCounter++;
                if(iCounter == 6){
                clearInterval(interValKey);
                }
            }, 200);
        }, 300); 
});

function pulse(n) { 
    $(".roll"+n).animate({"opacity": "0"}, 550);
    setTimeout (function (){
        $(".roll"+n).animate({"opacity": "1"}, 350);
    },800)
};

</script>
<?php } ?>
