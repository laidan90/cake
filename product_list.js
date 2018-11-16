const express=require("express");
const router=express.Router();
const pool=require("../pool");

// 创建路由if
router.get("/type",(req,res)=>{
    var type_id=req.query.type_id;
    if(type_id==0){
        var sql=" SELECT * FROM product ";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    }else{
        var sql=" SELECT * FROM product where type_id=? ";
        pool.query(sql,[type_id],(err,result)=>{
            if(err) throw err;
            res.send(result)

        })
    }
    
})

module.exports=router;