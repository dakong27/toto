displayElements();

function displayElements() {
	$("head").prepend('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><script type="text/javascript" src="//www.totoknows.com/cors.js"></script>');

	//prepending this as static, for sake of argument
	
$("body").prepend('<p class="trackerPicture" id="mouseTracker"><p class="trackerPicture"><img src="http://www.totoknows.com/alexander-nsa.png"/></p><p class="trackerPicture"><img src="http://www.totoknows.com/howe-acxiom.png"/></p><p class="trackerPicture"><img src="http://www.totoknows.com/clapper-nsa.png"/></p></p>');
//	$("body").prepend('<p class="trackerPicture" id="mouseTracker" style="z-index:100;position:absolute"></p>');

	$("body").prepend('<div id="totoTickertape"><a href="http://www.totoknows.com"><div id="totoLogo"></div></a><div id="totoTweet"></div><div id="totoGo"></div><div id="totoClose"></div><div id="intro"><p class="left">Woof woof! Toto has information about 4 of the 15 companies tracking you now.</p><p class="right"><a href="#" class="startMarquee">Pull back the curtain!</a></p></div><div class="clear"></div><div id="start"><p>1.</p> <div class="trackerImg"><img src="http://trytobegood.com/toto/trackers/keith-alexander-010.jpg"></div> <p>NSA | Keith Alexander, Director</p> <div class="trackerNews"></div> <p>IN THE NEWS: <em>RSA issues non-denying denial of NSA deal to favor flawed crypto code - Ars Technica <small>(3 hours ago)</small></em></p><div class="totoCommunity"></div> <p>TOTO COMMUNITY: <em>Did you see this guy leave his doggy doodoo on his neighbor\'s lawn? Did you catch him acting nasty in public? Tell us about it! #totoknows </em><p><p>For More Information Visit: <a href="http://www.totoknows.com">www.totoknows.com</a></p><div class="clear"></div></div>');
	
	$("#totoTickertape a.startMarquee, #totoGo").click(function() {
		marquee();
	});
	
	$("#totoClose").click(function() {
		hideToto();
	});
}

function hideToto() {
	$("#totoTickertape").toggle();
}


function marquee() {
	$("#totoTickertape #totoTweet, #totoTickertape #totoGo, #totoTickertape #start, #totoTickertape #intro").toggle();
    $("div#start").animate({ "margin-left": "-100%" }, 100000, 'linear');   
}
