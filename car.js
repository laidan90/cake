// 删除商品
$(".close_one").click(function(){
    // e.stopPropagation()
   $(this).next(".bg_one").show();
    
})
$(".box>button:last-child").click(function(){
    // e.stopPropagation();//阻止冒泡
    // $(this).parent().parent().hide();
    $(".bg_one").hide();
})

// 悬停
$(".box>button:nth-child(3)").mouseenter(function(){
    
    $(".box>button:last-child").removeClass("box_in");
    $(".box>button:nth-child(3)").addClass("box_in");  
})
$(".box>button:last-child").mouseenter(function(){
    $(".box>button:last-child").addClass("box_in");
    $(".box>button:nth-child(3)").removeClass("box_in")
})
// 添加选项
$(".add_s>li:first-child").click(function(){//添加蜡烛
    $("#candle_list").show();
    $("#knife_list").hide();
})
$(".add_l>ul:first-child>li:last-child").click(function(){//添加餐具
    $("#knife_list").show();
    $("#candle_list").hide();
})
$(".candle_bg>button").click(function(){
    $(this).parent().hide();
})
// 购物车
$(".btn").click(function(){

    // 数量
    var span= $(this).parent().children().eq(1);//数量节点->数组
    var num=span.html();//数量
    if($(this)[0]==span.prev()[0]){
        num--;
        if(num<1){num=1}
    }else if($(this)[0]==span.next()[0]){
        num++; 
    }
    span[0].innerHTML=num//插入数量值

    //小计金额
    var c=$(this).parent().next().next().children();
    var span= $(this).parent().children().eq(1);//数量节点->数组
    var num=span.html();//数量
    var price=$(this).parent().prev().html().slice(0,4)//单价
    var count=$(this).parent().next().next().children().html();//金额
    var count=price*num
    c.html(count.toFixed(2))//插入新金额值
    Number();
    Money();
   
   
})

//数量合计 
function Number(){
     // var tds=$(".calc>span:nth-child(2)")
    // console.log(tds)
    // for(var td of tds){
        
    // }
    var tds=document.querySelectorAll(".calc>span:nth-child(2)");
    // console.log(tds)
    var totaln=0;
    for(var td of tds){
        td=parseInt(td.innerHTML)//转化为数值
        totaln+=td
    }
   
    $(".add_s>li:first-child>span").html(totaln)// 插入合计数量
}
Number();
// 金额合计
function Money(){
    var totalc=document.querySelectorAll(".count")
    var totalp=0;
    for(var p of totalc){
       var p=parseInt(p.innerHTML)
        totalp +=p;
    }
    console.log(totalp)
    $("#prc>ul:nth-child(2)>li:first-child").html(totalp.toFixed(2))//商品总计
    console.log($(".prc>ul:nth-child(2)>li:first-child"))
    $("#prc>ul:nth-child(2)>li:last-child").html(totalp.toFixed(2))
}
Money();

