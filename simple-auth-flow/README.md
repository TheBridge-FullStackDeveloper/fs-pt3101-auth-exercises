## Simple auth flow exercise ✨🚀

El ejercicio consitirá en hacer un flujo básico de autenticación

### Antes que nada...

Renombra el fichero `.env.example` a `.env`

### Al lío!

- Crea un controlador para registrar al usuario (POST). Para registrarse necesitará email, username y password

Los pasos a seguir serán:

1. Verifica que la información que vas a usar para guardar al usuario, es enviada por el usuario (email, username y password)
2. Si la información no es enviada por el usuario, devolver algún error
3. Si la información sí existe, intentamos guardar dicha información en base de datos
4. Si la información ya existía, hay que devolver un error al usuario
5. Si la información no existe, se cifra la contraseña y se guarda el usuario
6. Enviamos un mail al usuario dándole la bienvenida por registrarse en nuestra aplicación
7. Devolvemos un código 200 al usuario junto con el mensaje success: true

- Crea un controlador para logear al usuario (POST). Para hacer login, podrá usar, independientemente, email o username y password

Los pasos a seguir serán:

1. Verifica que la información que vas a usar para logear al usuario, es enviada por el usuario (email o username y password)
2. Si falta password y email o username, devolver error al usuario
3. Si tenemos el password y email o username, intentamos buscar esa información en la base de datos
4. Si no encontramos a ese usuario buscándolo por email o username, devolvemos error al usuario
5. Si encontramos al usuario a través de email o username, verificamos si la contraseña guardada y cifrada en base de datos coincide con la contraseña recibida por el usuario
6. Si, después de compararlas, no coincide, devolvemos error al usuario
7. Si, después de compararlas, coincide, creamos un jwt con el email del usuario
8. Creamos una cookie, de nombre "access_token" donde metemos el jwt y le damos un tiempo de expiración de 1 hora. La hacemos "httpOnly" y definimos la opción "secure" a false
9. Tras todo esto, le devolvemos al usuario el código 200 con success: true

- Crea un controlador para que el usuario haga logout (POST). Para hacer logout, el usuario no necesitará mandar nada.

Los pasos a seguir serán:

1. Comprueba si existe una cookie, de nombre "access_token", en la petición del usuario
2. Comprueba que el contenido de la cookie (que debería ser el jwt que habías creado antes) exista y puedas verificarlo. Guarda el contenido del jwt en "res.locals" (haz para este punto y el anterior, un middleware)
3. Si algo de lo anterior no funciona como debería, devuelve un error al usuario
4. Borra la cookie
5. Devuelve un código 200 al usuario junto con un success: true

- Crea un controlador para que un usuario registrado y logeado pueda recuperar su información (Protege la ruta con un middleware para solo permitir el acceso a los usuarios registrados y logeados)

- Crea un controlador para que un usuario registrado y logeado pueda modificar su información (menos la contraseña) (Protege la ruta con un middleware para solo permitir el acceso a los usuarios registrados y logeados)
