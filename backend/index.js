'use strict';
//IMPORTACIÓN DE LOS ELEMENTOS A UTILIZAR
const express = require('express');

//path para utilizar el dirname
const path = require('path');

const morgan = require('morgan');
const trabajador = require('./routes/trabajador');
const cita = require('./routes/cita');
const cliente = require('./routes/cliente');

// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const { uuid } = require('uuidv4');

// Inicializacion de espress
const app = express();



// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.get('/', (req, res) => {
    res.send('Servidor barppi corriendo');
});


app.use('/api', trabajador);
app.use('/api/cliente', cliente);
app.use('/api/cita', cita);


// Esta es la parte donde se realiza la parte de subir una imagen o archivo
// Middlewares necesarios 

// multer middleware
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req,file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));

//routes use
app.use(require('./routes/routes'));




// Configuraciones
app.set('port', 4020);

// Incializacion del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor de barppi corriendo en el puerto', app.get('port'));
})