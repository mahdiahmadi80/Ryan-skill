const mysql=require("mysql");
var conn=mysql.createConnection({



host:"localhost",
user:"root",
password:"1234",
database:"data-rayan"

});

module.exports=conn;