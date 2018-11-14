
function loadJSON(file, callback) {   

		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
		xobj.onreadystatechange = function () {
					if (xobj.readyState == 4 && xobj.status == "200") {
						// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
						callback(xobj.responseText);
					}
		};
		xobj.send(null);  
 }

var cuadroAll = document.getElementById('guia').value;
loadJSON('/all', function(response){
		let files = JSON.parse(response);
		let FilesLength = Object.keys(files).length;
		console.log(files);
		for(i=0;i<FilesLength;i++){
				console.log(files[i]);
				if(files[i]!="borrado"&&files[i].charAt(11)==cuadroAll){
						var file = files[i].replace(".jpeg",""); 
						var file = file.replace("/randomGame"+cuadroAll+"/photo-storage"+cuadroAll+"/","");
						
						let checkbox = document.createElement('input');
						checkbox.type = "checkbox";
						checkbox.name = "name";
						checkbox.value = "value";
						checkbox.id = files[i];


						let lista = document.createElement('li');
						lista.appendChild(checkbox);
						let newText = document.createTextNode(file);
						lista.appendChild(newText)
						document.getElementById("nombre").appendChild(lista);  
				}
		}  

});

		// Ciclo de imagenes 
		var currentImage;
		
		function displayNextImage(Fdireccion) {
				loadJSON('/all', function(response){
						let files = JSON.parse(response);
				
						let FilesLength = Object.keys(files).length;

						let x = -1;

						x = (x === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength); 
						
						do {
							x = Math.floor(Math.random() * FilesLength);
						}
						while(files[x] == currentImage);

						while(files[x]=="borrado"||files[x]==currentImage){
							x = (x === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
						}
								var checkB = document.getElementById(files[x]);

								if(!checkB.checked){
								document.getElementById("img").src = files[x];
								var file = files[x].replace(".jpeg",""); 
								file = file.replace("/randomGame"+cuadroAll+"/photo-storage"+cuadroAll+"/","");
								document.getElementById("nombreDelElegido").innerHTML = file;
								currentImage = files[x];
								console.log(currentImage)
								}
				});    
		}

		
		function activeCycle(Fdireccion){
				var cycle = setInterval(()=>{displayNextImage(Fdireccion)}, 200);
				setTimeout(function(){
						clearInterval(cycle);
				},5000);
		}

		//TODO ESTO ES DE LA RULETA RUSAAAAAAAAA A PARTIR DE AQUI EQUISDEEQUISDEEQUISDE
		var menuRuleta = document.getElementById("ruletaDiv");
		menuRuleta.style.display = "none";
		 function modoRuleta(){
				if (menuRuleta.style.display === "none"){
						menuRuleta.style.display = "block";
				}
				else{
						menubar.menuRuleta.style.display = "none";
				}
		}
		 var capacidad = 0;
		
		function array_range(start, len){
				var cilindroRevolver = new Array(len);
				for (var i = 0; i < len; i++, start++){
						cilindroRevolver[i] = start;
				}
				return cilindroRevolver;
		}
		 var revolver = [];
		 
		 function setupRevolver(){
				var capacidad = parseInt (document.getElementById("espaciosCilindro").value);
				
				revolver = array_range(1,capacidad);
				revolver.fill(0);
				 console.log(revolver);
				 var cargadas = parseInt (document.getElementById("balasCargadas").value);
				 console.log(cargadas);
				 var elegidos = array_range(-1,capacidad)
						elegidos.fill(-1);
				 for (var i = 0; i < cargadas; i++){
						var espacio = Math.floor(Math.random() * capacidad);
						console.log(elegidos);
						while (elegidos.includes(espacio)){
								espacio = Math.floor(Math.random() * capacidad);
						}
						 elegidos[i] = espacio; 
						revolver[espacio] = 1;
				}
				 document.getElementById('cylinderSpin').play();
				 console.log(revolver);
		}
		
		var ordenBala = 0;
		var status = document.getElementById("statusDisparo");
		
		console.log(status);

		function dispararRevolver() {
				console.log(revolver[ordenBala]);
				var elDiv = document.getElementById("divStatus");
				var para = document.createElement("p");
				var node;
				if (revolver[ordenBala] == 1){
						node = document.createTextNode("Ya te moriste alv xd")
						para.appendChild(node);
						elDiv.appendChild(para);
						document.getElementById('bulletShot').play();
				}
				else {
						node = document.createTextNode("Te salvaste OwO");
						para.appendChild(node);
						elDiv.appendChild(para);
						document.getElementById("noBulletShot").play();
				}
				ordenBala++;
		}

		 function resetRevolver(){
				ordenBala = 0;
				document.getElementById("divStatus").innerHTML = "";
				document.getElementById('revolverReload').play();
		}

// Hacer equipos en tablas
function team(Nequipos,all){
	loadJSON('/all',function(response){
		let files = JSON.parse(response);
		let ran = [];
		let x = 0;
		let z = 0;
		let c = 0;
		let index = 0;
		let FilesLength = Object.keys(files).length;
		let f =-1;
		let body = document.getElementById("tabla");
		body.innerHTML="";
		let tabla = document.createElement("table");

		for(i=0;i<FilesLength;i++){
			if(files[i]!="borrado" && files[i].charAt(11)==all){
				f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
				while(ran.includes(files[f])|| files[f]=="borrado" || files[f].charAt(11)!=all){
					console.log(f);
					f =-1;
					f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
				}
				ran.push(files[f]);
		
				var file = files[f].replace(".jpeg",""); 
				var file = file.replace("/randomGame"+all+"/photo-storage"+all+"/","");

				if(z%Nequipos==0){
					var row = tabla.insertRow(z/Nequipos);
					c = 0;
				}+
				z++;
				if(x==Nequipos){
					var cell = row.insertCell(c);
					cell.innerHTML = file;
				}
				else{
					var cell = row.insertCell(c);
					cell.innerHTML = file;
				}
				c++
			}
		}
		body.appendChild(tabla);
	})
}
