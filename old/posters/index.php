   	<?php include '../header.php'; ?>
    
   <div id="sec-head3"><a href="/posters"><img src="../art/ppp1.gif"></a></div>

<div id="thumbs31">
<a href="?fear"><img src="thumbs/x-fear.jpg" border="0"></a><br/><br/> 
<a href="?fecal"><img src="thumbs/x-fecal.jpg" border="0"></a><br/><br/> 
<a href="?missp"><img src="thumbs/x-missp.jpg" border="0"></a><br/><br/> 
<a href="?mochi"><img src="thumbs/x-mochi.jpg" border="0"></a><br/><br/> 
<a href="?stages"><img src="thumbs/x-stages.jpg" border="0"></a><br/><br/> 
<a href="?loy"><img src="thumbs/x-loy" border="0"></a><br/><br/> 
<a href="?helv"><img src="thumbs/x-helv.jpg" border="0"></a><br/><br/> 
<a href="?sideman"><img src="thumbs/x-sideman.jpg" border="0"></a><br/><br/> 
</div>
<div id="thumbs32">
<a href="?realtor"><img src="thumbs/x-realtor.jpg" border="0"></a><br/><br/> 
<a href="?enso"><img src="thumbs/x-enso.jpg" border="0"></a><br/><br/> 
<a href="?sen"><img src="thumbs/x-sen.jpg" border="0"></a><br/><br/> 
<a href="?seniornight"><img src="thumbs/x-seniornight.jpg" border="0"></a><br/><br/> 
<a href="?surfer"><img src="thumbs/x-surfer.jpg" border="0"></a><br/><br/> 
<a href="?voegele"><img src="thumbs/x-voegele.jpg" border="0"></a><br/><br/> 
<a href="?blink"><img src="thumbs/x-blink.jpg" border="0"></a><br/><br/> 
</div>

<div id="main3">
  <?PHP 
if($_SERVER['QUERY_STRING']=='/index.php'  || $_SERVER['QUERY_STRING']=='/'  || $_SERVER['QUERY_STRING']==''){
echo "<h2>Welcome to the poster and print publication section of my portfolio</h2><p>This section hosts many promotional pieces, school projects, personal projects and advertisements. They range in actual size from letter size to 40x60 inches.</p>
								<p class='small'>&larr; click on those thumbnails to view work</p>";
									}
									                        		

elseif (isset($_GET['fear'])){
echo "<h2>fear itself</h2><p>Fictional exhibit poster</p><img src=images/fear.jpg></img><br/><p class='small'>Tools used: Photography, Photoshop</p>";	}
								
elseif (isset($_GET['fecal'])){
echo "<h2>clean the creek</h2><p></p><img src=images/fecal.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";	}	

elseif (isset($_GET['mad'])){
echo "<h2>lmu campus recreation event</h2><p></p><img src=images/mad1.jpg></img>&nbsp;<img src=images/mad2.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";	}

elseif (isset($_GET['missp'])){
echo "<h2>missing piece</h2><p>missing piece is a reggae band. They wanted an urban surf scene for their album art</p><img src=images/missp.jpg></img><br/><p class='small'>Tools used: Sketching, Photoshop</p>";	}

elseif (isset($_GET['mochi'])){
echo "<h2>mochi radial pattern</h2><p></p><img src=images/mochi.jpg></img><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>";	}

elseif (isset($_GET['stages'])){
echo "<h2>stages of aids</h2><p>An LMU Theatre Department production directed by Peter Jensalute</p><img src=images/stages.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";	}

elseif (isset($_GET['realtor'])){
echo "<h2>coldwell banker ad</h2><p>This ad was published in a 2006 edition of Maui, A Property Portfolio</p><img src=images/realtor.jpg></img><br/><p class='small'>Tools used: Photography by Jon Spenser, Indesign</p>";	}

elseif (isset($_GET['saddam'])){
echo "<h2>saddam</h2><p>I created this graphic in response to the confusion occuring in the Middle East at the time.</p><img src=images/saddam.jpg></img><br/><p class='small'>Tools used: Illustrator</p>";	}

elseif (isset($_GET['enso'])){
echo "<h2>el nino southern oscillation</h2><p>34 page science book about El Nino</p><img src=images/sbcover.jpg></img><br/><br/><img src=images/sbscreen.jpg></img><br/><br/><img src=images/sbscreen2.jpg></img><br/><p class='small'>Tools used: Photography, Photoshop, Indesign</p>";	}
									
elseif (isset($_GET['sen'])){
echo "<h2>lmu campus recreation event</h2><p></p><img src=images/sen.jpg></img>&nbsp;<img src=images/senior.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";}
									
elseif (isset($_GET['seniornight'])){
echo "<h2>lmu campus recreation event</h2><p></p><img src=images/seniornight.jpg></img><br/><p class='small'>Tools used: Photoshop, Indesign</p>";}
									
elseif (isset($_GET['surfer'])){
echo "<h2>future surfer cover</h2><p>Valley Isle Bliss</p><img src=images/surfer.jpg></img><br/><p class='small'>Tools used: Sketching, Photography, Photoshop</p>";}
									
elseif (isset($_GET['mlb'])){
echo "<h2>lmu campus recreation event</h2><p></p><img src=images/val.jpg></img>&nbsp;<img src=images/mlb.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";}
									
elseif (isset($_GET['voegele'])){
echo "<h2>lmu campus recreation event</h2><p></p><img src=images/voegele.jpg></img>&nbsp;<img src=images/lounging.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";}
		
elseif (isset($_GET['blink'])){
echo "<h2>cover design of blink by malcolm gladwell</h2><p></p><img border=1px border-color=#999 src=images/blink.jpg></img><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>";}
									
elseif (isset($_GET['loy'])){
echo "<h2>loyolan graphics</h2><p>I was the design editor at my University newspaper, The Loyolan, for two years. Here are some headlines and fun ../graphics I made.</p><img src=images/loy1.jpg></img><br/><br/><img src=images/loy2.jpg></img><br/><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>";}
									
elseif (isset($_GET['helv'])){
echo "<h2>helvetica type specimen</h2><p></p><img src=images/helv.jpg></img><br/><p class='small'>Tools used: Illustrator</p>";}
									
elseif (isset($_GET['sideman'])){
echo "<h2>sideman</h2><p>A Del Rey Theatre Production directed by Matthew Figueira</p><img src=images/sideman.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>";}
									
				
else {	
include '404.php';
}
									
?>      
</div>
      
   	<?php include '../footer.php'; ?>	