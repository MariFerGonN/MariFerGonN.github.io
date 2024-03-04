document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('login-form');
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    formulario.addEventListener('submit', function (event) {
        if (!validarCorreo(emailInput.value)) {
            emailError.textContent = 'Por favor ingresa un correo electrónico válido.';
            event.preventDefault(); // Evita que el formulario se envíe si la validación falla
        }
    });

    emailInput.addEventListener('blur', function () {
        if (emailInput.value !== '' && !validarCorreo(emailInput.value)) {
            emailError.textContent = 'Por favor ingresa un correo electrónico válido.';
        } else {
            emailError.textContent = '';
        }
    });

    // Función para verificar si una cadena es un correo electrónico válido
    function validarCorreo(correo) {
        var regex = /^\S+@\S+\.\S+$/;
        return regex.test(correo);
    }
});

