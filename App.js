const fs = require('fs');

const data = fs.readFileSync('FILE.json');
const files = JSON.parse(data);

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

const multerConfig = {
    
storage: multer.diskStorage({

 destination: function(req, file, next){
   next(null, './public/photo-storage');
   },   
    
    filename: function(req, file, next){
        console.log(file);

        const ext = file.mimetype.split('/')[1];
        var x = file.fieldname + '-' + Date.now() + '.'+ext;
        next(null, x);

          var i=0;

          while(files[i]){
            i+=1;
          }
          files[i] = x;

        let data = JSON.stringify(files, null, 2);

        fs.writeFile('FILE.json', data);

      }
    }),   
    
    fileFilter: function(req, file, next){
          if(!file){
            next();
          }
        const image = file.mimetype.startsWith('image/');
        if(image){
          console.log('photo uploaded');
          next(null, true);
        }else{
          console.log("file not supported");
          return next();
        }
    }
  };

app.get('/', function(req, res){
  res.render('index.html');
});

//--------------------------------------------------------------------------------
// Subir la imagen
app.post('/upload',multer(multerConfig).single('foto'),function(req,res){
  // Cambiando el nombre
  let Fdireccion = req.body.lugar;

  let nombre = req.body.nombre;
      
  var i=0;

  while(files[i]){
    i+=1;
  }

  fs.rename('public/photo-storage/'+files[i-1], 'public/randomGame'+ Fdireccion +'/photo-storage'+ Fdireccion +'/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files[i-1] = '/randomGame'+ Fdireccion +'/photo-storage'+ Fdireccion +'/'+ nombre + '.jpeg';

  let data = JSON.stringify(files, null, 2);

  fs.writeFile('FILE.json', data);

  res.redirect('randomGame'+ Fdireccion +'/randomGame'+Fdireccion+'.html');
});

//--------------------------------------------------------------------------------
// Mandar FILE.json
app.get("/all",(request,response)=> response.send(files));

//--------------------------------------------------------------------------------
// eliminando
app.post("/eliminar",(request,response)=> {
  
  let Fdireccion = request.body.lugar;
  let alumno = request.body.alumno;

  let direccion = "/randomGame"+Fdireccion+"/photo-storage"+Fdireccion+"/"+alumno+".jpeg"

  let FilesLength = Object.keys(files).length;

  for(let i=0;i<FilesLength;i++){
    if(files[i]==direccion){
      files[i]="borrado";
      let data = JSON.stringify(files, null, 2);
      fs.writeFile('FILE.json', data);

      fs.unlink('public'+ direccion, (err) => {
        if (err) throw err;
        console.log('public'+direccion);
      });
      break;    
    }
  }
  response.redirect('randomGame'+Fdireccion+'/randomGame'+Fdireccion+'.html');
});

//Port
app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});