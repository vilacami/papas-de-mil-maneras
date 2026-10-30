const formulario = document.getElementById("formulario-contacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const errorNombre = document.getElementById("error-nombre");
const errorCorreo = document.getElementById("error-correo");
const errorTelefono = document.getElementById("error-telefono");
const errorMensaje = document.getElementById("error-mensaje");
const resumen = document.getElementById("resumen");

const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formatoTelefono = /^\d{10}$/;

 function agregarDato(titulo, valor) {
    const parrafo = document.createElement("p");
    parrafo.textContent = titulo + ": " + valor;
    resumen.appendChild(parrafo);

    }

formulario.addEventListener("submit", function (e) {
    

    const nombreIngresado = nombre.value.trim();
    const correoIngresado = correo.value.trim();
    const telefonoIngresado = telefono.value.trim();
    const mensajeIngresado = mensaje.value.trim();
    let datosValidos = true;

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorTelefono.textContent = "";
    errorMensaje.textContent = "";

    if (nombreIngresado === "") {
        errorNombre.textContent = "Ingresá tu nombre.";
        datosValidos = false;
    } else if (nombreIngresado.length < 4 || nombreIngresado.length > 40) {
        errorNombre.textContent = "El nombre debe tener entre 4 y 40 caracteres.";
        datosValidos = false;
        nombreIngresado.textContent="";
        nombre.value = "";
    }

    if (correoIngresado === "") {
        errorCorreo.textContent = "Ingresá tu correo electrónico.";
        datosValidos = false;
    } else if (!formatoCorreo.test(correoIngresado)) {
        errorCorreo.textContent = "Escribí un correo válido, por ejemplo nombre@correo.com.";
        datosValidos = false;
        correo.value = "";

    }

    if (telefonoIngresado === "") {
        errorTelefono.textContent = "Ingresá tu teléfono.";
        datosValidos = false;
        
        
    } else if (!formatoTelefono.test(telefonoIngresado)) {
        errorTelefono.textContent = "El teléfono debe tener exactamente 10 dígitos, sin espacios ni guiones.";
        datosValidos = false;
        console.log(telefono);
        telefono.value = "";
    }

    if (mensajeIngresado === "") {
        errorMensaje.textContent = "Ingresá un mensaje.";
        datosValidos = false;
    } else if (mensajeIngresado.length < 10 || mensajeIngresado.length > 500) {
        errorMensaje.textContent = "El mensaje debe tener entre 10 y 500 caracteres.";
        datosValidos = false;
    }

    if (!datosValidos) {
        return;
    }

    resumen.innerHTML = "";
    const titulo = document.createElement("h2");
    titulo.textContent = "Resumen de tu consulta";
    resumen.appendChild(titulo);
    agregarDato("Nombre", nombreIngresado);
    agregarDato("Correo", correoIngresado);
    agregarDato("Teléfono", telefonoIngresado);
    agregarDato("Mensaje", mensajeIngresado);



    nombre.value = "";
    correo.value = "";
    telefono.value = "";
    mensaje.value = "";

});