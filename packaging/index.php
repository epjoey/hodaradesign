   	<?php include '../header.php'; ?>
    
   <div id="sec-head"><a href="/packaging"><img src="../port/pack1.gif"></a></div>

<div id="thumbs21">
<p>Projects led</p>
<a href="?ca"><img src="thumbs/x-ca.jpg" border="0"></a><br/><br/> 
<a href="?walmart"><img src="thumbs/x-walmart.jpg" border="0"></a><br/><br/> 
<a href="?cake"><img src="thumbs/x-cake.jpg" border="0"></a><br/><br/> 
<a href="?family"><img src="thumbs/x-family.jpg" border="0"></a><br/><br/>  
</div>
<div id="thumbs22">
<p>Projects<br/>worked on</p>
<a href="?cod"><img src="thumbs/x-cod.jpg" border="0"></a><br/><br/> 
<a href="?csi"><img src="thumbs/x-csi.jpg" border="0"></a><br/><br/> 
<a href="?disney"><img src="thumbs/x-disney.jpg" border="0"></a><br/><br/> 
<a href="?gun"><img src="thumbs/x-gun.jpg" border="0"></a><br/><br/> 
<a href="?marooned"><img src="thumbs/x-marooned.jpg" border="0"></a><br/><br/> 
<a href="?mj"><img src="thumbs/x-mj.jpg" border="0"></a><br/><br/> 
<a href="?petpals"><img src="thumbs/x-petpals.jpg" border="0"></a><br/><br/> 
<a href="?sherlock"><img src="thumbs/x-sherlock.jpg" border="0"></a><br/><br/> 
<a href="?vampire"><img src="thumbs/x-vampire.jpg" border="0"></a><br/><br/> 
<a href="?zoo"><img src="thumbs/x-zoo.jpg" border="0"></a><br/><br/> 
</div>

<div id="main2">
	<?PHP 
                        		
                        		if($_SERVER['QUERY_STRING']=='/index.php'  || $_SERVER['QUERY_STRING']=='/'  || $_SERVER['QUERY_STRING']==''){
									echo "<h2>Welcome to the packaging gallery of Hodara Design</h2><p> I produced these pieces as an in-house package designer for a major software publisher.</p><p>A key element in package design is eye-catching graphics which is often what lures a possible customer towards a product. But the design must also be accurately representative of the products function.</p>
								<p class='small'>&larr; click on those thumbnails to view work</p>";
									}
								
								elseif (isset($_GET['ca'])){
			echo "<h2>clickart jewel case line</h2><p>ClickArt needed a line-look redesign in order to emphasize of the products value (amount of clip-art images inside the disc). Thus, I decided to cover the packaging with clip-art in a full yet elegant way.</p><img src=images/ca-wed.jpg></img><br/><img src=images/ca-hol.jpg></img><br/><img src=images/ca-chr.jpg></img><br/><img src=images/ca-kids.jpg></img><br/><img src=images/ca-scrap.jpg></img><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>";		
										}
								
								elseif (isset($_GET['walmart'])){
			echo "<h2>shooter game display case</h2><p>Walmart wanted a case that would display shooter games in an exciting way. I decided to wrap the case in a medley of key art.</p><img src=images/walmart.jpg></img><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>
";
				}	
								
								elseif (isset($_GET['cake'])){
			echo "<h2>cake mania-lights, camera, action!</h2><p>This package was to include three games in one. We also published the package in French.</p><img src=images/cake1.jpg></img><img src=images/cake2.jpg></img><br/><p class='small'>Tools used: Sketching, Illustrator, Photoshop</p>
";
				}
							
								elseif (isset($_GET['family'])){
			echo "<h2>family fued game box</h2><p></p><img src=images/family.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	
			}
							
								elseif (isset($_GET['cod'])){
			echo "<h2>call of duty ii jewel case</h2><p></p><img src=images/cod.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
							
							
								elseif (isset($_GET['csi'])){
			echo "<h2>csi: three dimensions of murder amaray case</h2><p></p><img src=images/csi.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
							
							
								elseif (isset($_GET['disney'])){
			echo "<h2>disney kids game jewel case</h2><p></p><img src=images/disney.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
			
			
			
								elseif (isset($_GET['gun'])){
			echo "<h2>gun shooter game</h2><p></p><img src=images/gun.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
			
			
								elseif (isset($_GET['marooned'])){
			echo "<h2>marooned</h2><p></p><img src=images/marooned.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
			
			
								elseif (isset($_GET['mj'])){
			echo "<h2>monster jam</h2><p></p><img src=images/mj.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
			
			
								elseif (isset($_GET['petpals'])){
			echo "<h2>pet pals</h2><p></p><img src=images/petpals.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
			
			
													
								elseif (isset($_GET['sherlock'])){
			echo "<h2>the lost cases of sherlock holmes</h2><p></p><img src=images/sherlock.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
							
								elseif (isset($_GET['vampire'])){
			echo "<h2>vampire: the masquerade bloodlines</h2><p></p><img src=images/vampire.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
							
								elseif (isset($_GET['zoo'])){
			echo "<h2>zoo vet jewel case</h2><p></p><img src=images/zoo.jpg></img><br/><p class='small'>Tools used: Illustrator, Photoshop</p>
";	}
							

								else {	
									include '404.php';
									}
                        		
                        		
                        		
                        		
                        		?>



</div> 
    
    

                   	<?php include '../footer.php'; ?>	