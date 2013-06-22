// JavaScript Document
var hovering = false;

function Clear() {
	for (i=1;i<=6;i++) {
		$("#blurb"+i).stop(true, true).fadeOut(100);
		$("#icon"+i).css('background-position', '0 0');
	}

};

function Show(who) {
	Clear();
	$("#blurb"+who).stop(true, true).fadeIn('fast');
	$("#icon"+who).css('background-position', '0 -41px');
	hovering = true;

};

function pulseInt () {
		Pulse(1);
        var iCounter = 2;
        var interValKey = null;
        interValKey = setInterval(function(){
			  if (!hovering) {
			  Pulse(iCounter); 
			  iCounter++; }
			  if(iCounter > 6){
			  iCounter = 1
			  }
        }, 6000);
	}

function Pulse(iCounter) {
	Clear();
	$("#blurb"+iCounter).stop(true, true).fadeIn('fast');
	$("#icon"+iCounter).css('background-position', '0 -41px');
};

$(window).load(function () {
	pulseInt();
	});
