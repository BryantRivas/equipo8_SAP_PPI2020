'use strict';
//IMPORTACIÓN DE LOS ELEMENTOS A UTILIZAR
const express = require('express');
const path = require('path');
const morgan = require('morgan');

// Inicializacion de espress
const app = express();



// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.get('/', (req, res) => {
    res.send('Servidor barppi corriendo');
});








// Configuraciones
app.set('port', 4020);

// Incializacion del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor de barppi corriendo en el puerto', app.get('port'));
})