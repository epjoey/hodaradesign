// JavaScript Document


$(window).load( function () {
$('#sliderwrap').css({'background': 'none'});
 showBook();
 setTimeout (startFade, 1000); });

var fade;

$('#sliderwrap').hover(	
	function() {
    $('.arrow').show();
	}, 
	function() {
    $('.arrow').hide();
	}
	);

function showBook() {
	$('.book').last().fadeIn(1000);

}



function startFade() {
    fade = setInterval(fadeR, 6000);   
}


function fadeR() {
	$('.book').last().fadeOut(1000);
    $('.book').first().appendTo('#bookcontainer').fadeIn(1000);

}


function fadeL() {
   $('.book').last().fadeOut(1000).prependTo('#bookcontainer');
	$('.book').last().fadeIn(1000);	

}


function right() {
    clearInterval(fade);
    fadeR();
    startFade();
};


function left() {
    clearInterval(fade);
    fadeL();
    startFade();
};


