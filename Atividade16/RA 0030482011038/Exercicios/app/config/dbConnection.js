var sql = require("mssql/msnodesqlv8");
module.exports = function(){
const sqlConfig = { 
    user: 'BD2013016',             
    password: 'root',             
    database: 'site_fatec', 
    server:  '192.168.1.6',     
    driver: 'msnodesqlv8',
  }  
  return sql.connect(sqlConfig)
}