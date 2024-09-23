function mostrarCampo() {
    // Seleccionamos el div donde se insertará el campo dinámico
    const campoDinamico = document.getElementById("campo-dinamico");

    // Vaciamos el contenido del campo antes de agregar otro
    campoDinamico.innerHTML = "";

    // Verificamos qué opción está seleccionada
    if (document.getElementById("correo").checked) {
        // Mostrar el campo para el correo electrónico
        campoDinamico.innerHTML = `
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required><br><br>
        `;
    } else if (document.getElementById("llamada").checked) {
        // Mostrar el campo para el número de teléfono
        campoDinamico.innerHTML = `
            <label for="telefono">Número de teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required><br><br>
        `;
    } else if (document.getElementById("whatsapp").checked) {
        // Mostrar el campo para WhatsApp
        campoDinamico.innerHTML = `
            <label for="whatsapp-numero">Número de WhatsApp:</label>
            <input type="tel" id="whatsapp-numero" name="whatsapp-numero" required><br><br>
        `;
    }
}

// Seleccionar el formulario
const formularioContacto = document.getElementById('contacto-form');

// Agregar un evento al formulario cuando se envíe
formularioContacto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Mostrar la alerta en pantalla
    alert('La solicitud fue enviada, nos comunicaremos cuanto antes.');

    // Reiniciar el formulario después de la alerta (opcional)
    formularioContacto.reset();
});
