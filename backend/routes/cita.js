const { Router } = require('express');
const cita = Router();
const mysqlConnection = require('../db/db');


//Creacion de una nueva cita con un trabajador y un cliente
cita.get('/cita/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE codigo_cita = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});





// Consulta de una cita por ID
cita.get('/cita/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM cita WHERE codigo_cita = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});






module.exports = cita;