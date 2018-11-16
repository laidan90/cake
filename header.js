//顶部导航鼠标滚动事件
$(function(){
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		if(scrollTop>100){
			$("#top").addClass("topFixed");
		}
		if(scrollTop<100){
			$("#top").removeClass("topFixed")
		}
	})
})
// 顶部导航-子列表
$(".mt_list_menu").mouseenter(function(){
	$(this).children(".tea_detail").addClass("in");	
})
$(".mt_list_menu").mouseleave(function(){
	$(this).children(".tea_detail").removeClass("in")
})

// ajax请求顶部列表  顶部列表
$(
	$.ajax({
	url:"http://127.0.0.1:8001/index/product",
	type:"get",
	success:(res)=>{
		var res=res.concat(res)
		var doc=$(".tea_detail");//获取父元素ul
		var parent;//=document.querySelector(".tea_detail");
		var str="";
		//分段显示，一排4个
		 for(j=0;j<doc.length;j++){ //0-4 4-8 8-12 12-16 16-20 
			 parent=doc[j];
			 str="";//清空
			change(j*4,(j+1)*4)        
		 }	
		//  
		function change(a,b){
			for(var i=a;i<b;i++){
				var {title,pic_s,price,pid}=res[i]//解构获取数据-》插入数据
				var html=`<li class="tea_detail_pic">
				<a href="../detail.html?=${pid}"><img src="${pic_s}" alt=""></a>
				<p>${title}</p>
				<span>￥${price.toFixed(2)}</span>
			  </li>`
				str +=html;
				parent.innerHTML=str;	
			}
		 
		}
		
		
	}
    }))
// 侧边导航列表
$(
	$.ajax({
	url:"http://127.0.0.1:8001/index/product",
	type:"GET",
	success:(res)=>{
		var res=res.concat(res)
		var doc=$(".list_detail>ul");//获取父元素
		// console.log(doc)
		var str="";
		var parent=doc[0];
		for(var j=0;j<doc.length;j++){
			parent=doc[j];
			str="";//清空
			var arr=[9,20,9];
			b=arr[j];
			change(b);
		}
		function change(){		
			for(var i=0;i<b;i++){
				var {title,pic_s}=res[i]
				var html=`<li><a href="#"><img src="${pic_s}" alt="" />${title}</a></li>`
				str +=html;
				parent.innerHTML=str;
			}
		}
	}
}))
	
// 登陆页面
$(".mt_search>div:last-child").click(function () {
	$(".login").show();
  })
  $(".login_top>span:first-child").click(function () {
	$(".login").hide();
  })
  $(".my_fixed_right>div:first-child").click(function () {
	  $(".login").show();
	})
	
// 登录验证
$("form.login").submit(function(e){
	var txtName=$("[name='uname']");//获取文本框
	var pwd=$("[name='upwd']");
	if(/^[1][3,4,5]\d{9}$/.test(txtName.val())!=1){//正则表达式不匹配时
		fn("您输入的用户手机号码不正确，请重新输入")
		e.preventDefault();//阻止submit默认提交
	}else if(/^\w{6,12}$/.test(pwd.val())!=1){//用户名正确后，再检验密码
		fn("密码不正确,请重新输入帐号或密码");
		e.preventDefault();
	
	}
	
})

// 获取和失去焦点
$("[type='text']").focus(function(){
$(this).css({background:'#ddd'});
})
$("[type='text']").blur(function(){
$(this).css({background:'rgba(0,0,0,0)'})
})

//注册
$("#register").click(function(){
$(".login").hide();
$(".register").show();
})
$(".my_close").click(function(){
$(".register").hide();
})

//注册验证

$("form.register").submit(function(e){
var input=$(".my_input>input");//获取三个类数组对象
if(/^[1][3,4,5]\d{9}$/.test(input[0].value)!=1){//input[0]获取用户名元素标签-value
	fn("手机号码格式不正确")
	e.preventDefault();
}else if(/^\w{6,12}$/.test(input[1].value)!=1){//密码框
	fn("密码必须是6位以上数字或字母");
	e.preventDefault();
}else if(input[2].value!=input[1].value){
	fn("两次密码不一致")
	e.preventDefault();
}

})
// 公用验证样式
function fn(msg){
$(".msg").html(msg)

}

//定位地址
$(".logo_right>span").click(function(){
	$(".address").show();
})
$(".my_close_one").click(function(){
	$(".address").hide();
})

// 购物车
$("#car").click(function(){
	window.open("http://127.0.0.1:8001/car.html");
})
//更换地址
$(".address_one button").click(function(){
	// console.log($(".address_one button"))
	var html=$(this).html();//获取新地址
	$("#add_span").html(html);//赋值给span
	$(".address").hide();//隐藏地址弹窗页面	
})
// 顶部导航跳转
$(".mt_list_menu>a").click(function(){
	window.open("http://127.0.0.1:8001/product_list.html");
})

// 跳转查找页面
$("#search").click(function(){
	var kw=$(this).prev().children().eq(1).val();//点击搜索，获取input的值
	window.location.href=`http://127.0.0.1:8001/search.html?kw=${kw}`;//跳转查找页面
})