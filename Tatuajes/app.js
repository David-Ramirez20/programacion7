firebase.initializeApp({
   apiKey: "AIzaSyCbpAQbzRuyuY5xskvcxslRImm3dJE6eS8",
    authDomain: "tatuajes-51c32.firebaseapp.com",
   projectId: "tatuajes-51c32"
});

var db = firebase.firestore();


function guardar() {
	var nombre = document.getElementById('nombre').value;
	var tipo = document.getElementById('tipo').value;
	var matricula = document.getElementById('matricula').value;

	db.collection("users").add({
    	descripcion: nombre,
    	tipo: tipo,
    	matricula: matricula
	})
	.then(function(docRef) {
    	console.log("Document written with ID: ", docRef.id);
    	var nombre = document.getElementById('nombre').value = "";
		var tipo = document.getElementById('tipo').value = "";
		var matricula = document.getElementById('matricula').value = ""	;
	})
	.catch(function(error) {
    	console.error("Error adding document: ", error);
	});



}


var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
	tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().descripcion}`);
        tabla.innerHTML += `
	<tr>
      <th scope="row">${doc.id}</th>
      <td>${doc.data().descripcion}</td>
      <td>${doc.data().tipo}</td>
      <td>${doc.data().matricula}</td>
      <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
      <td><button class="btn btn-warning" onclick="editar('${doc.id}', '${doc.data().descripcion}', '${doc.data().tipo}','${doc.data().matricula}')">Editar</button></td>
    </tr>
        `


    });
});

function eliminar(id){




db.collection("users").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});


}



// Set the "capital" field of the city 'DC'
function editar (id, nombre, tipo, matricula){


document.getElementById('nombre').value = nombre;
document.getElementById('tipo').value = tipo;
document.getElementById('matricula').value = matricula;

var boton = document.getElementById('boton');
boton.innerHTML = 'Editar';

boton.onclick = function(){
	var washingtonRef = db.collection("users").doc(id);

	var nombre = document.getElementById('nombre').value;
	var tipo = document.getElementById('tipo').value;
	var matricula = document.getElementById('matricula').value;

return washingtonRef.update({
    	descripcion: nombre,
    	tipo: tipo,
    	matricula: matricula
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML = 'Guardar';
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});



}




}


