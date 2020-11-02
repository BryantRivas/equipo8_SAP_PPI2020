const { Router } = require('express');
const cita = Router();
const mysqlConnection = require('../db/db');


// Consultar todas las citas que se encuentran en la tabla cita
cita.get('/cita', (req,res)=>{
    mysqlConnection.query('SELECT * FROM cita', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});



//Creacion de una nueva cita con un trabajador y un cliente
cita.post('/nueva-cita', (req,res)=>{
    const { codigo_cliente, numero_id_trabajador, telefono_cliente, precio_trabajador, correo_electronico_cliente, direccion_cliente, estado_cita } = req.body;
    const cita = [ codigo_cliente, numero_id_trabajador, telefono_cliente, precio_trabajador, correo_electronico_cliente, direccion_cliente, estado_cita ];

    const nuevaCita = `INSERT INTO cita(codigo_cliente, numero_id_trabajador, telefono_cliente, precio_trabajador, correo_electronico_cliente, direccion_cliente, estado_cita) VALUES (?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevaCita, cita, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `La cita se ha agregado`});
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