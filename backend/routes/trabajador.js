const { Router } = require('express');
const trabajador = Router();
const mysqlConnection = require('../db/db');


// primer servicio, necesito consultar todas las filas de la tabla GOOD
trabajador.get('/trabajador', (req,res)=>{
    mysqlConnection.query('SELECT * FROM trabajador', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});




// segundo servicio, necesito ingresar un registro a la tabla trabajadores GOOD
trabajador.post('/nuevo-trabajador', (req,res)=>{
    const { codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador } = req.body;
    const trabajador = [  codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador ];

    const nuevoTrabajador = `INSERT INTO trabajador(codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoTrabajador, trabajador, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `trabajador agregado`});
        }
    });
});

// tercer servicio, actualizacion de la informacion de un trabajador NOT GOOD
trabajador.put('/trabajador/:id', (req,res)=>{
    const { id } = req.params;
    const { codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador } = req.body;
    

    mysqlConnection.query('UPDATE trabajador SET codigo_cita = ?,direccion_trabajador = ?,contrasena_trabajador = ?,tipo_trabajador = ?,nombres_trabajador = ?,apellidos_trabajador = ?,telefono_trabajador = ?,correo_electronico_trabajador = ?, precio_trabajador = ?, pais_trabajador = ?, ciudad_trabajador = ? WHERE id= ?'[ codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador,id ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se han actualizado los datos del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// cuarto servicio, eliminacion de un registro de una tabla NOT GOOD
trabajador.delete('/trabajador/:id', (req,res)=>{
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query('DELETE FROM trabajador WHERE numero_id_trabajador=?',[numero_id_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se elimino el registro'});
        }else{
            console.log(err);
        }
    });
})


// quinto servicio, consulta por ID GOOD
trabajador.get('/trabajador/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});





module.exports = trabajador;