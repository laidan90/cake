$.ajax({
    url:"http://127.0.0.1:8001/index/detail?pid=14",
    type:"get",
    success:(res)=>{
        exchange(res);
        // 详情页第三只图片为空值--》报错 
    }
})