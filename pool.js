// 加载mysql模块
const mysql=require("mysql");
//创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"cake",
    port:3306,
    connectionLimit:10
})

// 导出模块
module.exports=pool;