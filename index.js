import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        String correoValido = "usuario@example.com";
        String correoInvalido = "usuario@example";

        System.out.println("Correo válido: " + validarCorreo(correoValido));
        System.out.println("Correo inválido: " + validarCorreo(correoInvalido));

        String consultaSQL = "SELECT * FROM usuarios WHERE username='usuario' AND password='password'";
        String entradaUsuario = "'; DROP TABLE usuarios; --";

        System.out.println("Consulta SQL segura: " + prevenirInyeccionSQL(consultaSQL));
        System.out.println("Entrada de usuario segura: " + prevenirInyeccionSQL(entradaUsuario));
    }

    // Función para verificar si una cadena es un correo electrónico válido
    public static boolean validarCorreo(String correo) {
        String regex = "^(.+)@(.+)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(correo);
        return matcher.matches();
    }

    // Función para prevenir inyecciones SQL
    public static String prevenirInyeccionSQL(String consulta) {
        return consulta.replaceAll("'", "''");
    }
}
