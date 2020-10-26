const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'rank_Emanuel',
    password: '1000306848ytpgs9m2',
    database: 'barppi',
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