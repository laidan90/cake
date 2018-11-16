//ajax 查询请求
$(function(){
    if(location.search.indexOf("kw=")!=-1){//如果存在kw脚标
         var str=location.search;//url转码
        // console.log(str)
        var kw=decodeURI(str.split("=")[1]);//获取关键词
        console.log(kw)
        // ajax请求数据
        $.ajax({
            url:`http://127.0.0.1:8001/index/search?kw=${kw}`,
            type:"get",
            success:function(res){
                // console.log(kw)
                
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
                // 插入共搜索的数量值
                // console.log(res.length)
                $("#num").html(res.length)
                // console.log($("#num"))
            }
        })
    }
})