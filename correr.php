<?php
$data = '{"Concepto":"Curso de PHP", "subtotal":"200", "ID":"1"}';

$url="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js";

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

	echo "ya se inserto";
}







?>