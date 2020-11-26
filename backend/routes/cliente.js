const { Router } = require('express');
const cliente = Router();
const mysqlConnection = require('../db/db');


// TABLA: Registro de trabajador 
// OBJETIVO: Si el cliente que quiere ser trabajador de nuestra plataforma no cuenta con un registro en la base de datos,
// podrá registrarse completando los datos necesarios; una vez los datos estén completamente diligenciados se enviaran a la 
// base de datos.
// URL: /RegistroBarberos/RegistroBarberos3
// LOS ESTOY UTILIZANDO
cliente.post('/nuevo-cliente/solicitud-registro', (req,res)=>{
    const { correo_electronico_cliente,direccion_cliente,telefono_cliente,contrasena_Cliente,apellido1_Cliente,apellido2_Cliente,nombre2_Cliente,nombre1_Cliente,documento_Cliente } = req.body;
    const cliente = [ correo_electronico_cliente,direccion_cliente,telefono_cliente,contrasena_Cliente,apellido1_Cliente,apellido2_Cliente,nombre2_Cliente,nombre1_Cliente,documento_Cliente ];

    const nuevoCliente = `INSERT INTO cliente(correo_electronico_cliente,direccion_cliente,telefono_cliente,contrasena_Cliente,apellido1_Cliente,apellido2_Cliente,nombre2_Cliente,nombre1_Cliente,documento_Cliente) VALUES (?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoCliente, cliente, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `nuevo cliente agregado`});
        }
    });
});

// TABLA : Login Cliente
// OBJETIVO : Realizar el login del cliente para asignarle la cita correspondiente
// URL : //PerfilTrabajadorUsuario2/inicioUsuarios 
// LA ESTOY UTILIZANDO
cliente.get('/solicitud-login/loginCliente/:correo_electronico_cliente', (req,res)=>{
    const { correo_electronico_cliente } = req.params;
    mysqlConnection.query('SELECT correo_electronico_cliente,contrasena_Cliente,codigo_cliente FROM cliente WHERE correo_electronico_cliente = ? ',[correo_electronico_cliente], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
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


// MOSTRAR A TODOS LOS CLIENTES
cliente.get('/clientes', (req,res)=>{
    mysqlConnection.query('SELECT * FROM cliente', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports = cliente;