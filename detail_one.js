// ajax请求数据
$.ajax({
    url:"http://127.0.0.1:8001/index/detail?pid=15",
    type:"get",
    success:(res)=>{
        console.log(res[0])
        // var res=res[0];//从数组里取出对象
        // let html="";
        // let parent="";

        // // 左上按钮-标题
        // function btn1(){
        //     var  {title}=res;//解构
        //     parent=$(".title_one")
        //     parent.html(title)
        // }
        // btn1();

        // // 左边大小图片
        // let pic=function(){
        //     parent=$(".my_detail_left");//找到父元素
        //     var {pic_m_one,pic_m_two,pic_m_three,pic_m_foure,pic_s_one,pic_s_two,pic_s_three,pic_s_foure}=res;//解构
        //     html=`<div class="my_detail_left_l">
        //     <img src="${pic_m_one}" alt="" />
        //     <img src="${pic_m_two}" alt="" />
        //     <img src="${pic_m_three}" alt="" />
        //     <img src="${pic_m_foure}" alt="" />	
        // </div>
        // <div class="my_detail_left_s">
        //     <img src="${pic_s_one}" alt="" />
        //     <img src="${pic_s_two}" alt="" />
        //     <img src="${pic_s_three}" alt="" />
        //     <img src="${pic_s_foure}" alt="" />
        // </div>`;
        // parent.html(html);
        // }
        // pic();

        // // 右侧价格、规格
        // function size(){
        //     parent=$(".right_size");
        //     let {title,price_one,size_one}=res;
        //     html=`<h4>${title}</h4>
        //     <br>
        // <span class="active_span">￥${price_one}<span>.00</span></span>
        //     <div>甜度: &nbsp;<img src="img/detail/detail_one/tian3.png" alt=""></div>
        //     <div class="btn_detail">
        //         <button class="active_btn">${size_one}磅</button>
        //     </div>`;
        //     parent.html(html);
        // }
        // size();

        // //商品文字介绍
        // function text(){
        //     parent=$(".describe");
        //     var {taste,stuff}=res;
        //     html=`<div class="my_detail_text">
        //     <div>
        //         <span>品牌：贝思客</span>
        //         <span >口味：${taste}</span>
        //     </div>
        //     <span>原材料：${stuff}</span>
        // </div>
        // <div class="my_detail_text">
        //     <span>最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时</span>
        //     <span>适合人群：所有人群</span>
        // </div>`;
        // parent.html(html);
        // } 
        // text();
        
        // // 详情图片
        // function detail_pic(){
        //     parent=$(".my_detail_picture");
        //     var {pic_l_one,pic_l_two,pic_l_three}=res;
        //     html=`<img src="${pic_l_one}" alt="" />
        //     <img src="${pic_l_two}" alt="" />
        //     <img src="${pic_l_three}" alt="" />
        //     <img src="img/detail/detail_one/size.jpg" alt="" />`;
        //     parent.append(html);
        // }
        // detail_pic();
        exchange(res);//调用公用方法
        
        
    
        
       
        
    }
})



