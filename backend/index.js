'use strict';
//IMPORTACIÓN DE LOS ELEMENTOS A UTILIZAR
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const trabajador = require('./routes/trabajador');
const cita = require('./routes/cita');
const cliente = require('./routes/cliente');
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
app.use('/api', cliente);
app.use('/api', cita);





// Configuraciones
app.set('port', 4020);

// Incializacion del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor de barppi corriendo en el puerto', app.get('port'));
})