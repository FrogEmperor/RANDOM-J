function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return allText
}


function loadFileAsText() {
    var fileToLoad = 'passwords/password.txt';
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        fileToLoad.value = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
    console.log(textFromFileLoaded);
}


function passwordVerify() {
    
    var password = document.getElementById("password").value;
    var filePassword = readTextFile("passwords/password.txt");

    if (password == filePassword && filePassword != "") {
        document.getElementById("imagenMeme").src = "style photos/meme_open.jpg";
    }
    else {
        document.getElementById("imagenMeme").src = "style photos/meme_closed.jpg";
    }
}

function irAlRandom() {
    
    var laImagen = document.getElementById("imagenMeme").src
    var fileName = laImagen.split("/").pop();
    var sitio = readTextFile("passwords/sitio.txt");

    if (fileName == "meme_open.jpg") {
        window.location.href = sitio;
    }
}