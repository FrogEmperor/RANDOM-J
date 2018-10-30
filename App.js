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
   next(null, './public/randomGame1/photo-storage');
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

    		fs.writeFile('FILE.json', data2);

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

// Subir la imagen
app.post('/upload',multer(multerConfig).single('foto'),function(req,res){
  
  // Cambiando el nombre

  let nombre = req.body.nombre;
      
  var i=0;

  while(files[i]){
    i+=1;
  }

  fs.rename('public/randomGame1/photo-storage/'+files[i-1], 'public/randomGame1/photo-storage/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files[i-1] = nombre + '.jpeg';

  let data = JSON.stringify(files, null, 2);

  fs.writeFile('FILE.json', data);
});

// Mandar FILE.json
app.get("/all",(request,response)=> response.send(files));


app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});


//-------------------------------------------------------------------------------------------------------
// RANDOM GAME 2

const data2 = fs.readFileSync('FILE2.json');
const files2 = JSON.parse(data2);

const multerConfig2 = {

storage: multer.diskStorage({

 destination: function(req, file, next){
   next(null, './public/randomGame2/photo-storage2');
   },   
    
    filename: function(req, file, next){
        console.log(file);

        const ext = file.mimetype.split('/')[1];
        var x = file.fieldname + '-' + Date.now() + '.'+ext;
        next(null, x);

          var i=0;

          while(files2[i]){
            i+=1;
          }
          files2[i] = x;

        let data = JSON.stringify(files2, null, 2);

        fs.writeFile('FILE2.json', data2);

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

// Subir la imagen
app.post('/upload2',multer(multerConfig2).single('foto'),function(req,res){
  
  // Cambiando el nombre

  let nombre = req.body.nombre;
      
  var i=0;

  while(files2[i]){
    i+=1;
  }

  fs.rename('public/randomGame2/photo-storage2/'+files2[i-1], 'public/randomGame2/photo-storage2/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files2[i-1] = nombre + '.jpeg';

  let data2 = JSON.stringify(files2, null, 2);

  fs.writeFile('FILE2.json', data2);
});

// Mandar FILE.json
app.get("/all2",(request,response)=> response.send(files2));

//-------------------------------------------------------------------------------------------------------
// RANDOM GAME 3

const data3 = fs.readFileSync('FILE3.json');
const files3 = JSON.parse(data3);

const multerConfig3 = {

storage: multer.diskStorage({

 destination: function(req, file, next){
   next(null, './public/randomGame3/photo-storage3');
   },   
    
    filename: function(req, file, next){
        console.log(file);

        const ext = file.mimetype.split('/')[1];
        var x = file.fieldname + '-' + Date.now() + '.'+ext;
        next(null, x);

          var i=0;

          while(files3[i]){
            i+=1;
          }
          files3[i] = x;

        let data = JSON.stringify(files3, null, 2);

        fs.writeFile('FILE3.json', data3);

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

// Subir la imagen
app.post('/upload3',multer(multerConfig3).single('foto'),function(req,res){
  
  // Cambiando el nombre

  let nombre = req.body.nombre;
      
  var i=0;

  while(files3[i]){
    i+=1;
  }

  fs.rename('public/randomGame3/photo-storage3/'+files3[i-1], 'public/randomGame3/photo-storage3/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files3[i-1] = nombre + '.jpeg';

  let data3 = JSON.stringify(files3, null, 2);

  fs.writeFile('FILE3.json', data3);
});

// Mandar FILE.json
app.get("/all3",(request,response)=> response.send(files3));

//-------------------------------------------------------------------------------------------------------
// RANDOM GAME 4

const data4 = fs.readFileSync('FILE4.json');
const files4 = JSON.parse(data4);

const multerConfig4 = {

storage: multer.diskStorage({

 destination: function(req, file, next){
   next(null, './public/randomGame4/photo-storage4');
   },   
    
    filename: function(req, file, next){
        console.log(file);

        const ext = file.mimetype.split('/')[1];
        var x = file.fieldname + '-' + Date.now() + '.'+ext;
        next(null, x);

          var i=0;

          while(files4[i]){
            i+=1;
          }
          files4[i] = x;

        let data = JSON.stringify(files4, null, 2);

        fs.writeFile('FILE4.json', data4);

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

// Subir la imagen
app.post('/upload4',multer(multerConfig4).single('foto'),function(req,res){
  
  // Cambiando el nombre

  let nombre = req.body.nombre;
      
  var i=0;

  while(files4[i]){
    i+=1;
  }

  fs.rename('public/randomGame4/photo-storage4/'+files4[i-1], 'public/randomGame4/photo-storage4/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files4[i-1] = nombre + '.jpeg';

  let data4 = JSON.stringify(files4, null, 2);

  fs.writeFile('FILE4.json', data4);
});

// Mandar FILE.json
app.get("/all4",(request,response)=> response.send(files4));

//-------------------------------------------------------------------------------------------------------
// RANDOM GAME 4

const data5 = fs.readFileSync('FILE5.json');
const files5 = JSON.parse(data5);

const multerConfig5 = {

storage: multer.diskStorage({

 destination: function(req, file, next){
   next(null, './public/randomGame5/photo-storage5');
   },   
    
    filename: function(req, file, next){
        console.log(file);

        const ext = file.mimetype.split('/')[1];
        var x = file.fieldname + '-' + Date.now() + '.'+ext;
        next(null, x);

          var i=0;

          while(files5[i]){
            i+=1;
          }
          files5[i] = x;

        let data = JSON.stringify(files5, null, 2);

        fs.writeFile('FILE5.json', data5);

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

// Subir la imagen
app.post('/upload5',multer(multerConfig5).single('foto'),function(req,res){
  
  // Cambiando el nombre

  let nombre = req.body.nombre;
      
  var i=0;

  while(files5[i]){
    i+=1;
  }

  fs.rename('public/randomGame5/photo-storage5/'+files5[i-1], 'public/randomGame5/photo-storage5/'+ nombre + '.jpeg', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
  });
  
  files5[i-1] = nombre + '.jpeg';

  let data5 = JSON.stringify(files5, null, 2);

  fs.writeFile('FILE5.json', data5);
});

// Mandar FILE.json
app.get("/all5",(request,response)=> response.send(files5));