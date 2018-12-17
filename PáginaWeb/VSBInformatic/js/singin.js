window.onload = cargarEventos;

function cargarEventos(){

document.getElementById("formulario").addEventListener("submit",validar,false);


}

function validar(){
var name = event.target.name.value;
var surname = event.target.ape.value;
var username = event.target.ape2.value;
var Email = event.target.email.value;
var password = event.target.pwd.value;
var confirm_password = event.target.pwd2.value;
var address = event.target.address.value;
var comment = event.target.comment.value;
var Age = event.target.edad.value;
if (nombre == "") {
event.preventDefault();
document.getElementById("error1").style.visibility = "visible";
}else{
document.getElementById("error1").style.visibility = "hidden";
}

if (Primer_Apellido == "") {
event.preventDefault();
document.getElementById("error2").style.visibility = "visible";
}else{
document.getElementById("error2").style.visibility = "hidden";
}

if (Segundo_Apellido == "") {
event.preventDefault();
document.getElementById("error3").style.visibility = "visible";
}else{
document.getElementById("error3").style.visibility = "hidden";
}

if (Edad == "") {
event.preventDefault();
document.getElementById("error13").style.visibility = "visible";

}else{
document.getElementById("error13").style.visibility = "hidden";
}

if (Edad<18 || Edad>90){
if (Edad != ""){
document.getElementById("error12").style.visibility = "visible";
}

}else{
document.getElementById("error12").style.visibility = "hidden";
}

if (Email == "") {
event.preventDefault();
document.getElementById("error4").style.visibility = "visible";
}else{
document.getElementById("error4").style.visibility = "hidden";
}

if (Contraseña == "") {
event.preventDefault();
document.getElementById("error5").style.visibility = "visible";;
}else{
document.getElementById("error5").style.visibility = "hidden";
}

if (Repetir_Contraseña == "") {
event.preventDefault();
document.getElementById("error6").style.visibility = "visible";;
}else{
document.getElementById("error6").style.visibility = "hidden";
}

if (Direccion == "") {
event.preventDefault();
document.getElementById("error7").style.visibility = "visible";;
}else{
document.getElementById("error7").style.visibility = "hidden";
}

if(!Estudiante.checked && !Parado.checked && !Trabajador.checked){
event.preventDefault();
document.getElementById("error9").style.visibility = "visible";
}else{
document.getElementById("error9").style.visibility = "hidden";
}

if (Ciudad == "0") {
event.preventDefault();
document.getElementById("error10").style.visibility = "visible";
}else{
document.getElementById("error10").style.visibility = "hidden";
}

if (Texto == "") {
event.preventDefault();
document.getElementById("error11").style.visibility = "visible";
}else{
document.getElementById("error11").style.visibility = "hidden";
}


}