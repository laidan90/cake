// 产品列表
function p_list(){$.ajax({
        url:"http://127.0.0.1:8001/index/product",
        type:"get",
        success:function(res){
            var res=res.slice(0,13)//截取至13的数据 
                // res.splice(4,1)//删除第4个数据
        //  块状显示
           var html='';
           function change1(){
            var parent=$(".detail_list");
           
            for(var i=0;i<res.length;i++){
                var {title,pic_s,price,sweet_pic,salves,pid}=res[i]
                html +=`<li class="detail_menu"><a href="../detail.html?pid=${pid}"><img src="${pic_s}" alt=""></a>
                <span class="price">${price} <span>.00</span></span>
                <div>
                        <span >Sweetness:</span>
                        <img src="${sweet_pic}" alt="">          
                </div>
                <div >
                    <img src="img/detail_list/drafts.png" alt="" class="salves">${salves}
                    <img src="img/detail_list/heart.png" alt=""class="heart" >
                </div>
                <span>${title}</span>
                <div>
                    <span>加入购物车</span>
                    <span>立即购买</span>
                </div></li>`
                
            }
            
            parent.append(html);
           }
          change1();
        //   单行显示
          function change2(){
            var parent=$(".detail_list_one");
           html='';
            for(var i=0;i<res.length;i++){
                var {title,pic_s,price,pid}=res[i]
                html +=` <li class="detail_menu_one">
                <a href="../detail.html?pid=${pid}"><img src="${pic_s}" alt="" ></a>
               
                <div  class="detail_menu_two">
                    <div class="title">
                        <span>${title}</span>
                <span class="price">${price}<span>.00</span></span>
                    </div>
                    <div >
                        <div class="carts">
                            <img src="img/detail_list/icon_ablum.png" alt="">
                            <span>加入购物车</span>
                        </div>
                        <div class="carts" id="line">
                            <img src="img/detail_list/icon_buy_now.png" alt="">
                            <span>立即购买</span>
                        </div>
                    </div>
                </div>
            </li>`
                
            } 
            parent.append(html);
           }
          change2();
        }
    })
}
p_list();
// 排序条件 鼠标悬停效果
$(".my_btn_if").siblings().addClass("hover");
// 排序条件 点击选中样式
$(".fIf>span").click(function(){
    $(".fIf>span").removeClass("my_btn_if");
    $(this).addClass("my_btn_if");
});
$(".sIf>span").click(function(){
    $(".sIf>span").removeClass("my_btn_if");
    $(this).addClass("my_btn_if");
});

//显示方式绑定事件
$(".show_one").click(function(){
    $(".detail_list").show();
    $(".detail_list_one").hide();
})
$(".show_two").click(function(){
    $(".detail_list").hide();
    $(".detail_list_one").show();
})



// 点击排序
$(
    $(".my_if span").click(function(){
    var type_id=$(this).attr("type_id");//获取自定义属性
    console.log(type_id)
    // 传入排序条件
    $.ajax({
        url:`http://127.0.0.1:8001/type/type?type_id=${type_id}`,
        type:"get",
        success:function(res){
            console.log(res)
            // console.log(res[0])
            // console.log($(".detail_list"))
            //  块状显示
            var html='';
            function change1(){
             var parent=$(".detail_list");
            
             for(var i=0;i<res.length;i++){
                 var {title,pic_s,price,sweet_pic,salves,pid}=res[i]
                 html +=`<li class="detail_menu"><a href="../detail.html?pid=${pid}"><img src="${pic_s}" alt=""></a>
                 <span class="price">${price} <span>.00</span></span>
                 <div>
                         <span >Sweetness:</span>
                         <img src="${sweet_pic}" alt="">          
                 </div>
                 <div >
                     <img src="img/detail_list/drafts.png" alt="" class="salves">${salves}
                     <img src="img/detail_list/heart.png" alt=""class="heart" >
                 </div>
                 <span>${title}</span>
                 <div>
                     <span>加入购物车</span>
                     <span>立即购买</span>
                 </div></li>`
                 
             }
             
             parent.html(html);
            }
           change1();
         //   单行显示
           function change2(){
             var parent=$(".detail_list_one");
            html='';
             for(var i=0;i<res.length;i++){
                 var {title,pic_s,price,pid}=res[i]
                 html +=` <li class="detail_menu_one">
                 <a href="../detail.html?pid=${pid}"><img src="${pic_s}" alt="" ></a>
                
                 <div  class="detail_menu_two">
                     <div class="title">
                         <span>${title}</span>
                 <span class="price">${price}<span>.00</span></span>
                     </div>
                     <div >
                         <div class="carts">
                             <img src="img/detail_list/icon_ablum.png" alt="">
                             <span>加入购物车</span>
                         </div>
                         <div class="carts" id="line">
                             <img src="img/detail_list/icon_buy_now.png" alt="">
                             <span>立即购买</span>
                         </div>
                     </div>
                 </div>
             </li>`
                 
             } 
             parent.html(html);
            }
           change2();
        }
    })
})
)




