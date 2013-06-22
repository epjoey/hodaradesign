<?php include '../header.php'; ?>

<div id="sec-head"><a href="/web"><img src="../port/web1.gif"></a></div>

<div id="thumbs4">
<a href="?bc"><img src="thumbs/x-bc.jpg" border="0"></a><br/><br/> 
<a href="?ep"><img src="thumbs/x-ep.jpg" border="0"></a><br/><br/> 
<a href="?bbb"><img src="thumbs/x-bbb.jpg" border="0"></a><br/><br/> 
<a href="?lexi"><img src="thumbs/x-lexi.jpg" border="0"></a><br/><br/> 
<a href="?3fo"><img src="thumbs/x-3fo.jpg" border="0"></a><br/><br/> 
<a href="?amathus"><img src="thumbs/x-amathus.jpg" border="0"></a><br/><br/> 
<a href="?ta"><img src="thumbs/x-ta.jpg" border="0"></a><br/><br/> 
<a href="?ss"><img src="thumbs/x-ss.jpg" border="0"></a><br/><br/> 
<a href="?gl"><img src="thumbs/x-gl.jpg" border="0"></a><br/><br/> 
<a href="?hd"><img src="thumbs/x-hd.jpg" border="0"></a><br/><br/> 
<a href="?thd"><img src="thumbs/x-thd.jpg" border="0"></a><br/><br/> 
<a href="?wtx"><img src="thumbs/x-wtx.jpg" border="0"></a><br/><br/> 
<a href="?fwc"><img src="thumbs/x-fwc.jpg" border="0"></a><br/><br/> 
<a href="?jul"><img src="thumbs/x-jul.jpg" border="0"></a><br/><br/> 
<a href="?ari"><img src="thumbs/x-ari.jpg" border="0"></a><br/><br/> 
<a href="?pbg"><img src="thumbs/x-pbg.jpg" border="0"></a><br/><br/>
</div>

<div id="main4">

                        		<?PHP 
                        		
                        		if($_SERVER['QUERY_STRING']=='/index.php'  || $_SERVER['QUERY_STRING']=='/'  || $_SERVER['QUERY_STRING']==''){
									echo "<h2>Welcome to the web and motion section of my portfolio.</h2><p>Here I display interactive or animated designs that I have created either as a freelance task or a team project. Currently I design and built websites using HTML, CSS, Javascript, and PHP. </p>
								<p class='small'>&larr; click on those thumbnails to view work</p>";
									}
									                        		
       								elseif (isset($_GET['bc'])){
			echo "<h2>homepage for broadcause</h2><p>Broadcause is a free outreach and management tool designed for non-profits and charities. Click <a href=http://www.broadcause.com/>here</a> to see the live site.</p><br/><img src=images/bc.jpg /><br/><p class='small'>Tools used: Sketching, Photoshop, illustrator, HTML, CSS, JS, PHP</p>";		
										}    

       								elseif (isset($_GET['ep'])){
			echo "<h2>experience project company website</h2><p>Experience Project is a web start-up that I design for. The corporate site is an overview of what we are up to. Click <a href=http://www.eproject-inc.com/>here</a> to see the live site.</p><br/><a href='http://www.eproject-inc.com'><img src='images/ep.jpg' /></a><br/><p class='small'>Tools used: Photoshop, HTML, CSS, JS, PHP</p>";		
										}    
									
									elseif (isset($_GET['bbb'])){
			echo "<h2>gallery page for beach blanket babylon</h2><p>BBB needed to squeeze their multitude of images and videos onto one easy-to-view page. Jquery carousels work. Click <a href=http://beachblanketbabylon.com/showpics/index.shtml/>here</a> to see the live page.</p><br/><img src=images/bbb.jpg /><p class='small'>Tools used: Photoshop, sHTML, CSS, javascript</p>";		
										}

									elseif (isset($_GET['lexi'])){
			echo "<h2>website for actress lexi graboski</h2><p>Lexi Graboski is a fresh actress from the East Coast currently working in Los Angeles, of all places. Click <a href=http://www.lexigraboski.com/>here</a> to see the live page.</p><img src=images/lexi1.jpg></img><br/><br/><img src=images/lexi2.jpg></img><p class='small'>Tools used: Photoshop, HTML, CSS, Wordpress PHP and javascript</p>";		
										}
elseif (isset($_GET['3fo'])){
			echo "<h2>javascript image slider</h2><p>300FeetOut wanted to ditch their flash image slide show for a cross-compatible and controllable javascript slider. I created this easing slider that works in all modern browsers browsers using jquery. View it <a href='http://300feetout.com' target='_blank'>live</a>.</p><img src=images/3fo.jpg></img><br/><p class='small'>Tools used: HTML/CSS/JS/jQuery</p>";		
										}
elseif (isset($_GET['amathus'])){
			echo "<h2>youtube channel and video embedding for amathus hotels</h2><p>By creating a youtube channel and embedding their videos on their websites from the channel, Amathus Hotels sees an increase in loading speed, social media presence and SEO.</p><img src=images/amathus.jpg></img><br/><p class='small'>Tools used: Photoshop, Illustrator, and Video converters</p>";		
										}

								elseif (isset($_GET['ta'])){
			echo "<h2>webpage design with slideshow and icons for tellapart</h2><p>Tellapart, a Silicon Valley advertising company, needed to spice up their Jobs page in order to recruit top-notch engineers to their team. I photographed the office, the team and the town and created a slideshow. I also created icons to represent the complex technologies used by the firm. Click <a href=http://www.tellapart.com/jobs>here</a> to see the live page.</p><img src=images/ta.jpg></img><p class='small'>Tools used: Panasonic Digital camera, Illustrator, Photoshop, HTML, CSS, javascript</p>";		
										}
								
								elseif (isset($_GET['ss'])){
			echo "<h2>website design for sound shed</h2><p>Sound Shed is a Cape Town-based company that sells carved wooden animals who double as instruments. Woodshop, music and sculpture were themes infused into the website design.</p><img src=images/ss1.jpg></img><img src=images/ss2.jpg></img><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS, Flash</p>";
				}	
								
								elseif (isset($_GET['gl'])){
			echo "<h2>website design for the golden league</h2><p>The Golden League is an investors group. The website is highly text-based and informative. And its in Russian! <a href=http://www.24zl.com/index.html>www.24zl.com</a></p><img src=images/gl1.jpg></img><img src=images/gl2.jpg></img><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS</p>";
				}
								elseif (isset($_GET['hd'])){
			echo "<h2>original logo and website design for hodara design</h2><p>I created my first portfolio site in Flash for aesthetic purposes. Having to edit the flash file everytime I needed to add content proved impractical so I swapped it for an HTML site. The flash site is still live at <a target=_blank href=http://www.hodaradesign.com/flashsite>www.hodaradesign.com/flashsite</a>.</p><img src=/identities/images/hd1.jpg></img><img src=/identities/images/hd2.jpg></img><img src=/identities/images/hd3.jpg></img><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS, Flash</p>";	
			}
								elseif (isset($_GET['thd'])){
			echo "<h2>logo and website design for l.a. comedy troup</h2><p>Two Headed Dog asked me to create a logo and website which visually relates to their eccentric stage antics. I used cartoons by one of the actors, Mark, as a starting point and developed the rest of the design with a similar attitude.</p><img src=/identities/images/thd1.jpg></img><img src=/identities/images/thd2.jpg></img><img src=/identities/images/thd3.jpg></img><p class='small'>Tools used: Illustrator, Photoshop, HTML, CSS, (Illustrations by Mark Fite)</p>";	}
								elseif (isset($_GET['wtx'])){
			echo "<h2>wind to exploit</h2><p>Wind To Exploit is a motion piece based on the novel <i>A Long Way Gone</i> by Ishmael Beah, a former child soldier.</p><img src=/posters/images/wtx.jpg></img><br/><br/><iframe src=http://player.vimeo.com/video/16647497 width=512 height=330></iframe><p class='small'><a href=http://vimeo.com/16647497>Wind To Exploit</a> from <a href=http://vimeo.com/user5177234>JOSEPH HODARA</a> on <a href=http://vimeo.com>Vimeo</a>.</p><p class='small'>Tools used: Acrylic paint, Keynote, Photoshop</p>";	}
								elseif (isset($_GET['fwc'])){
			echo "<h2>logo and website design for freeway creative</h2><p>Freeway Creative is a blog started by two friends and I. The purpose is to display artwork by friends and create an artwork sharing community. <a href=http://www.freewaycreative.com/index.html>www.freewaycreative.com</a></p><img src=/identities/images/fwc.jpg></img><img src=/identities/images/fwc2.jpg></img><p class='small'>Tools used: Compass, Photoshop, HTML, CSS</p>";	}
								elseif (isset($_GET['jul'])){
			echo "<h2>banner ad for bicycle games</h2><p>Here is one of many banner ads I created for Encore, Inc, a software publisher.</p><img src=images/jul.jpg></img><p class='small'>Tools used: Illustrator, Photoshop</p>";	}
								elseif (isset($_GET['ari'])){
			echo "<h2>arithmaroo iphone app</h2><p>Arithmaroo is an educational (mathematics) application for young children</p><img src=images/ari1.jpg></img><p class='small'>Tools used: Illustrator, Photoshop</p>";	}
								elseif (isset($_GET['pbg'])){
			echo "<h2>players body gear intro graphic</h2><p>players body gear is a website that sells clothing. I am currently working on their site.</p><img src=images/pbg.jpg></img><p class='small'>Tools used:Photoshop, HTML, CSS</p>";	}
							
								else {	
									include '404.php';
									}
                        		
                        		
                        		
                        		
                        		?>

</div>

   	<?php include '../footer.php'; ?>	



