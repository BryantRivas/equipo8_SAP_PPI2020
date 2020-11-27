const { Router } = require('express');
const trabajador = Router();
const mysqlConnection = require('../db/db');


// TABLA : Inicio Usuarios
// OBJETIVO : Al ingresar un usuario a nuestra plataforma podrá encontrar distintas cards, 
// las cuales contendrán la información del trabajador que se encuentra registrado en nuestra base de datos. 
// Es necesario pedir los datos que se encuentran alojados en el lado del servidor.
// URL : /UsuariosInicio 
// LA ESTOY UTILIZANDO
trabajador.get('/trabajador', (req,res)=>{
    mysqlConnection.query('SELECT * FROM trabajador', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Card perfil trabajador
// OBJETIVO: La ingresar un usuario a la respectiva card de un trabajador de su agrado, 
// podrá visualizar una información mucho más detallada acerca del trabajador, además podrá solicitarlo.
// URL: /PerfilTrabajadorUsuario1
// LA ESTOY UTILIZANDO
trabajador.get('/trabajador/cardperfiltrabajador/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// TABLA: Card 2 perfil trabajador usuario2
// URL: /PerfilTrabajadorUsuario2
// LA ESTOY UTILIZANDO
trabajador.get('/trabajador/cardperfiltrabajador/verificacionPerfil/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// TABLA : Login Trabajador
// OBJETIVO : Realizar el inicio del trabajador,realizar login
// completo con la contraseña y el correo del trabajador
// URL : /IngresarTrabajador 
// LA ESTOY UTILIZANDO
trabajador.get('/trabajador/login/:correo_electronico_trabajador', (req,res)=>{
    const { correo_electronico_trabajador } = req.params;
    mysqlConnection.query('SELECT correo_electronico_trabajador,contrasena_trabajador,numero_id_trabajador FROM trabajador WHERE correo_electronico_trabajador = ? ',[correo_electronico_trabajador], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// TABLA: Información personal "INFORMACION MAS PERSONAL"
// OBJETIVO: El trabajador en el apartado de “MI PERFIL”, puede consultar su información más personal,
// además la puede modificar.
// URL: /TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal
trabajador.get('/trabajador/informacionpersonal/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Mi perfil como trabajador
// OBJETIVO:El trabajador puede consultar su información en el apartado de “MI PERFIL”, en el cual podrá ver sus datos como:
// foto de perfil, nombres, apellidos, tipo de trabajador, descripción. Además puede modificar en el momento que sea pertinente
// sus datos.  
// URL: /TrabajadoresInicio/MiPerfilComoTrabajador
trabajador.get('/trabajador/miperfilcomotrabajador/:id', (req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM trabajador WHERE numero_id_trabajador = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


// TABLA: Registro de trabajador 
// OBJETIVO: Si el cliente que quiere ser trabajador de nuestra plataforma no cuenta con un registro en la base de datos,
// podrá registrarse completando los datos necesarios; una vez los datos estén completamente diligenciados se enviaran a la 
// base de datos.
// URL: /RegistroBarberos/RegistroBarberos3
// LA ESTOY UTILIZANDO
trabajador.post('/nuevo-trabajador/registro', (req,res)=>{
    const { nombre1_trabajador, nombre2_trabajador, apellido1_trabajador, apellido2_trabajador, correo_electronico_trabajador, contrasena_trabajador, telefono_trabajador, direccion_trabajador, documento_Trabajador, pais_trabajador, ciudad_trabajador, tipo_trabajador, precio_trabajador, descripcion_trabajador, FotoPerfil } = req.body;
    const trabajador = [ nombre1_trabajador, nombre2_trabajador, apellido1_trabajador, apellido2_trabajador, correo_electronico_trabajador, contrasena_trabajador, telefono_trabajador, direccion_trabajador, documento_Trabajador, pais_trabajador, ciudad_trabajador, tipo_trabajador, precio_trabajador, descripcion_trabajador, FotoPerfil ];

    const nuevoTrabajador = `INSERT INTO trabajador(nombre1_trabajador, nombre2_trabajador, apellido1_trabajador, apellido2_trabajador, correo_electronico_trabajador, contrasena_trabajador, telefono_trabajador, direccion_trabajador, documento_Trabajador, pais_trabajador, ciudad_trabajador, tipo_trabajador, precio_trabajador, descripcion_trabajador, FotoPerfil) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoTrabajador, trabajador, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `trabajador agregado`});
        }
    });
});


// TABLA: Editar información personal
// OBJETIVO: El trabajador podrá editar sus datos personales como lo son: correo, contraseña, dirección, 
// número de teléfono, sexo, fecha de nacimiento y consto del trabajo.
// URL: /TrabajadoresInicio/MiPerfilComoTrabajador/InformacionPersonal
trabajador.put('/trabajador/put/editar-informacion-personal/:numero_id_trabajador', (req,res)=>{
    
    const { direccion_trabajador,contrasena_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador  } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET direccion_trabajador = ?,contrasena_trabajador = ?,telefono_trabajador = ?,correo_electronico_trabajador = ?, precio_trabajador = ? WHERE numero_id_trabajador= ?`, [ direccion_trabajador,contrasena_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se han actualizado los datos mas personales del trabajador'});
        }else{
            console.log(err);
        }
    });
});


// TABLA: Editar mi perfil como trabajador
// OBJETIVO: El trabajador podrá editar sus datos del perfil como lo son su nombre, apellido, tipo de trabajador, su descripción y su foto de perfil.
// URL: /TrabajadoresInicio/MiPerfilComoTrabajador
trabajador.put('/trabajador/put/editar-mi-perfil-como-trabajador/editar-informacion-personal/:numero_id_trabajador', (req,res)=>{
    
    const { tipo_trabajador,nombres_trabajador,apellidos_trabajador,pais_trabajador,ciudad_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET tipo_trabajador = ?,nombres_trabajador = ?,apellidos_trabajador = ?,pais_trabajador = ?,ciudad_trabajador = ? WHERE numero_id_trabajador= ?`, [ tipo_trabajador,nombres_trabajador,apellidos_trabajador,pais_trabajador,ciudad_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se han actualizado los datos de mi perfil como trabajador del trabajador'});
        }else{
            console.log(err);
        }
    });
});


// ESTAS SON LAS PETICIONES PARA EL APARTADO DE MI PERFIL COMO TRABAJADOR

// ACTUALIZACION DE FOTO DE PERFIL DEL TRABAJADOR
// FUNCIONAL BIEN
trabajador.put('/trabajador/put/fotoPerfil/:numero_id_trabajador', (req,res)=>{
    
    const { FotoPerfil } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET FotoPerfil = ? WHERE numero_id_trabajador= ?`, [ FotoPerfil,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado la foto de perdil del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE LOS NOMBRE DEL PERFIL DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/nombresTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { nombre1_trabajador, nombre2_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET nombre1_trabajador = ?, nombre2_trabajador = ? WHERE numero_id_trabajador= ?`, [ nombre1_trabajador,nombre2_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado los nombres del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE LOS APELLIDOS DEL PERFIL DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/apellidosTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { apellido1_trabajador, apellido2_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET apellido1_trabajador = ?, apellido2_trabajador = ? WHERE numero_id_trabajador= ?`, [ apellido1_trabajador,apellido2_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado los apellidos del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE LA DESCRIPCION DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/descripcionTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { descripcion_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET descripcion_trabajador = ? WHERE numero_id_trabajador= ?`, [ descripcion_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado la descripcion del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE TIPO DE TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/tipoTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { tipo_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET tipo_trabajador = ? WHERE numero_id_trabajador= ?`, [ tipo_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el tipo de trabajador'});
        }else{
            console.log(err);
        }
    });
});


// ESTAS SON LAS PETICIONES PARA EL APARTADO DE MI INFORMACION MAS PERSONAL DEL TRABAJADOR

// ACTUALIZACION DE CORREO DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/correoTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { correo_electronico_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET correo_electronico_trabajador = ? WHERE numero_id_trabajador= ?`, [ correo_electronico_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el tipo de trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE CONTRASEÑA DEL TRABAJADOR
// FUNCIONA BIEN 
trabajador.put('/trabajador/put/contrasenaTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { contrasena_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET contrasena_trabajador = ? WHERE numero_id_trabajador= ?`, [ contrasena_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado la contraseña del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE DIRECCION DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/direccionTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { direccion_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET direccion_trabajador = ? WHERE numero_id_trabajador= ?`, [ direccion_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado la direccion del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DEL NUMERO TELEFONICO DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/telefonoTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { telefono_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET telefono_trabajador = ? WHERE numero_id_trabajador= ?`, [ telefono_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el numero de telefono del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DEL PRECIO DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/precioTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { precio_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET precio_trabajador = ? WHERE numero_id_trabajador= ?`, [ precio_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el precio del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DEL DOCUMENTO DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/documentoTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { documento_Trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET documento_Trabajador = ? WHERE numero_id_trabajador= ?`, [ documento_Trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el documento del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DEL PAIS DE RECIDENCIA DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/paisTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { pais_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET pais_trabajador = ? WHERE numero_id_trabajador= ?`, [ pais_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado el país del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// ACTUALIZACION DE LA CIUDAD DE RECIDENCIA DEL TRABAJADOR
// FUNCIONA BIEN
trabajador.put('/trabajador/put/ciudadTrabajador/:numero_id_trabajador', (req,res)=>{
    
    const { ciudad_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET ciudad_trabajador = ? WHERE numero_id_trabajador= ?`, [ ciudad_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se ha actualizado la ciudad del trabajador'});
        }else{
            console.log(err);
        }
    });
});




// LOS SIGUIENTES SON LAS FORMAS DE HACER PETICIONES

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

// tercer servicio, actualizacion de la informacion de un trabajador GOOD
trabajador.put('/trabajador/put/:numero_id_trabajador', (req,res)=>{
    
    const { codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador } = req.body;
    const { numero_id_trabajador } = req.params;

    mysqlConnection.query(`UPDATE trabajador SET codigo_cita = ?,direccion_trabajador = ?,contrasena_trabajador = ?,tipo_trabajador = ?,nombres_trabajador = ?,apellidos_trabajador = ?,telefono_trabajador = ?,correo_electronico_trabajador = ?, precio_trabajador = ?, pais_trabajador = ?, ciudad_trabajador = ? WHERE numero_id_trabajador= ?`, [ codigo_cita,direccion_trabajador,contrasena_trabajador,tipo_trabajador,nombres_trabajador,apellidos_trabajador,telefono_trabajador,correo_electronico_trabajador, precio_trabajador, pais_trabajador, ciudad_trabajador,numero_id_trabajador ], (err, rows, fields)=>{
        if(!err){
            res.json({status : 'Se han actualizado los datos del trabajador'});
        }else{
            console.log(err);
        }
    });
});

// cuarto servicio, eliminacion de un registro de una tabla GOOD
trabajador.delete('/trabajador/delete/:numero_id_trabajador', (req,res)=>{
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


// FIN DE EJEMPLOS PARA HACER PETICIONES


module.exports = trabajador;