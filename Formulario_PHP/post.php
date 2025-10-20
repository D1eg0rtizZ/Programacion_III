<?php
if ($_SERVER ['REQUEST_METHOD'] === 'POST'){
    $nombre = $_POST['nombre'] ?? '';
    $apellido = $_POST['apellido'] ?? '';
    $celular = $_POST['celular'] ?? '';
    $email = $_POST['email'] ?? '';

    echo "<strong>DATOS RECIBIDOS</strong><br>";
    echo "Nombre(s): ".$nombre."<br>";
    echo "Apellido(s): ".$apellido."<br>";
    echo "Celular: ".$celular."<br>";
    echo "Email: ".$email;
}else{
    echo "No se recibieron datos...";
    }
?>