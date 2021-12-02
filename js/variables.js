let inputUsuario = document.getElementById("logIn");
let input = document.createElement("input");
inputUsuario.appendChild(input);

let botonUsuario = document.getElementById("botonUsuario");
botonUsuario.onclick = () => {
	localStorage.setItem("nombre", `${input}`);
	alert(`Bienvenido/a a "Conocimiento Cósmico" ${input}, comencemos esta aventura!`);
	
}


//Primera Identificación
/*let nombreUsuario = "";
let botonUsuario = document.getElementById("botonUsuario");
botonUsuario.onclick = () => {
	do {
		nombreUsuario = prompt("Ingrese su nombre de usuario:")
	}while (nombreUsuario === "");
	alert(`Bienvenido/a a "Conocimiento Cósmico" ${nombreUsuario}, comencemos esta aventura!`);
	alert("Reglas: Tienes 3 intentos por pregunta, obtienes 1 punto por cada respuesta correcta.");
};*/

//Puntaje inicial
let puntaje = 0;

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

//Ordenar Array
preguntas.sort();
console.log(preguntas.sort());

preguntas.sort(function (a,b) {
	if (a.resolucion > b.resolucion){
		return 1;
	}
	if (a.resolucion < b.resolucion){
		return -1;
	}
	return 0;
});
console.log(preguntas.sort());

//DOM
let insertarPreguntas = document.getElementById("juego");
for (const pregunta of preguntas){
	let p = document.createElement("p");
	p.innerHTML = pregunta.duda;
	insertarPreguntas.appendChild(p);

	let button = document.createElement("button");
	button.innerHTML = "Responder";
	insertarPreguntas.appendChild(button);
	button.onclick = () => pregunta.agregarPregunta();
	
}



