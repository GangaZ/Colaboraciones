window.addEventListener('load',init,false);
var canvas=null,ctx=null;
var x=50, y=50;
//var player=new Rectangle(40,40,10,10);
var lastKey=null;
var PAUSE=true;
var dir=0;


function init(){
	canvas=document.getElementById('canvas');
	canvas.style.background='#000';

	ctx=canvas.getContext('2d');

	run();
}
function run(){
	setTimeout(run,50);
	//x+=10;
	//if(x>canvas.width)
	//x=0;
	game();
	paint(ctx);
}
function game(){
	if(!PAUSE){
//cambia de direccion
	if(lastKey==38)
	dir=0;
	if(lastKey==39)
	dir=1;
	if(lastKey==40)
	dir=2;
	if(lastKey==37)
	dir=3;
	
//movemos el rectangulo
	if(dir==0)
	y-=10;
	if(dir==1)
	x+=10;
	if(dir==2)
	y+=10;
	if(dir==3)
	x-=10;
	
//si se sale de la pantalla lo regresamos
	if(x>canvas.width-10)
	x=0;
	if(y>canvas.height-10)
	y=0;
	if(x<0)
	x=canvas.width;
	if(y<0)
	y=canvas.height;
	}
// Pause/Unpause
  if(lastKey==13){
  PAUSE=!PAUSE;
  lastKey=null;
	}
}
function paint(ctx){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle='#0f0';
	ctx.fillRect(x,y,10,10);
	//ctx.fillText('Last Key: '+lastKey,0,20);
	if(PAUSE)
	ctx.fillText('PAUSE',140,75);
}

document.addEventListener('keydown',function(evt){
	lastKey=evt.keyCode;
},false);

/*function Rectangle(x,y,wdth,height){
	this.x=(x==null)?0:x;
	this.y=(y==null)?0:y;
	this.width=(width==null)?0:width;
	this.height=(height==null)?this.width:height;
	this.intersects=function(rect){
		if(rect!=null){
			return(this.x<rect.x+rect.width&&
			this.x+this.width>rect.x&&
			this.y<rect.y+rect.height&&
			this.y+this.height>rect.y
			);
		}
	}
}*/