document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (event) {
        // Validación del correo electrónico
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault(); // Evitar que el formulario se envíe
            emailError.textContent = 'Por favor ingrese un correo electrónico válido.';
            emailInput.focus();
            return;
        } else {
            emailError.textContent = ''; // Limpiar mensaje de error si es válido
        }

        // Validación de la contraseña
        if (!isValidPassword(passwordInput.value)) {
            event.preventDefault(); // Evitar que el formulario se envíe
            passwordError.textContent = 'La contraseña no puede contener caracteres especiales.';
            passwordInput.focus();
            return;
        } else {
            passwordError.textContent = ''; // Limpiar mensaje de error si es válida
        }

        // Mostrar mensaje de usuario registrado en la consola
        console.log('Usuario registrado exitosamente.');

        // Si todo está bien, el formulario se enviará normalmente
    });

    // Función para verificar si una cadena es un correo electrónico válido
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Función para verificar si la contraseña contiene caracteres especiales
    function isValidPassword(password) {
        const regex = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
        return !regex.test(password);
    }
});
