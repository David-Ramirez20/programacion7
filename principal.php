<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-firestore.js"></script>
    <title>Principal</title>
   
    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">
	
</head>
<body>
	<div class="container">

	<div class="sign-up-content">
		<?php

	include("persona.php");

$categoria=$_POST['cate'];
$descripcion=$_POST['des'];
$precio=$_POST['costo'];



	$imp=new Persona($categoria,$descripcion,$precio);

   echo  $imp->DatosPersona()."<br><br>";


$data = "{'Concepto', '$categoria', 'subtotal', '$descripcion', 'ID', '$precio'}";

$url="https://tatuajes-51c32.firebaseio.com/ventas.json";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/plain'));

$response = curl_exec($ch);
if (curl_errno($ch)) {

	echo 'Error:'.curl_errno($ch);
	# code...
}else{

	echo"Presione Aceptar para regresar al menú principal... <br><a href='index.html'>Aceptar</a>";
}


?>


	</div>

</body>
</html>