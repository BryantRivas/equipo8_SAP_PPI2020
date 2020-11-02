const { Router } = require('express');
const cita = Router();
const mysqlConnection = require('../db/db');


// Consultar todas las citas que se encuentran en la tabla cita
// que poseen el numero_id_trabajador de un trabajador.

// FALTA HACERLO BIEN
cita.get('/cita', (req,res)=>{
    mysqlConnection.query('SELECT * FROM cita', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TRABAJOS POR REALIZAR 
// TABLA: Información personal "INFORMACION MAS PERSONAL"
// OBJETIVO: El trabajador en el apartado de “MI PERFIL”, puede consultar su información más personal,
// además la puede modificar.
// URL: /TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal
cita.get('/cita/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});






module.exports = cita;