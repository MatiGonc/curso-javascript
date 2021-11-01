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
puntaje = 0

//1er pregunta
const actor = "Tom Cruise";
for (let i = 0; i < 3; i++){
	let respuesta = prompt("Actor principal de la película Mision Imposible:");
	if (respuesta == actor){
		alert("Respuesta correcta!");
		puntaje++;
		break;
	}else {
		alert("Respuesta incorrecta!");
	}
}

//2da pregunta
const planeta = "Venus"
for (let i = 0; i < 3; i++){
	let respuesta = prompt("Planeta mas caliente del sistema solar:");
	if (respuesta == planeta){
		alert("Respuesta correcta!");
		puntaje++;
		break;
	}else {
		alert("Respuesta incorrecta!");
	}
}

//3er pregunta
const rio = "Amazonas"
for (let i = 0; i < 3; i++){
	let respuesta = prompt("Rio mas caudaloso del mundo:");
	if (respuesta == rio){
		alert("Respuesta correcta!");
		puntaje++;
		break;
	}else {
		alert("Respuesta incorrecta!");
	}
}
