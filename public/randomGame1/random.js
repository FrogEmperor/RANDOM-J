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

    function team3(){
        loadJSON('/all',function(response){
            let files = JSON.parse(response);
            let team= [[],[],[]];
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
                
                if(ran.includes(files[f])){
                    f =-1;
                    f = (f === files.length - 1) ? 0 : Math.floor(Math.random() * FilesLength);
                    console.log(f);
                }
                ran.push(files[f]);

                if(z%3==0){
                    var row = tabla.insertRow(z/3);
                    c = 0;
                }
                z++;
                if(x==0){
                    team[0].push(files[f]);
                    var cell1 = row.insertCell(c);
                    cell1.innerHTML = files[f];
                    y=1;
                }
                if(x==1){
                    team[1].push(files[f]);
                    var cell2 = row.insertCell(c);
                    cell2.innerHTML = files[f];
                    y=2;
                }
                if(x==2){
                    team[2].push(files[f]);
                    var cell3 = row.insertCell(c);
                    cell3.innerHTML = files[f];
                    y=0;
                }
                if(y==1){
                    x=1;
                }
                if(y==2){
                    x=2;
                }
                if(y==0){
                    x=0;
                }
                c++
            }
            console.log(team);
        })
    }
