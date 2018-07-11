window.addEventListener("scroll", function(event) { /* se queda esperando que suceda el evento */
	// console.log(window.scrollY);
	if (window.scrollY > 210) {
		document.getElementById("boton_arriba").style.display = "block";
	} else {
		document.getElementById("boton_arriba").style.display = "none";
	}
});

function enviarMensaje(e) {
	if (document.getElementById("nombre"). value != "" &&
		document.getElementById("email"). value != "" &&
		document.getElementById("mensaje"). value != "") {
		alert("Mensaje enviado");
	} else {
		e.preventDefault();
		alert(" Falta completar campo");
	}
	
}

function toTop() {
	window.scroll(0, 0);
}