## Auth

Vamos a crear un sistema básico de login/logout

### Pasos

- Quitar todo lo que no necesitamos de lo que nos crea CRA
- Crear directorio `pages`, `components`, `services`, `utils` y `store`
- Crear componentes para las páginas (`pages`):
  - `home`
  - `login`
  - `user`
- Crear componentes reutilizables (`components`):
  - `header`
  - `footer`
  - ...los que consideres que puedas necesitar
- Crear lo siguiente en store:
  - `Context`
  - hook para poder gestionar tiempos de carga, autenticar, hacer logout y obtener información del usuario
  - `Provider`
- Crear funciones en utils para guardar y obtener información de `localStorage`
- Crea los siguientes servicios:
  - Hacer login
  - Traer información del usuario
  - Hacer logout

### Comportamiento

- Sin haber hecho login, no debemos poder acceder a nuestra página de usuario
- La página de usuario debe mostrar la información obtenida de la bbdd
- Habrá un botón para hacer logout en la página de usuario. Cuando hagamos click sobre este botón, además de hacer la petición de logout, deberemos eliminar el token del localStorage cuando obtengamos una respuesta satisfactoria del back y redirigir a la home
- El componente header tendrá un botón de login si no estamos logados. haciendo click en él seremos redirigidos a `/login`
- El componente header tendrá nuestro username donde estaba el botón de login si estamos logados. Haciendo click en él nos redirigirá a `/user`
- Si intentamos entrar en /user directamente y no estamos logados, la aplicación nos redirigirá a `/login`
- Si vamos a cualquier otra ruta y ésta no existe, la aplicación nos redirigirá a `/home`
- Debe haber, en todo momento, un header y un footer en todas las páginas
- La página de login tendrá un pequeño formulario con dos inputs, el primero para `email` y el segundo para la `contraseña`. Usa [react-hook-form](https://react-hook-form.com/get-started) para ello
