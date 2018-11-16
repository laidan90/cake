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


	console.log($("img.paofu"))
	$(".paofu").click(()=>{
		console.log(11111)
		
})
})
// 顶部导航-子列表
$(".mt_list_menu").mouseenter(function(){
	$(this).children(".tea_detail").addClass("in");	
})
$(".mt_list_menu").mouseleave(function(){
	$(this).children(".tea_detail").removeClass("in")
})


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
// console.log($("#user"))

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
//更换地址
$(".address_one button").click(function(){
	// console.log($(".address_one button"))
	var html=$(this).html();//获取新地址
	$("#add_span").html(html);//赋值给span
	$(".address").hide();//隐藏地址弹窗页面
	// console.log(html)
	// var adr=html.charCodeAt()//获取unicode码值
})



// 顶部导航-子列表
$(".mt_list_menu").mouseenter(function(){
	$(this).children(".tea_detail").addClass("in");	
})
$(".mt_list_menu").mouseleave(function(){
	$(this).children(".tea_detail").removeClass("in")
})
// 轮播图
var c_box=document.getElementsByClassName("my_carsousel_right");
var c=document.getElementById("carsousel");
var icons=document.getElementsByClassName("my_icon")
var index=0;
var timer=null;

//右侧箭头绑定单击事件
$(".arrows_right").click(function(){
		if(index==2){
			index=0;
			
		}else{
			index++;
			}
		change();
		
	})
//左侧箭头绑定单击事件
$(".arrows_left").click(function(){
	if(index==0){
		index=2;
	}else{
		index--;
		}
	change();
	
})

function change(){
	//轮播--》图片位移
	c.style.left=-index*960+"px";
	//每一次轮播前 先清小圆点背景色
	for(var i=0;i<icons.length;i++){
		icons[i].style.background="gray";
	}
	//轮播后 设置当前页面对应的小圆点的颜色
	icons[index].style.background="white";
}
//点击小圆点可跳转对应图片
for(var i=0;i<icons.length;i++){
	icons[i].onclick=function(){
		thisIndex=this.getAttribute("index");
		index=thisIndex;
		change();
	}
}
//自动轮播
timer=setInterval(function(){
	$(".arrows_right").click();
},1500);
//鼠标移入 清定时器
$(".my_carsousel_right").mouseover(function(){
	clearInterval(timer);
	
})
//鼠标移出 恢复定时器
$(".my_carsousel_right").mouseout(function(){
	timer=setInterval(function(){
		$(".arrows_right").click();
	},1500);	
})

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
//轮播左侧列表
$(".ml_list>ul>li").mouseover(function(){
	$(this).children(".list_detail").show();
})
$(".ml_list>ul>li").mouseout(function(){
	$(this).children(".list_detail").hide();
})
// 侧边栏跳转
$(".ml_list_detail").click(function(){
	window.open("http://127.0.0.1:8001/product_list.html");
})
// 查看更多
$(".my_title>div").click(function(){
	window.open("http://127.0.0.1:8001/product_list.html");
})
// 侧边栏下方跳转
$(".ml_list>ul li:nth-child(5)").click(function(){
	window.open("http://127.0.0.1:8001/detail.html?pid=15")
})

$(".ml_list>ul li:nth-child(7)").click(function(){
	window.open("http://127.0.0.1:8001/detail.html?pid=14")
})

// 购物车
$("#car").click(function(){
	window.open("http://127.0.0.1:8001/car.html");
})
// 轮播图添加跳转
$("#carsousel").click(function(){
	window.open("http://127.0.0.1:8001/product_list.html");
})
$(".mt_list_menu>a").click(function(){
	window.open("http://127.0.0.1:8001/product_list.html");
})

// 跳转查找页面
$("#search").click(function(){
	var kw=$(this).prev().children().eq(1).val();//点击搜索，获取input的值
	window.location.href=`http://127.0.0.1:8001/search.html?kw=${kw}`;//跳转查找页面
})