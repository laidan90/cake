
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

//楼层商品列表
$(

	$.ajax({
		type:"get",
		url:"http://127.0.0.1:8001/index/product",
		success:(res)=>{
		var res=res.concat(res)
		var parent=$(".my_product");
		var str='';
		function change(){
			for(var i=0;i<parent.length;i++){
				var {title,price,salves,pic_s,pid}=res[i];//解构
				var html=`<a href="../detail.html?pid=${pid}"><img src="${pic_s}" /></a>
            <span>${title}</span><br />
            <span>￥ <span>${price.toFixed(2)}</span> </span><br>
            <span>销量<span>${salves}</span></span><br>
             <img src="img/floor/index-five-tab-car.png" />`;
				str = html;
				parent[i].innerHTML=str;
				
			}
		}
		change();
		}
	})
)

//轮播图+特殊图
$(
	$.ajax({
		url:"http://127.0.0.1:8001/index/products",
		type:"get",
		success:function(res){
			// console.log(res)///promise???
			
			//轮播图
		function change1(){
			var html="";
			var parent=$('#carsousel');//获取父元素div
			for(var i=0;i<3;i++){
				var {pic_l}=res[i];
				html += `<img src="${pic_l}" >`;
				
			}
			parent.append(html);
			$("#carsousel>img").click(function(){
				console.log(111)
			})
		}
		change1();
		
			//新品推送
			
		function change2(){
			var arr=res.splice(5,7);//获取新数组
				// console.log(arr)
			var html='';
			var pid=[13,5,14]
			for(var i=0;i<arr.length;i++){
				var parent=$("#new_product");
				var {pic_l,dPid}=arr[i]
				 

				html +=`<a href="../detail.html?pid=${dPid}"><div class="col-lg-4"><img src="${pic_l}"></div></a>`;
				}
				parent.append(html);
				//console.log(parent.append(html))
			};
			change2();
			//楼层一 2张单张图片	
			function change3(){
				var arr=res.splice(3.5);//截取新数组
				
				var html='';
				var parent=$("#my_left_product");//获取父元素
				var {pic_l,dPid}=arr[0];
				html = `<a href="../detail.html?pid=${dPid}"><img src="${pic_l}" ></a>`;
				$(html).appendTo(parent);
				parent1=$(".my_center_floor>a");
				var {pic_l}=arr[1];
				html = `<img src="${pic_l}" >`;
				$(html).appendTo(parent1);
				
			}
			change3();
		}
	})
)




