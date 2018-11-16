//引入包
const express=require("express");
const mysql=require("mysql");
const index=require("./routes/index.js")
const type=require("./routes/product_list")
//const pool=require("./pool.js");
//创建服务器
var app=express();
//托管静态文件目录(所有html及样式文件)
app.use(express.static(__dirname+"/public"));
//创建监听
app.listen(8001);

//使用路由器来管理路由
app.use("/index",index);
app.use("/type",type)