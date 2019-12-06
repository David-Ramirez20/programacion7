 
//document.write('<script src= "rollups/sha256.js"></script');
 import './rollups/sha256.js';
firebase.initializeApp({
   apiKey: "AIzaSyCbpAQbzRuyuY5xskvcxslRImm3dJE6eS8",
    authDomain: "tatuajes-51c32.firebaseapp.com",
   projectId: "tatuajes-51c32"
});

var db = firebase.firestore();


function guardar() {
	var asunto = document.getElementById('asunto').value;
    var fecha = document.getElementById('fecha').value;
	var hora = document.getElementById('hora').value;
  var nombre_encrip=CryptoJS.SHA256(hora);
	var folio = document.getElementById('folio').value;

	db.collection("citas1").add({
    	asunto: asunto,
      fecha: fecha,
    	nombre del cliente: nombre_encrip,
    	folio: folio
	})
	.then(function(docRef) {
    	console.log("Document written with ID: ", docRef.id);
      document.getElementById('asunto').value = " ";
      document.getElementById('fecha').value = " ";
    document.getElementById('hora').value = " ";
    document.getElementById('folio').value = " ";
    alert(nombre_encrip);
	})
	.catch(function(error) {
    	console.error("Error adding document: ", error);
	});



}


var tabla = document.getElementById('tabla');
db.collection("citas1").onSnapshot((querySnapshot) => {
	tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().asunto}`);
        tabla.innerHTML += `
	<tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().asunto}</td>
      <td>${doc.data().fecha}</td>
      <td>${doc.data().hora}</td>
      <td>${doc.data().folio}</td>
      <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      <td><button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().asunto}', '${doc.data().fecha}', '${doc.data().hora}','${doc.data().folio}')">Editar</button></td>
    </tr>
        `


    });
});

function eliminar(id){




db.collection("citas1").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});


}



// Set the "capital" field of the city 'DC'
function editar (id, asunto, fecha, hora, folio){


document.getElementById('asunto').value = asunto;
document.getElementById('fecha').value = fecha;
document.getElementById('hora').value = hora;
document.getElementById('folio').value = folio;

var boton = document.getElementById('boton');
boton.innerHTML = 'Editar';

boton.onclick = function(){
	var washingtonRef = db.collection("citas1").doc(id);

	var asunto = document.getElementById('asunto').value;
	var fecha = document.getElementById('fecha').value;
	var hora = document.getElementById('hora').value;
  var folio = document.getElementById('folio').value;


return washingtonRef.update({
    	asunto: asunto,
      fecha: fecha,
    	hora: hora,
    	folio: folio
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML = 'Guardar';
    document.getElementById(' ').value = " ";
      document.getElementById('fecha').value = " ";
    document.getElementById('hora').value = " ";
    document.getElementById('folio').value = " ";
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});



}




}


