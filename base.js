/* *****************商品详情页公用样式***************/
/* 加购数量按钮 */
(function(){
    var btn1=document.getElementById("btn1");
    // console.log(btn1)
    var btn2=document.getElementById("btn2");
    var ctx1=btn1.getContext("2d");
    var ctx2=btn2.getContext("2d");
    // console.log(ctx1)
    ctx1.fillStyle="#000";
    ctx1.fillRect(5,7,8,3)
    ctx2.fillRect(4,7,10,3)
    ctx2.beginPath();
    ctx2.fillRect(7.5,4,2.5,10)
})();


// 加入购物车弹窗弹窗
let pro_num = 1;//声明加购数量
$("#car").click(function(){
    // console.log(pro_num)
    $(".car_bg").show();//显示
    $(".car_value").html(pro_num);//插入加购数量值
})
//关闭弹窗
$(".car_box>input").click(function(e){
    e.stopPropagation();//阻止冒泡
    $(".car_bg").hide();
})
// 数量加减  
$(".btn_can").click(function(){
    let num= $(this).parent().parent().children().eq(1);//数量所在元素标签-》返回是一个对象
        pro_num=num[0].value;  
        if($(this).parent().html()==num.prev().html()){ 
            pro_num--;
            if(pro_num<1){pro_num=1}
        }else if($(this).parent().html()==num.next().html()){
            pro_num++;
        }
        num[0].value=pro_num
})
// 描述、评价切换激活项样式
$(".my_detail>span").click(function(){
    $(".my_detail>span").removeClass("active_text");
    $(this).addClass("active_text")
})
//  描述、评价切换
$(".my_detail>span:last-child").click(function(){
    $(".describe").hide();
    $(".discuss_all").show();
    
})
$(".my_detail>span:first-child").click(function(){
    $(".describe").show();
    $(".discuss_all").hide();
})

var exchange=function(res){
    var res=res[0];//从数组里取出对象
    let html="";
    let parent="";

     // 左上按钮-标题
     function btn1(){
        var  {title}=res;//解构
        parent=$(".title_one")
        parent.html(title)
    }
    btn1();

    // 左边大小图片
    let pic=function(){
        parent=$(".my_detail_left");//找到父元素
        var {pic_m_one,pic_m_two,pic_m_three,pic_m_foure,pic_s_one,pic_s_two,pic_s_three,pic_s_foure}=res;//解构
        html=`<div class="my_detail_left_l">
        <img src="${pic_m_one}" alt="" />
        <img src="${pic_m_two}" alt="" />
        <img src="${pic_m_three}" alt="" />
        <img src="${pic_m_foure}" alt="" />	
    </div>
    <div class="my_detail_left_s">
        <img src="${pic_s_one}" alt="" />
        <img src="${pic_s_two}" alt="" />
        <img src="${pic_s_three}" alt="" />
        <img src="${pic_s_foure}" alt="" />
    </div>`;
    parent.html(html);
    }
    pic();
    // 右侧价格、规格
    function size(){
        parent=$(".right_size");
        let {title,price_one,size_one}=res;
        html=`<h4>${title}</h4>
        <br>  
    <span class="active_span">￥${price_one}<span>.00</span></span>
        <div>甜度: &nbsp;<img src="img/detail/detail_one/tian3.png" alt=""></div>
        <div class="btn_detail">
            <button class="active_btn">${size_one}磅</button>
        </div>`;
        parent.html(html);
    }
    size();

    //商品文字介绍
    function text(){
        parent=$(".describe");
        var {taste,stuff}=res;
        html=`<div class="my_detail_text">
        <div>
            <span>品牌：贝思客</span>
            <span >口味：${taste}</span>
        </div>
        <span>原材料：${stuff}</span>
    </div>
    <div class="my_detail_text">
        <span>最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时</span>
        <span>适合人群：所有人群</span>
    </div>`;
    parent.html(html);
    } 
    text();

    // 详情图片
    function detail_pic(){
        parent=$(".my_detail_picture");
        var {pic_l_one,pic_l_two,pic_l_three}=res;
        html=`<img src="${pic_l_one}" alt="" />
        <img src="${pic_l_two}" alt="" />
        <img src="${pic_l_three}" alt="" />
        <img src="img/detail/detail_one/size.jpg" alt="" />`;
        parent.append(html);

    
    
    }
    detail_pic();

    // 点击更换大图
    $(".my_detail_left_s>img").click(function(){
        var index=$(this).index()//获取点击图片的下标
        $(".my_detail_left_l>img").hide();//所有大图隐藏
        $(".my_detail_left_l>img").eq(index).show();//只显示小图对应下标的大图
    })
}
var exchange_det=function(res){
    var res=res[0];//从数组里取出对象
    let html="";
    let parent="";

     // 左上按钮-标题
     function btn1(){
        var  {title}=res;//解构
        parent=$(".title_one")
        parent.html(title)
    }
    btn1();

    // 左边大小图片
    let pic=function(){
        parent=$(".my_detail_left");//找到父元素
        var {pic_m_one,pic_m_two,pic_m_three,pic_m_foure,pic_s_one,pic_s_two,pic_s_three,pic_s_foure}=res;//解构
        html=`<div class="my_detail_left_l">
        <img src="${pic_m_one}" alt="" />
        <img src="${pic_m_two}" alt="" />
        <img src="${pic_m_three}" alt="" />
        <img src="${pic_m_foure}" alt="" />	
    </div>
    <div class="my_detail_left_s">
        <img src="${pic_s_one}" alt="" />
        <img src="${pic_s_two}" alt="" />
        <img src="${pic_s_three}" alt="" />
        <img src="${pic_s_foure}" alt="" />
    </div>`;
    parent.html(html);
    }
    pic();

    // 右侧价格、规格
    function size(){
        parent=$(".right_size");
        let {title,price_one,price_two,price_three,price_foure,size_one,size_two,size_three,size_foure}=res;
        html=`<h4>${title}</h4>
        <br>  
    <span class="active_span">￥${price_one}<span>.00</span></span>
    <span>￥${price_two}<span>.00</span></span>
    <span>￥${price_three}<span>.00</span></span>
    <span >￥${price_foure}<span>.00</span></span>
        <div>甜度: &nbsp;<img src="img/detail/detail_one/tian3.png" alt=""></div>
        <div class="btn_detail">
            <button class="active_btn">${size_one}磅</button>
            <button>${size_two}磅</button>
            <button>${size_three}磅</button>
            <button >${size_foure}磅</button>
        </div>`;
        parent.html(html);
    }
    size();

    //商品文字介绍
    function text(){
        parent=$(".describe");
        var {taste,stuff}=res;
        html=`<div class="my_detail_text">
        <div>
            <span>品牌：贝思客</span>
            <span >口味：${taste}</span>
        </div>
        <span>原材料：${stuff}</span>
    </div>
    <div class="my_detail_text">
        <span>最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时</span>
        <span>适合人群：所有人群</span>
    </div>`;
    parent.html(html);
    } 
    text();

    // 详情图片
    function detail_pic(){
        parent=$(".my_detail_picture");
        var {pic_l_one,pic_l_two,pic_l_three}=res;
        html=`<img src="${pic_l_one}" alt="" />
        <img src="${pic_l_two}" alt="" />
        <img src="${pic_l_three}" alt="" />
        <img src="img/detail/detail_one/size.jpg" alt="" />`;
        parent.append(html);

    
    
    }
    detail_pic();

    // 点击更换大图
    $(".my_detail_left_s>img").click(function(){
        var index=$(this).index()//获取点击图片的下标
        $(".my_detail_left_l>img").hide();//所有大图隐藏
    $(".my_detail_left_l>img").eq(index).show();//只显示小图对应下标的大图
    
    })
    // 规格介绍
    $(".btn_detail>button").click(function(){
        var index=$(this).index();
        $(".size").removeClass("active")
        $(".size").eq(index).addClass("active")
        $(".btn_detail>button").removeClass("active_btn")
        $(this).addClass("active_btn")
        // 更换价格文字
        $(".my_detail_right>div:first-child>span").removeClass("active_span")
        $(".my_detail_right>div:first-child>span").eq(index).addClass("active_span")
    })
}

