var trackerPicture = document.getElementsByClassName("trackerPicture");

if (document.getElementById&&!document.layers){

	// *** Controls
	del=0.2;  //Follow mouse speed.
	ref=20;   //Run speed (timeout).

	var ieType=(typeof window.innerWidth != 'number');
	var docComp=(document.compatMode);
	var docMod=(docComp && docComp.indexOf("CSS") != -1);
	var ieRef=(ieType && docMod)
	?document.documentElement:document.body;

	ofy=-7;
	ofx=-3;
	ofst=70;
	tmr=null;
	vis=true;
	mouseY=0;
	mouseX=0;

	dy=new Array();
	dx=new Array();
	zy=new Array();
	zx=new Array();
	var sum=trackerPicture.length;

	for (i=0; i < sum; i++){
		dy[i]=0;
		dx[i]=0;
		zy[i]=0;
		zx[i]=0;
	}
	function mouse(e){
	var msy = (!ieType)?window.pageYOffset:0;
	if (!e) e = window.event;  
	  mouseY = e.pageY + ofst - msy;
	  mouseX = e.pageX + ofst;
	}

	document.onmousemove=mouse;

	function winDims(){
		winH=(ieType)?ieRef.clientHeight:window.innerHeight; 
		winW=(ieType)?ieRef.clientWidth:window.innerWidth;
	}

	winDims();
	window.onresize=new Function("winDims()");

	function PositionAssign(){
		for (var i = 0; i < sum; i++){
			zy[0]=Math.round(dy[0]+=((mouseY)-dy[0])*del)-100;
			zx[0]=Math.round(dx[0]+=((mouseX)-dx[0])*del)-100;
			trackerPicture[i].style.marginLeft =  ofx + zx[i] + ofx + (30*i) + "px";
			trackerPicture[i].style.marginTop = ofy + zy[i] + scrollY + "px";
		}

		//* HIDE THE FIRST DIV
		trackerPicture[0].style.display ="none";

		if (!vis) clearTimeout(tmr);
	}

	buffW=(ieType)?80:90;

	function Delay(){
		scrollY=(ieType)?ieRef.scrollTop:window.pageYOffset;
		if (!vis){
			 dy[0]=100;
			 dx[0]=100;
		}
		else{
			 zy[0]=Math.round(dy[0]+=((mouseY)-dy[0])*del)-100;
			 zx[0]=Math.round(dx[0]+=((mouseX)-dx[0])*del)-100;
		}
		for (i=1; i < sum; i++){
			 if (!vis){
			  dy[i]=-100;
			  dx[i]=-100;
			 }
			 else{
			  zy[i]=Math.round(dy[i]+=(zy[i-1]-dy[i])*del);
			  zx[i]=Math.round(dx[i]+=(zx[i-1]-dx[i])*del);
			 }
			if (dy[i-1] >= winH-80) dy[i-1]=winH-80;
			if (dx[i-1] >= winW-buffW) dx[i-1]=winW-buffW;
		}

		tmr=setTimeout('Delay()',ref);
		PositionAssign();
	}

	window.onload=Delay;
}
