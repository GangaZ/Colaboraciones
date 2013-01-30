//agregamos un escucha a nuestra ventana, para que en cuanto termine de cargar la p�gina,
// comience a ejecutar �init� (Que es donde comenzamos nuestro c�digo). Debajo, creamos
//dos variables nulas donde guardaremos nuestro canvas y su contexto.
window.addEventListener('load', init, false);
var canvas = null, ctx = null;

//Posteriormente empezamos nuestra funci�n �init�. En la primer l�nea, obtenemos nuestro
// lienzo busc�ndolo por su ID �canvas� (Si pusiste otro nombre a tu lienzo, es aqu�
//donde debes poner el mismo nombre). En la l�nea de abajo cambiamos el color de fondo
//del lienzo, d�ndole un n�mero hexadecimal, en este caso, gris. Puedes cambiarlo a tu
//gusto, acepta cualquier valor entre '#000' y '#fff'.
function init() {
	canvas = document.getElementById('canvas');
	canvas.style.background = '#999';
	//	Despu�s de esto, obtenemos el contexto 2D de nuestro lienzo. Necesitamos este
	//contexto ya que es nuestra herramienta para pintar dentro del lienzo.
	ctx = canvas.getContext('2d');
	//Por �ltimo, llamamos a la funci�n �paint�, pas�ndole dicho contexto para dibujar en �l.
	paint(ctx);
}

//La �ltima parte es nuestra funci�n �paint�. Aqu� indicamos que usaremos como color de
//relleno '#0f0' (verde), y debajo, rellenamos un rect�ngulo desde la posici�n X,Y 50,50,
// con 100 de ancho y 60 de alto.
function paint(ctx) {
	ctx.fillStyle = '#0f0';
	ctx.fillRect(50, 50, 100, 60);
}

