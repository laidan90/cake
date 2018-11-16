const express=require("express");
const router=express.Router();
const pool=require("../pool");
//创建路由 product
router.get("/product",(req,res)=>{
    var sql=" SELECT * FROM product";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    
})

//创建路由products_cs
router.get("/products",(req,res)=>{
	var sql=' SELECT * FROM product_cs';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

// 创建路由detail
router.get("/detail",(req,res)=>{
    
   
    var sql=' SELECT * FROM product_detail where pid = ?';
    var pid=req.query.pid;
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// 创建路由search
router.get("/search",(req,res)=>{
    var kw=req.query.kw;
    kw=kw.replace(/\'/g,"");//正则去引号
    var arr=kw.split(" ");//字符串转换为数组
    arr.forEach((item,i,arr)=>{arr[i]=` title like '%${item}%' `});//遍历返回新数组
    kw=arr.join(" or ");//返回新字符串
    var where=` where ${kw}`;
    var sql=` SELECT * FROM product `;
    sql+=where;//返回完整sql语句 
    console.log(kw)
    console.log(sql)
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

module.exports=router;