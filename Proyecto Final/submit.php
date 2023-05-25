<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtener los valores del formulario
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $telefono = $_POST['telefono'];
  $edad = $_POST['edad'];
  $genero = $_POST['genero'];
  $comentario = $_POST['comentario'];

  // Destinatario del correo
  $destinatario = 'ericvelazquez3f@gmail.com';

  // Asunto del correo
  $asuntoCorreo = 'Nueva sugerencia sobre venta de videojuegos';

  // Construir el cuerpo del correo
  $cuerpoCorreo = "Nombre: $nombre\n";
  $cuerpoCorreo .= "Correo electrónico: $correo\n";
  $cuerpoCorreo .= "Teléfono: $telefono\n";
  $cuerpoCorreo .= "Edad: $edad\n";
  $cuerpoCorreo .= "Género: $genero\n";
  $cuerpoCorreo .= "Comentario:\n$comentario\n";

  // Enviar el correo
  $resultado = mail($destinatario, $asuntoCorreo, $cuerpoCorreo);

  // Verificar si el correo se envió exitosamente
  if ($resultado) {
    echo 'Gracias por tu sugerencia. Nos pondremos en contacto contigo si es necesario.';
  } else {
    echo 'Ha ocurrido un error al enviar la sugerencia. Por favor, inténtalo de nuevo.';
  }
}
?>
