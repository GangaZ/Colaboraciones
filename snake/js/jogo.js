//agregamos un escucha a nuestra ventana, para que en cuanto termine de cargar la página,
// comience a ejecutar “init” (Que es donde comenzamos nuestro código). Debajo, creamos
//dos variables nulas donde guardaremos nuestro canvas y su contexto.
window.addEventListener('load', init, false);
var canvas = null, ctx = null;

//Posteriormente empezamos nuestra función “init”. En la primer línea, obtenemos nuestro
// lienzo buscándolo por su ID “canvas” (Si pusiste otro nombre a tu lienzo, es aquí
//donde debes poner el mismo nombre). En la línea de abajo cambiamos el color de fondo
//del lienzo, dándole un número hexadecimal, en este caso, gris. Puedes cambiarlo a tu
//gusto, acepta cualquier valor entre '#000' y '#fff'.
function init() {
	canvas = document.getElementById('canvas');
	canvas.style.background = '#999';
	//	Después de esto, obtenemos el contexto 2D de nuestro lienzo. Necesitamos este
	//contexto ya que es nuestra herramienta para pintar dentro del lienzo.
	ctx = canvas.getContext('2d');
	//Por último, llamamos a la función “paint”, pasándole dicho contexto para dibujar en él.
	paint(ctx);
}

//La última parte es nuestra función “paint”. Aquí indicamos que usaremos como color de
//relleno '#0f0' (verde), y debajo, rellenamos un rectángulo desde la posición X,Y 50,50,
// con 100 de ancho y 60 de alto.
function paint(ctx) {
	ctx.fillStyle = '#0f0';
	ctx.fillRect(50, 50, 100, 60);
}

