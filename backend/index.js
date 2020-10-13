'use strict';
//IMPORTACIÓN DE LOS ELEMENTOS A UTILIZAR
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();



//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Servidor barppi corriendo');
});








//PUERTO EN EL CUAL SE CORRERA EL SERVIDOR
app.set('port', 6000);
app.listen(app.get('port'), () => {
    console.log('Servidor de barppi corriendo en el puerto 6000');
});