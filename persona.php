<?php
class Persona
{

	public $categoria;
	public $descripcion;
	public $precio;


	public function __construct($cate,$des,$costo)
	{
		$this->categoria=$cate;
		$this->descripcion=$des;
		$this->precio=$costo;

		
	}

	function DatosPersona()
	{
		return "VENTA:"."<br><br> CATEGORIA: ".$this->categoria."<br><br>DESCRIPCION : ".$this->descripcion."<br><br>"."PRECIO : ".$this->precio."<br><br>";
	}
}


?>
<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-firestore.js"></script>
<script src="principal.php"></script>