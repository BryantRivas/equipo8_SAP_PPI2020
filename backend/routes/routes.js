const { Router } = require('express');
const routes = Router();
// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const uuid = require('uuid');
//path para utilizar el dirname
const path = require('path');



// multer middleware
// Para que guarde los archivos en public y dentro en una carpeta llamada uploads
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req,file, cb) => {
        cb(null, file.originalname);
    }
});


const cargImage = multer({
    storage,
    limits:{
        fileSize:1000000
    }
}).single('image');


// Esta es la funcion para realizar la subida de una imagen o un documento a la carpeta dentro de public y uploads
routes.post('/images/uploads', (req, res)=>{
    cargImage(req, res, (err) =>{
        if(err){
            err.message = 'Error al cargar el archivo.';
            return res.send(err)
        }else{
            res.send('Imagen fue cargada');
        };
    })
})




module.exports = routes;