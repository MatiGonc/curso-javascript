//Array Usuarios
const usuarios = [
	{
		nombreUsuario: "Admin",
		passwordUsuario: "password1234"
	},
	
	{
		nombreUsuario: "Admin2",
		passwordUsuario: "password5678"
	}
]

//Funcion Logear
function login() {
	let nombreUsuario = document.getElementById("logUsername").value;
	let passwordUsuario = document.getElementById("logPassword").value;

	for (i = 0; i < usuarios.length; i++) {
		if (nombreUsuario == usuarios[i].nombreUsuario && passwordUsuario == usuarios[i].passwordUsuario) {
			console.log("Acceso Permitido");
			return
		}
	}
	console.log("Nombre o constraseña incorrectos");
}

let loginUsuario = document.getElementById("logIn");
loginUsuario.onclick = login();


//Funcion Registrar
function registro() {
	let registrarUsuario = document.getElementById("newUsername").value;
	let registrarPassword = document.getElementById("newPassword").value;
	let nuevoUsuario = {
		nombreUsuario: registrarUsuario,
		passwordUsuario: registrarPassword
	}

	for (i = 0; i < usuarios.length; i++) {
		if (registrarUsuario == usuarios[i].nombreUsuario) {
			console.log("El nombre de usuario seleccionado no esta disponible");
			return
		} else if (registrarPassword.length < 8) {
			console.log("La contraseña debe tener mas de 8 caracteres");
		}
	}

	usuarios.push(nuevoUsuario);
	console.log(usuarios);
}

let crearUsuario = document.getElementById("crearUsuario");
crearUsuario.onclick = registro();


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
/*
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
*/
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



