//获取字符串
var str=window.location.search;
var a=str.split("=")
pid=a[1];//获取当前pid
$.ajax({
    url:` http://127.0.0.1:8001/index/detail?pid=${pid}`,
    type:"get",
    success:(res)=>{
        let arr=res;
        console.log(arr[0].price_two)
        var price=arr[0].price_two;
        if(price!==null){
            exchange_det(res);
        }else{
            exchange(res);
        }
       
        
    }
})