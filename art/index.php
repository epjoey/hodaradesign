<?php include '../header.php'; ?>
<div id="portpage">
  <div style="clear:both; height:10px;"></div>
  <div id="sliderwrap">

    <div id="bookcontainer">
      <img class="book" src="../images/slide8.jpg" onclick="window.location = '/fineart/?chopu'" />
      <img class="book" src="../images/slide1.jpg" onclick="window.location = '/packaging/?ca'" />
      <img class="book" src="../images/slide12.jpg" onclick="window.location = '/posters/?fecal'" />
      <img class="book" src="../images/slide13.jpg" onclick="window.location = '/web/?wtx'"  />
      <img class="book" src="../images/slide7.jpg" onclick="window.location = '/posters/?mochi'" />

    </div>

    <img id="rarrow" class="arrow" src="../images/rarrow.png" onclick="right()" />
    <img id="larrow" class="arrow" src="../images/larrow.png" onclick="left()" />

  </div>


  <script type="text/javascript" src="/js/flade.js"></script>

	<div id="portbuttons">

	  <img src="welcome.gif" id="welcome-img">

    <div id="port1"><a href="/identities">
      <img src="vis1.gif" class="roll6" />
      <img src="vis2.gif" /></a>
    </div>

 	  <div id="port2"><a href="/packaging" >
      <img src="pack1.gif" class="roll7" />
      <img src="pack2.gif" /></a>
    </div>

	  <div id="port3"><a href="/posters">
      <img src="ppp1.gif" class="roll8" />
      <img src="ppp2.gif"  /></a>
		</div>

    <div id="port4"><a href="/web">
      <img src="web1.gif" class="roll9" />
      <img src="web2.gif"  /></a>
    </div>


    <div id="port5"><a href="/fineart" >
      <img src="fine1.gif" class="roll10" />
      <img src="fine2.gif" /></a>
    </div>
  </div>
</div>

<script type="text/javascript">

  $(".roll6").hover(
  function() {
  $(this).attr("src", "vis2.gif");
  },
  function() {
  $(this).attr("src", "vis1.gif");
  });

  $(".roll7").hover(
  function() {
  $(this).attr("src", "pack2.gif");
  },
  function() {
  $(this).attr("src", "pack1.gif");
  });

  $(".roll8").hover(
  function() {
  $(this).attr("src", "ppp2.gif");
  },
  function() {
  $(this).attr("src", "ppp1.gif");
  });

  $(".roll9").hover(
  function() {
  $(this).attr("src", "web2.gif");
  },
  function() {
  $(this).attr("src", "web1.gif");
  });

  $(".roll10").hover(
  function() {
  $(this).attr("src", "fine2.gif");
  },
  function() {
  $(this).attr("src", "fine1.gif");
  });

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

<?php include '../footer.php'; ?>
