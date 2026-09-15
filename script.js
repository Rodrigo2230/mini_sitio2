function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const extra = document.getElementById("extra");

    mensaje.textContent = "¡Gracias por hacer clic en el botón!";
    extra.textContent = "Este es un texto adicional.";
}

function mostrarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();

    alert("La hora actual es: " + hora);
}