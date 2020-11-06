const { Router } = require('express');
const cita = Router();
const mysqlConnection = require('../db/db');


// Consultar todas las citas que se encuentran en la tabla cita
// que poseen el numero_id_trabajador de un trabajador.

 
// TABLA: Trabajos realizados 
// OBJETIVO: El trabajador puede visualizar los trabajos que a realizado, estos se visualizaran en forma de cards,
// por ende es necesario consultar los datos que se encuentran en el apartado del cliente, el cual solicito la cita,
// y ya ha terminado.
// URL: /TrabajadoresInicio/TrabajosRealizados
cita.get('/cita/cards/:numero_id_trabajador', (req,res)=>{
    const { numero_id_trabajador } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE numero_id_trabajador = ?',[numero_id_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Trabajos por realizar 
// OBJETIVO: El trabajador puede visualizar los trabajos que debe realizar, estos se visualizaran en forma de cards,
// por ende es necesario consultar los datos que se encuentran en el apartado del cliente, el cual solicito la cita. 
// URL: /TrabajadoresInicio/TrabajosPorRealizar
cita.get('/cita/cards/:numero_id_trabajador', (req,res)=>{
    const { numero_id_trabajador } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE numero_id_trabajador = ?',[numero_id_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});




module.exports = cita;