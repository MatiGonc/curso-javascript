//Primera Identificación
let nombreUsuario = prompt("Ingrese su nombre:");
if (nombreUsuario !=""){
	let mensajeBienvenida = "Bienvenido/a" + " " + nombreUsuario + "!";
	alert(mensajeBienvenida);
	console.log(mensajeBienvenida);
}else{
	console.log("Error: Nombre de usuario inválido.");
	alert("Error: Nombre de usuario inválido.");
}

//Comienzo del juego
alert("Bienvenidos a 'PREGUNTAS Y RESPUESTAS'!")
alert("Reglas: Tienes 3 intentos por pregunta, obtienes 1 punto por cada respuesta correcta.")

//Puntaje inicial
puntaje = 0

//Funciones
function pregunta(interrogante, solucion) {
	for (let i = 0; i < 3; i++){
		let respuesta = prompt(interrogante);
		if (respuesta == solucion){
			alert("Respuesta correcta!");
			puntaje++;
			break;
		}else {
			alert("Respuesta incorrecta!");
		}
	}
}

function mostrar(mensaje) {
	alert(`Puntaje: ${mensaje}`)
}

function subirNivel(nivel) {
	alert(`Has subido al nivel ${nivel}!`)
}

//1er pregunta
pregunta("¿Quien es el actor principal de la película 'Misión Imposible'?", "Tom Cruise");
mostrar(puntaje);

//2da pregunta
pregunta("¿Cual es el planeta mas caliente del Sistema Solar?", "Venus");
mostrar(puntaje);

//3er pregunta
pregunta("¿Cual es el río mas caudaloso del mundo?", "Amazonas");
mostrar(puntaje);

//Siguiente nivel
subirNivel(2);

//Creador de preguntas
class Preguntas {
	constructor (duda, resolucion) {
		this.duda = duda;
		this.resolucion = resolucion;
	}
	agregarPregunta () {
		pregunta(this.duda, this.resolucion);
	}
}

const pregunta4 = new Preguntas("¿Cuantos planetas hay en el Sistema Solar?", "8");
pregunta4.agregarPregunta();
mostrar(puntaje);

const pregunta5 = new Preguntas("¿Cual es el pais mas grande del mundo?", "Rusia");
pregunta5.agregarPregunta();
mostrar(puntaje);
