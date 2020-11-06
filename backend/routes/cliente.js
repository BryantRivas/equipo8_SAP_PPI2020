const { Router } = require('express');
const cliente = Router();
const mysqlConnection = require('../db/db');


// TABLA: Registro de trabajador 
// OBJETIVO: Si el cliente que quiere ser trabajador de nuestra plataforma no cuenta con un registro en la base de datos,
// podrá registrarse completando los datos necesarios; una vez los datos estén completamente diligenciados se enviaran a la 
// base de datos.
// URL: /RegistroBarberos/RegistroBarberos3
cliente.post('/nuevo-cliente/solicitud-registro', (req,res)=>{
    const { nombres_cliente,apellidos_cliente,correo_electronico_cliente,direccion_cliente,contrasena_cliente,telefono_cliente } = req.body;
    const cliente = [ nombres_cliente,apellidos_cliente,correo_electronico_cliente,direccion_cliente,contrasena_cliente,telefono_cliente ];

    const nuevoCliente = `INSERT INTO cliente(nombres_cliente,apellidos_cliente,correo_electronico_cliente,direccion_cliente,contrasena_cliente,telefono_cliente) VALUES (?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoCliente, cliente, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `nuevo cliente agregado`});
        }
    });
});


// TABLA: Cards trabajos realizados 
// OBJETIVO: El trabajador al ingresar a una de las cards que se encuentran en el apartado de trabajos realizados, 
// podrá ver las características de dicho trabajo realizado.
// URL: /TrabajadoresInicio/TrabajosRealizados/CardTrabajosRealizados
cliente.get('/cliente/cards/:codigo_cliente', (req,res)=>{
    const { codigo_cliente } = req.params;
    mysqlConnection.query('SELECT * FROM cliente WHERE codigo_cliente = ?',[codigo_cliente], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Cards trabajos por realizar 
// OBJETIVO: El trabajador al ingresar a una de las cards que se encuentran en el apartado de trabajos por realizar,
// podrá ver las características de dicho trabajo a realizar. 
// URL: /TrabajadoresInicio/TrabajosPorRealizar/CardTrabajosPorRealizar
cliente.get('/cliente/cards/:codigo_cliente', (req,res)=>{
    const { codigo_cliente } = req.params;
    mysqlConnection.query('SELECT * FROM cliente WHERE codigo_cliente = ?',[codigo_cliente], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});



module.exports = cliente;