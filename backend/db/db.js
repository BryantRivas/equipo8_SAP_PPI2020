const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    /*
    host: 'localhost',
    user: 'rank_Emanuel',
    password: '1000306848ytpgs9m2',
    database: 'barppi',
    multipleStatements: true
    */
    host: 'bhaqbqsi7rk3cziponvh-mysql.services.clever-cloud.com',
    user: 'ugi91hgl8n5pxl9y',
    password: 'VyzFXw4cLJ70jn92a5Fl',
    database: 'bhaqbqsi7rk3cziponvh',
    multipleStatements: true
});

mysqlConnection.connect((error)=>{
    if(error){
        console.error(error);
        return;
    }else{
        console.log('Base de datos esta conectada')
    }
})

module.exports = mysqlConnection;