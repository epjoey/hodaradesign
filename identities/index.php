<?php include '../header.php'; ?>

<div id="sec-head"><a href="/identities"><img alt=''  src="../port/vis1.gif"></a></div>

<div id="thumbs1">
<a href="?aiga"><img alt=''  src="thumbs/x-aiga.jpg" border="0"></a><br/><br/>
<a href="?dp"><img alt=''  src="thumbs/x-dp2.jpg" border="0"></a><br/><br/>
<a href="?imbiss"><img alt=''  src="thumbs/x-imbiss.jpg" border="0"></a><br/><br/> 
<a href="?ccwc"><img alt=''  src="thumbs/x-ccwc.jpg" border="0"></a><br/><br/> 
<a href="?wyk"><img alt=''  src="thumbs/x-wyk.jpg" border="0"></a><br/><br/> 
<a href="?lnl"><img alt=''  src="thumbs/x-lnl.jpg" border="0"></a><br/><br/> 
<a href="?girleng"><img alt=''  src="thumbs/x-girleng.gif" border="0"></a><br/><br/> 
<a href="?obama"><img alt=''  src="thumbs/x-obama.jpg" border="0"></a><br/><br/> 
<a href="?rene"><img alt=''  src="thumbs/x-rene.jpg" border="0"></a><br/><br/> 
<a href="?thdv"><img alt=''  src="thumbs/x-thd.jpg" border="0"></a><br/><br/> 
<a href="?hdv"><img alt=''  src="thumbs/x-hd.jpg" border="0"></a><br/><br/> 
<a href="?backdoor"><img alt=''  src="thumbs/x-backdoor.jpg" border="0"></a><br/><br/> 
<a href="?fwcv"><img alt=''  src="thumbs/x-fwc.jpg" border="0"></a><br/><br/> 
</div>

<div id="main1">

<?PHP 
                        		
                       		if($_SERVER['QUERY_STRING']=='/index.php'  || $_SERVER['QUERY_STRING']=='/'  || $_SERVER['QUERY_STRING']==''){
									echo "<h2>Welcome to the visual identity gallery of Hodara Design.</h2><p> Here I display logos and branding designs that I have created. For many of these clients I went beyond design and applied their logos to a communication platform (the web, print material, clothing, etc). Deciding which platform to utilize is key to establishing an effective visual identity.</p><p>When starting a visual identity project I emphasize two main efforts:</p>
                                <ul><li><b>Communication</b> with the client in order to imitate to the nearest degree the vision in his/her mind.</li><li><b>Research</b> into the product, company, field of competition, chosen platform and tools to be used.</li></ul><p class=text1>When these efforts are complete, I design and produce the finished product.</p>
								<p class='small'>&larr; click on those thumbnails to view work</p>";
									}
	                				elseif (isset($_GET['beacon'])){
			echo "<h2>logo for beacon street</h2><p>Beacon Street logo design was a team effort over at 300FeetOut, a rad little design office. </p><img alt=''  src='images/beacon1.jpg' /><br/><p class='small'>Tools used: Illustrator</p>";		
										}	
	                				elseif (isset($_GET['ccwc'])){
			echo "<h2>logo for cal coast wine club</h2><p>CCWC is an online wine retailer aiming to bring central coast wines to a broader market. </p><img alt=''  src='images/ccwc.jpg' /><p class='small'>Tools used: Illustrator</p>";		
										}								                        		
                				elseif (isset($_GET['imbiss'])){
			echo "<h2>signage for imbiss maui</h2><p>German-Austrian inspired cuisine served on the south side of Maui. The owner and I decided on a fun and local branding approach.</p><img alt=''  src='images/imbiss.jpg' /><p class='small'>Tools used: Illustrator</p>";		
										}              		
                

								elseif (isset($_GET['aiga'])){
			echo "<h2>logo design for aiga-lmu chapter</h2><p>American Institute of Graphic Artists-Loyola Marymount University Chapter is a group of design students. This logo appears on the publications created by the group, most of which display artwork of other LMU students.</p><img alt=''  src='images/aiga.jpg' /><p class='small'>Tools used: Pen, Illustrator, Photoshop</p>";		
										}
								
								elseif (isset($_GET['wyk'])){
			echo "<h2>logo  and business card design for wealth you keep workshops</h2><p>The branding of Wealth You Keep is meant to convey affluence and prosperity. A diamond enshrined in a crest and layered on an ornate pattern communicates the attitude WYK.</p><img alt=''  src='images/wyk1.jpg' /><p class='small'>Tools used: Illustrator, Photoshop, spot gloss offset printing</p>";
				}	
								
								elseif (isset($_GET['lnl'])){
			echo "<h2>logo design for catholic media company</h2><p>The branding of LNL is meant to communicate a spiritual message with a youthful tecnical savvy. LNL&#8217;s founder wanted a logo that could bring catholic media into the new age.</p><img alt=''  src='images/lnl1.jpg' /><p class='small'>Tools used: Illustrator</p>";
				}
								elseif (isset($_GET['dp'])){
			echo "<h2>surf company title treatments and graphics for t-shirts</h2><p>These graphics were meant to embody Dawn Patrol&#8217;s old school feel with a new-school twist. Dawn Patrol harkens back to a time before trunks hit our knees and commercialism spoiled the vibe.</p><img alt=''  src='images/dp3.jpg' /><img alt=''  src='images/dp2.jpg' /><img alt=''  src='images/dp1.jpg' /><p class='small'>Tools used: Illustrator, Photoshop</p>";	
			}
								elseif (isset($_GET['girleng'])){
			echo "<h2>business cards, certificates, e-vites and powerpoint slides for girleng south africa</h2><p>Girleng is a South African NPO that encourages and helps girls to pursue a career in engineering. I chose a color scheme and contrasting graphic elements (blue water and gear) that were fresh, youthful and energetic.</p><img alt=''  src='images/girleng.jpg' /><p class='small'>Tools used: Photoshop, Illustrator, Powerpoint</p>";	}
								elseif (isset($_GET['obama'])){
			echo "<h2>logo for obama ohana</h2><p>Obama is our first president from the great 808 state. Inspired by pride in my state and country, I created this graphic to represent the family of Obama supporters in Hawaii and across the mainland.</p><img alt=''  src='images/obama.jpg' /><p class='small'>Tools used: Photoshop</p>";	}
								elseif (isset($_GET['rene'])){
			echo "<h2>logo, flyers and business cards for rene&#8217;s dried fruit and nuts</h2><p>Rene&#8217;s was a small start up in Cape Town. I thought a handdrawn logo would portray the company&#8217;s authentic, homey characteristics.</p><img alt=''  src='images/rene1.jpg' /><p class='small'>Tools used: Illustrator, Photoshop, photography</p>";	}
								elseif (isset($_GET['thdv'])){
			echo "<h2>logo and website design for l.a. comedy troup</h2><p>Two Headed Dog asked me to create a logo and website which visually relates to their eccentric stage antics. I used cartoons by one of the actors, Mark, as a starting point and developed the rest of the design with a similar attitude.</p><img alt=''  src='images/thd1.jpg' /><img alt=''  src='images/thd2.jpg' /><img alt=''  src='images/thd3.jpg' /><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS, (Illustrations by Mark Fite)</p>";	}
								elseif (isset($_GET['hdv'])){
			echo "<h2>original logo and website design for hodara design</h2><p>I created my first portfolio site in Flash for aesthetic purposes. Having to edit the flash file everytime I needed to add content proved impractical so I swapped it for an HTML site. The flash site is still live at <a target=_blank href=http://www.hodaradesign.com/flashsite>www.hodaradesign.com/flashsite</a>.</p><img alt=''  src='images/hd1.jpg' /><img alt=''  src='images/hd2.jpg' /><img alt=''  src='images/hd3.jpg' /><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS, Flash</p>";	}
								elseif (isset($_GET['backdoor'])){
			echo "<h2>logo for backdoor theatre company</h2><p>Backdoor Theatre Company was a group of actors that performed in a spooky garage.</p><img alt=''  src='images/backdoor.jpg' /><p class='small'>Tools used: Illustrator, Photoshop</p>";	}
							
								elseif (isset($_GET['fwcv'])){
			echo "<h2>logo and website design for freeway creative</h2><p>Freeway Creative is a blog started by two friends and I. The purpose is to display artwork by friends and create an artwork sharing community. <a href=http://www.freewaycreative.com/index.html>www.freewaycreative.com</a></p><img alt=''  src='images/fwc.jpg' /><img alt=''  src='images/fwc2.jpg' /><p class='small'>Tools used: Compass, Photoshop, HTML, CSS</p>";	}
							

							
							
								else {	
									include '../404.php';
									}
                        		
                        
                        		
?>

</div>

   	<?php include '../footer.php'; ?>	
