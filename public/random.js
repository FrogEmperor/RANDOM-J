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

loadJSON('/all', function(response){
    let files = JSON.parse(response);
    let i = 0;
    while(files[i]){

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = files[i];

        let lista = document.createElement('li');
        lista.appendChild(checkbox);
        let newText = document.createTextNode(files[i]);
        lista.appendChild(newText)
        document.getElementById("nombres").appendChild(lista);  
        i++;

    }  

});


    function imagenes(){

	loadJSON("/all", function(response) {
    	let files = JSON.parse(response);
    	
    	var canvas = document.getElementById('imagenes');
		var context = canvas.getContext("2d");
    	
        

		base_image = new Image();
  		base_image.src = "photo-storage/"+files[0];
		base_image.onload = function(){
    		context.drawImage(base_image, 0, 0);
    	}

    	console.log(files[0]);
    });


    }

    var currentImage;
    
    function displayNextImage() {
        loadJSON("/all", function(response){
            let files = JSON.parse(response);
        
            let FilesLength = Object.keys(files).length;

            let x = -1;

            x = (x === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength); // el 3 es 

            var checkB = document.getElementById(files[x]);

            if(!checkB.checked){
            document.getElementById("img").src = "photo-storage/" + files[x];
            currentImage = files[x];  
            }
            
        })    
    }

    var cycle;

    function activeCycle(){
        cycle = setInterval(displayNextImage, 200);
        setTimeout(function(){
            clearInterval(cycle);
            console.log(currentImage);
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

    //ESTA ES LA LOGICA DE LOS TEAMS

    function team2(){
        loadJSON('/all',function(response){
            let files = JSON.parse(response);
            let ran = [];
            let x = 0;
            let z = 0;
            let c = 0;
            let index = 0;
            let FilesLength = Object.keys(files).length;
            let f =-1;
            var tabla = document.getElementById("tabla");

            for(i=0;i<FilesLength;i++){
                f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                
                while(ran.includes(files[f])){
                    f =-1;
                    f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                }
                ran.push(files[f]);

                if(z%2==0){
                    var row = tabla.insertRow(z/3);
                    c = 0;
                }
                z++;
                if(x==0){
                    var cell1 = row.insertCell(c);
                    cell1.innerHTML = files[f];
                    x=1;
                }
                else if(x==1){
                    var cell2 = row.insertCell(c);
                    cell2.innerHTML = files[f];
                    x=0;
                }

                c++
            }
        })
    }

    function team3(){
        loadJSON('/all',function(response){
            let files = JSON.parse(response);
            let ran = [];
            let x = 0;
            let z = 0;
            let c = 0;
            let index = 0;
            let FilesLength = Object.keys(files).length;
            let f =-1;
            var tabla = document.getElementById("tabla");

            for(i=0;i<FilesLength;i++){
                f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                
                while(ran.includes(files[f])){
                    f =-1;
                    f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                }
                ran.push(files[f]);

                if(z%3==0){
                    var row = tabla.insertRow(z/3);
                    c = 0;
                }
                z++;
                if(x==0){
                    var cell1 = row.insertCell(c);
                    cell1.innerHTML = files[f];
                    x=1;
                }
                else if(x==1){
                    var cell2 = row.insertCell(c);
                    cell2.innerHTML = files[f];
                    x=2;
                }
                else if(x==2){
                    var cell3 = row.insertCell(c);
                    cell3.innerHTML = files[f];
                    x=0;
                }
                c++
            }
        })
    }

    function team4(){
        loadJSON('/all',function(response){
            let files = JSON.parse(response);
            let ran = [];
            let x = 0;
            let z = 0;
            let c = 0;
            let index = 0;
            let FilesLength = Object.keys(files).length;
            let f =-1;
            var tabla = document.getElementById("tabla");

            for(i=0;i<FilesLength;i++){
                f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                
                while(ran.includes(files[f])){
                    f =-1;
                    f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                }
                ran.push(files[f]);

                if(z%4==0){
                    var row = tabla.insertRow(z/3);
                    c = 0;
                }
                z++;
                if(x==0){
                    var cell1 = row.insertCell(c);
                    cell1.innerHTML = files[f];
                    x=1;
                }
                else if(x==1){
                    var cell2 = row.insertCell(c);
                    cell2.innerHTML = files[f];
                    x=2;
                }
                else if(x==2){
                    var cell3 = row.insertCell(c);
                    cell3.innerHTML = files[f];
                    x=3;
                }
                else if(x==3){
                    var cell4 = row.insertCell(c);
                    cell4.innerHTML = files[f];
                    x=0;
                }
                c++
            }
        })
    }

    function team5(){
        loadJSON('/all',function(response){
            let files = JSON.parse(response);
            let ran = [];
            let x = 0;
            let z = 0;
            let c = 0;
            let index = 0;
            let FilesLength = Object.keys(files).length;
            let f =-1;
            var tabla = document.getElementById("tabla");

            for(i=0;i<FilesLength;i++){
                f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                
                while(ran.includes(files[f])){
                    f =-1;
                    f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                }
                ran.push(files[f]);

                if(z%5==0){
                    var row = tabla.insertRow(z/5);
                    c = 0;
                }
                z++;
                if(x==0){
                    var cell1 = row.insertCell(c);
                    cell1.innerHTML = files[f];
                    x=1;
                }
                else if(x==1){
                    var cell2 = row.insertCell(c);
                    cell2.innerHTML = files[f];
                    x=2;
                }
                else if(x==2){
                    var cell3 = row.insertCell(c);
                    cell3.innerHTML = files[f];
                    x=3;
                }
                else if(x==3){
                    var cell4 = row.insertCell(c);
                    cell4.innerHTML = files[f];
                    x=4;
                }
                else if(x==4){
                    var cell5 = row.insertCell(c);
                    cell5.innerHTML = files[f];
                    x=0;
                }
                c++
            }

        })
    }
