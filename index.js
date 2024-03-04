(function () {
    'use strict';

    // Función para verificar si una cadena es un correo electrónico válido
    function validarCorreo(correo) {
        var regex = /^\S+@\S+\.\S+$/;
        return regex.test(correo);
    }

    // Función para prevenir la inyección de SQL en una cadena
    function prevenirInyeccionSQL(entrada) {
        // Eliminar caracteres peligrosos como comillas simples y dobles
        entrada = entrada.replace(/'/g, "");
        entrada = entrada.replace(/"/g, "");
        // Podrían agregarse más medidas de seguridad aquí según las necesidades específicas
        return entrada;
    }

    // Ejemplos de uso de las funciones
    var correoValido = "usuario@example.com",
        correoInvalido = "correoinvalido",
        consultaSQL = "SELECT * FROM usuarios WHERE username='",
        entradaUsuario = "'; DROP TABLE usuarios; --";

    console.log("Correo válido: " + validarCorreo(correoValido));
    console.log("Correo inválido: " + validarCorreo(correoInvalido));

    console.log("Consulta SQL segura: " + prevenirInyeccionSQL(consultaSQL));
    console.log("Entrada de usuario segura: " + prevenirInyeccionSQL(entradaUsuario));
})();


