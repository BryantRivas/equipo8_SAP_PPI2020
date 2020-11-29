const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    /*
    host: 'localhost',
    user: 'rank_Emanuel',
    password: '1000306848ytpgs9m2',
    database: 'barppip',
    multipleStatements: true
    */
    
    host: 'bvqlsznzogljhux9cl4n-mysql.services.clever-cloud.com',
    user: 'unuhd0ihp409jhdi',
    password: '5CCWg51ZVo8Y5eaA7HdF',
    database: 'bvqlsznzogljhux9cl4n',
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