//Primera Identificación
let nombreUsuario = prompt("Ingrese su nombre de usuario:");
if (nombreUsuario !=""){
	alert("Acceso concedido.");
}else{
	console.log("Error: Nombre de usuario inválido.");
	alert("Error: Nombre de usuario inválido.");

}

//Comienzo del juego
alert(`Bienvenido/a a "Conocimiento Cósmico" ${nombreUsuario}, comencemos esta aventura!`);
alert("Reglas: Tienes 3 intentos por pregunta, obtienes 1 punto por cada respuesta correcta.");

//Puntaje inicial
puntaje = 0;

//Funcion mostrar puntaje
function mostrar(mensaje) {
	alert(`Puntaje: ${mensaje}`)
}

//Funcion realizar pregunta
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
	mostrar(puntaje);
}

//Creador de preguntas
class Pregunta {
	constructor (duda, resolucion) {
		this.duda = duda;
		this.resolucion = resolucion;
	}
	agregarPregunta () {
		pregunta(this.duda, this.resolucion);
	}
}

//Array preguntas
const preguntas = [];
preguntas.push(new Pregunta("¿Quien es el actor principal de la película 'Misión Imposible'?", "Tom Cruise"));
preguntas.push(new Pregunta("¿Cual es el planeta mas caliente del Sistema Solar?", "Venus"));
preguntas.push(new Pregunta("¿Cual es el río mas caudaloso del mundo?", "Amazonas"));
preguntas.push(new Pregunta("¿Cuantos planetas hay en el Sistema Solar?", "8"));
preguntas.push(new Pregunta("¿Cual es el pais mas grande del mundo?", "Rusia"));

for (const pregunta of preguntas)
	pregunta.agregarPregunta();


