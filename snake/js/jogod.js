window.addEventListener('load', init, false);
var canvas = null, ctx = null;
var lastKey = null;
var PAUSE = true, GAMEOVER = true;
var body = new Array();
var food = new Rectangle(80, 80, 10, 10);
var dir = 0, score = 0;
var iBody=new Image(),iFood=new Image();
var aEat=new Audio(),aDie=new Audio();

iBody.src='media/body.png';
iFood.src='media/fruit.png';

aEat.src='media/chomp.aac';
aDie.src='media/dies.aac';
//var wall= new Array();

/*wall.push(new Rectangle(100,50,10,10));
 wall.push(new Rectangle(100,100,10,10));
 wall.push(new Rectangle(200,50,10,10));
 wall.push(new Rectangle(200,100,10,10));*/

function random(max) {
	return parseInt(Math.random() * max);
}

function init() {
	canvas = document.getElementById('canvas');
	canvas.style.background = '#000';
	ctx = canvas.getContext('2d');
	run();
}

function run() {
	setTimeout(run, 50);
	game();
	paint(ctx);
}

function reset() {
	score = 0;
	dir = 1;
	body.length = 0;
	body.push(new Rectangle(40, 40, 10, 10));
	body.push(new Rectangle(0, 0, 10, 10));
	body.push(new Rectangle(0, 0, 10, 10));
	food.x = random(canvas.width / 10 - 1) * 10;
	food.y = random(canvas.height / 10 - 1) * 10;
	GAMEOVER = false;

}

function game() {
	if (!PAUSE) {
		//GemOver Reset
		if (GAMEOVER)
			reset();

		//move Body
		for ( i = body.length - 1; i > 0; i--) {
			body[i].x = body[i - 1].x;
			body[i].y = body[i - 1].y;
		}

		// Change Direction
		if (lastKey == 38&&dir!=2)
			dir = 0;
		if (lastKey == 39&&dir!=3)
			dir = 1;
		if (lastKey == 40&&dir!=0)
			dir = 2;
		if (lastKey == 37&&dir!=1)
			dir = 3;

		// Move Rect
		if (dir == 0)
			body[0].y -= 10;
		if (dir == 1)
			body[0].x += 10;
		if (dir == 2)
			body[0].y += 10;
		if (dir == 3)
			body[0].x -= 10;

		// Out Screen
		if (body[0].x > canvas.width - body[0].width)
			body[0].x = 0;
		if (body[0].y > canvas.height - body[0].height)
			body[0].y = 0;
		if (body[0].x < 0)
			body[0].x = canvas.width - body[0].width;
		if (body[0].y < 0)
			body[0].y = canvas.height - body[0].height;

		// Food Intersects
		if (body[0].intersects(food)) {
			body.push(new Rectangle(0, 0, 10, 10));
			score++;
			food.x = random(canvas.width / 10 - 1) * 10;
			food.y = random(canvas.height / 10 - 1) * 10;
			aEat.play();
		}

		/*//Wall Intersects
		for(i=0;i<wall.length;i++){
		if(food.intersects(wall[i])){
		food.x=random(canvas.width/10-1)*10;
		food.y=random(canvas.height/10-1)*10;
		}

		if(body[0].intersects(wall[i])){
		GAMEOVER=true;
		PAUSE=true;
		}
		}*/

		//body intersects
		for ( i = 2; i < body.length; i++) {
			if (body[0].intersects(body[i])) {
				GAMEOVER = true;
				PAUSE = true;
				aDie.play();
			}
		}
	}
	// Pause/Unpause
	if (lastKey == 13) {
		PAUSE = !PAUSE;
		lastKey = null;
	}
}

function paint(ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for ( i = 0; i < body.length; i++) {
		//ctx.fillRect(body[i].x, body[i].y, body[i].width, body[i].height);
		ctx.drawImage(iBody,body[i].x, body[i].y);
	}
	/*ctx.fillStyle='#999';
	 for(i=0;i<wall.length;i++){
	 ctx.fillRect(wall[i].x,wall[i].y,wall[i].width,wall[i].height);
	 }*/

	 /*ctx.fillStyle='#f00';
	 ctx.fillRect(food.x,food.y,food.width,food.height);*/
	ctx.drawImage(iFood,food.x,food.y);
	
	ctx.fillStyle = '#fff';

	ctx.fillText('Score: ' + score, 0, 10);
	if (PAUSE) {
		ctx.textAlign = 'center';
		if (GAMEOVER)
			ctx.fillText('GAME OVER', 150, 75);
		else
			ctx.fillText('PAUSE', 150, 75);
		ctx.textAlign = 'left';
	}

}

document.addEventListener('keydown', function(evt) {
	lastKey = evt.keyCode;
}, false);

function Rectangle(x, y, width, height) {
	this.x = (x == null) ? 0 : x;
	this.y = (y == null) ? 0 : y;
	this.width = (width == null) ? 0 : width;
	this.height = (height == null) ? this.width : height;

	this.intersects = function(rect) {
		if (rect != null) {
			return (this.x < rect.x + rect.width && this.x + this.width > rect.x && this.y < rect.y + rect.height && this.y + this.height > rect.y);
		}
	}
}