   	<?php include '../header.php'; ?>

   <div id="sec-head5"><a href="/fineart"><img src="../port/fine1.gif"></a></div>

<div id="thumbs31">
<a href="?kualeho"><img src="//i.imgur.com/chN3Huv.png" width="50" border="0"></a><br/><br/>
<a href="?mavs"><img src="http://i.imgur.com/EAFKqDus.jpg" width="50" height="50" border="0"></a><br/><br/>
<a href="?swirly"><img src="thumbs/x-swirlysunset.jpg" border="0"></a><br/><br/>
<a href="?noriega"><img src="thumbs/x-noriega.jpg" border="0"></a><br/><br/>
<a href="?ob"><img src="thumbs/x-ob.jpg" border="0"></a><br/><br/>
<a href="?backside"><img src="thumbs/x-backside.jpg" border="0"></a><br/><br/>
<a href="?bannerprint"><img src="thumbs/x-bannerprint.jpg" border="0"></a><br/><br/>
<a href="?chopu"><img src="thumbs/x-chopu.jpg" border="0"></a><br/><br/>
<a href="?country"><img src="thumbs/x-country.jpg" border="0"></a><br/><br/>
<a href="?cover"><img src="thumbs/x-cover.jpg" border="0"></a><br/><br/>
<a href="?eddie"><img src="thumbs/x-eddie.jpg" border="0"></a><br/><br/>
<a href="?eyes"><img src="thumbs/x-eyes.jpg" border="0"></a><br/><br/>
<a href="?pullingin"><img src="thumbs/x-pullingin.jpg" border="0"></a><br/><br/>
<a href="?sunset"><img src="thumbs/x-sunset.jpg" border="0"></a><br/><br/>
<a href="?ukulele"><img src="thumbs/x-ukulele.jpg" border="0"></a><br/><br/>
<a href="?undivided"><img src="thumbs/x-undivided.jpg" border="0"></a><br/><br/>
</div>
<div id="thumbs52">
<a href="?aloha"><img src="//i.imgur.com/quk3A78.png" width="50" height="50" border="0"></a><br/><br/>
<a href="?la"><img src="thumbs/x-la.jpg" border="0"></a><br/><br/>
<a href="?xp"><img src="thumbs/x-xp.jpg" border="0"></a><br/><br/>
<a href="?lighthouse"><img src="thumbs/x-lighthouse.jpg" border="0"></a><br/><br/>
<a href="?lipstick"><img src="thumbs/x-lipstick.jpg" border="0"></a><br/><br/>
<a href="?maui"><img src="thumbs/x-maui.jpg" border="0"></a><br/><br/>
<a href="?penciled"><img src="thumbs/x-penciled.jpg" border="0"></a><br/><br/>
<a href="?pipe"><img src="thumbs/x-pipe.jpg" border="0"></a><br/><br/>
<a href="?figure"><img src="thumbs/x-figure.jpg" border="0"></a><br/><br/>
<a href="?warhol"><img src="thumbs/x-warhol.jpg" border="0"></a><br/><br/>
<a href="?wavesketch"><img src="thumbs/x-wavesketch.jpg" border="0"></a><br/><br/>
<a href="?zim"><img src="thumbs/x-zim.jpg" border="0"></a><br/><br/>
</div>

<div id="main5">
	<?php

		if($_SERVER['QUERY_STRING']==''){
			echo "<h2>Welcome to the fine art gallery of Hodara Design.</h2>
			<p>I enjoy sketching, painting and printmaking. My subject matter includes primarily portraiture and surf art.</p>
			<p class='small'>&larr; click on those thumbnails to view work</p>";
		}
								elseif (isset($_GET['aloha'])){
			echo "<h2>Kualeho Carrying Sandalwood</h2><p></p><img src='//i.imgur.com/rkopfkV.png' width='500' /><br/><p class='small'>Linocut</p>";									}
								elseif (isset($_GET['aloha'])){
			echo "<h2>Aloha Ka Pu'uwai</h2><p></p><img src='//i.imgur.com/sP2dmcM.jpg' width='500' /><br/><p class='small'>Linocut</p>";									}
								elseif (isset($_GET['mavs'])){
			echo "<h2>Mavs</h2><p></p><img src='http://i.imgur.com/EAFKqDul.jpg' width='500' /><br/><p class='small'>Linocut</p>";									}

								elseif (isset($_GET['swirly'])){
			echo "<h2>Sunset Ghost</h2><p></p><img src=images/swirlysunset.jpg /><br/><p class='small'>Tools used: Linoleum cut on rice paper</p>";									}
								elseif (isset($_GET['noriega'])){
			echo "<h2>Noriega Tree</h2><p></p><img src=images/noriega.jpg /><br/><p class='small'>Tools used: Linoleum cut on rice paper</p>";									}
								elseif (isset($_GET['ob'])){
			echo "<h2>The Golden Gate</h2><p></p><img src=images/ob.jpg /><br/><p class='small'>Tools used: Linoleum cut on rice paper</p>";									}
								elseif (isset($_GET['backset'])){
			echo "<h2>backset</h2><p></p><img src=images/backset.jpg /><br/><p class='small'>Tools used: Watercolor</p>";									}

								elseif (isset($_GET['backside'])){
			echo "<h2>backside</h2><p></p><img src=images/backside.jpg /><br/><p class='small'>Tools used: Watercolor</p>";	}
								elseif (isset($_GET['bannerprint'])){
			echo "<h2>going right</h2><p></p><img src=images/bannerprint.jpg /><br/><p class='small'>Tools used:  Woodcut on rice paper</p>";	}
								elseif (isset($_GET['chopu'])){
			echo "<h2>chopu</h2><p></p><img src=images/chopu.jpg /><br/><p class='small'>Tools used: Linoleum cut on rice paper</p>";	}
								elseif (isset($_GET['country'])){
			echo "<h2>keep the country country</h2><p></p><img src=images/country.jpg /><br/><p class='small'>Tools used: Intaglio</p>";	}
								elseif (isset($_GET['cover'])){
			echo "<h2>cover monster</h2><p></p><img src=images/cover.jpg /><br/><p class='small'>Tools used: Illustrator</p>";	}
								elseif (isset($_GET['eddie'])){
			echo "<h2>nahele currency</h2><p></p><img src=images/eddie.jpg /><br/><br/><img src=images/eddie2.jpg /><br/><br/><img src=images/eddie3.jpg /><br/><br/><img src=images/eddie6.jpg /><br/><br/><img src=images/eddie5.jpg /><br/><p class='small'>Tools used:  Sketching, Illustrator, Photoshop</p>";	}
								elseif (isset($_GET['eyes'])){
			echo "<h2>eyes</h2><p></p><img src=images/eyes.jpg /><br/><img src=images/eyes3.jpg /><br/><p class='small'>Tools used: Screenprint onto sheet using chocolate, grass, wine, toothepaste, dirt and ash</p>";	}
								elseif (isset($_GET['figure'])){
			echo "<h2>figure</h2><p></p><img src=images/figure.jpg /><br/><p class='small'>Tools used: Charcoal, chalk</p>";	}


								elseif (isset($_GET['la'])){
echo "<h2>la</h2><p></p><img src=images/la.jpg /><br/><img src=images/la2.jpg /><br/><p class='small'>Tools used: Screenprint</p>";									}

								elseif (isset($_GET['lighthouse'])){
echo "<h2>lighthouse</h2><p></p><img src=images/lighthouse.jpg /><br/><p class='small'>Tools used: Watercolor</p>";									}

								elseif (isset($_GET['lipstick'])){
echo "<h2>lipstick</h2><p></p><img src=images/lipstick.jpg /><br/><p class='small'>Tools used:  Linoleum cut on rice paper</p>";									}

								elseif (isset($_GET['maui'])){
echo "<h2>maui</h2><p></p><img src=images/maui.jpg /><br/><p class='small'>Tools used: Intaglio</p>";									}

								elseif (isset($_GET['mauijoe'])){
echo "<h2>mauijoe</h2><p></p><img src=images/mauijoe.jpg /><br/><p class='small'>Tools used: Digital Illustration</p>";									}

								elseif (isset($_GET['pipe'])){
echo "<h2>pipe</h2><p></p><img src=images/pipe.jpg /><br/><p class='small'>Tools used:  Linoleum cut on rice paper</p>";									}
							elseif (isset($_GET['penciled'])){
echo "<h2>penciled in at pipe</h2><p></p><img src=images/penciled.jpg /><br/><p class='small'>Tools used: Watercolor</p>";									}

								elseif (isset($_GET['pullingin'])){
echo "<h2>pullingin</h2><p></p><img src=images/pullingin.jpg /><br/><p class='small'>Tools used: Acrylic and pen</p>";									}

								elseif (isset($_GET['sunset'])){
echo "<h2>sunset</h2><p></p><img src=images/sunset.jpg /><br/><p class='small'>Tools used:  Linoleum cut on rice paper</p>";									}

								elseif (isset($_GET['ukulele'])){
echo "<h2>ukulele</h2><p></p><img src=images/ukulele.jpg /><br/><p class='small'>Tools used: Pencil and Photoshop</p>";									}

								elseif (isset($_GET['undivided'])){
echo "<h2>undivided</h2><p></p><img src=images/undivided.jpg /><br/><p class='small'>Tools used: Acrylic</p>";									}

								elseif (isset($_GET['warhol'])){
echo "<h2>warhol</h2><p></p><img src=images/warhol1.jpg /><br/><img src=images/warhol2.jpg /><br/><img src=images/warhol3.jpg /><br/><p class='small'>Tools used: Screenprint</p>";									}

								elseif (isset($_GET['wavesketch'])){
echo "<h2>wavesketch</h2><p></p><img src=images/wavesketch.jpg /><br/><p class='small'>Tools used: Pen</p>";									}

								elseif (isset($_GET['xp'])){
echo "<h2>xp</h2><p></p><img src=images/xp.jpg /><br/><p class='small'>Tools used: Pencil</p>";									}

								elseif (isset($_GET['zim'])){
echo "<h2>zim</h2><p></p><img src=images/zim.jpg /><br/><p class='small'>Tools used: Mixed medium</p>";									}

								else {
									include '404.php';
									}



                        		?>


                                   </div>

   	<?php include '../footer.php'; ?>



