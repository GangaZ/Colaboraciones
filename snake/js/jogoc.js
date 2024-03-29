window.addEventListener('load', init, false);
var canvas = null, ctx = null;
var lastKey = null;
var PAUSE = true;
var dir = 0;
var score = 0;
var player = new Rectangle(40, 40, 10, 10);
var food = new Rectangle(80, 80, 10, 10);

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

function game() {
	if (!PAUSE) {
		// Change Direction
		if (lastKey == 38)
			dir = 0;
		if (lastKey == 39)
			dir = 1;
		if (lastKey == 40)
			dir = 2;
		if (lastKey == 37)
			dir = 3;

		// Move Rect
		if (dir == 0)
			player.y -= 10;
		if (dir == 1)
			player.x += 10;
		if (dir == 2)
			player.y += 10;
		if (dir == 3)
			player.x -= 10;

		// Out Screen
		if (player.x > canvas.width-10)
			player.x = 0;
		if (player.y > canvas.height-10)
			player.y = 0;
		if (player.x < 0)
			player.x = canvas.width;
		if (player.y < 0)
			player.y = canvas.height;

		// Food Intersects
		if (player.intersects(food)) {
			score++;
			food.x = random(canvas.width / 10 - 1) * 10;
			food.y = random(canvas.height / 10 - 1) * 10;
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
	ctx.fillStyle = '#0f0';
	ctx.fillRect(player.x, player.y, player.width, player.height);
	ctx.fillStyle = '#f00';
	ctx.fillRect(food.x, food.y, food.width, food.height);
	ctx.fillStyle = '#fff';
	//ctx.fillText('Last Key: '+lastKey,0,20);
	ctx.fillText('Score: ' + score, 0, 10);
	if (PAUSE)
		ctx.fillText('PAUSE', 140, 75);
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