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
