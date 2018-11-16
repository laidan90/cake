#创建数据库 cake
CREATE DATABASE cake CHARSET=UTF8;
#进入数据库
USE cake;

#创建定位地址表 addr
CREATE TABLE addr(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  aname VARCHAR(25)
);
#插入数据
INSERT INTO addr VALUES(null,'上海');
INSERT INTO addr VALUES(null,'北京');
INSERT INTO addr VALUES(null,'天津');
INSERT INTO addr VALUES(null,'无锡');
INSERT INTO addr VALUES(null,'常州');
INSERT INTO addr VALUES(null,'苏州');
INSERT INTO addr VALUES(null,'杭州');
INSERT INTO addr VALUES(null,'台州');
INSERT INTO addr VALUES(null,'宁波');
INSERT INTO addr VALUES(null,'绍兴');
INSERT INTO addr VALUES(null,'南京');
INSERT INTO addr VALUES(null,'重庆');
INSERT INTO addr VALUES(null,'成都');

#创建首页产品表 product
CREATE TABLE product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title varchar(32) ,
  pic_s varchar(128) ,
  price decimal(16,2) ,
  salves varchar(30) ,
  sweet int(11) ,
  product_type varchar(32) ,
  shelf_time DATETIME,
  sweet_pic varchar(128),
  type_id int
);
INSERT INTO product VALUES(null, 'papi熊蛋糕', 'http://148.70.50.157:8001/img/list_top/1.png',198,4559,3,'女神定制','2017-12-12','http://148.70.50.157:8001/img/detail_list/3.jpg',1);
INSERT INTO product VALUES(null, '奥利奥', 'http://148.70.50.157:8001/img/list_top/2.png',198,4312,2,'萌幻慕斯','2017-12-11','http://148.70.50.157:8001/img/detail_list/2.jpg',2);
INSERT INTO product VALUES(null, '白色丝绒', 'http://148.70.50.157:8001/img/list_top/3.png',198, 2159,4,'醇香奶油','2017-12-10', 'http://148.70.50.157:8001/img/detail_list/4.jpg',3);
INSERT INTO product VALUES(null, '布朗尼', 'http://148.70.50.157:8001/img/list_top/4.png',198,3355,4,'缤纷果味', '2017-12-14','http://148.70.50.157:8001/img/detail_list/4.jpg',6);
INSERT INTO product VALUES(null, '极地牛乳', 'http://148.70.50.157:8001/img/list_top/6.png',198, 2599, 2, '派', '2017-12-16','http://148.70.50.157:8001/img/detail_list/2.jpg',5);
INSERT INTO product VALUES(null, '莱茵河', 'http://148.70.50.157:8001/img/list_top/7.png', 198, 5688, 4, '红茶','2017-12-17', 'http://148.70.50.157:8001/img/detail_list/4.jpg',5);
INSERT INTO product VALUES(null, '蓝菲儿', 'http://148.70.50.157:8001/img/list_top/8.png',198, 4255, 4, '萌幻慕斯', '2017-12-18','http://148.70.50.157:8001/img/detail_list/4.jpg',5);
INSERT INTO product VALUES(null, '茶颜露水', 'http://148.70.50.157:8001/img/list_top/9.png', 198, 3355, 4, '萌幻慕斯','2017-12-11', 'http://148.70.50.157:8001/img/detail_list/4.jpg',4);
INSERT INTO product VALUES(null, '落莓恋曲', 'http://148.70.50.157:8001/img/list_top/10.png',198, 4599, 3, '醇香奶油','2017-12-19', 'http://148.70.50.157:8001/img/detail_list/3.jpg',4);
INSERT INTO product VALUES(null, '芒来芒趣', 'http://148.70.50.157:8001/img/list_top/11.png', 198,6665, 1, '醇香奶油','2017-12-21', 'http://148.70.50.157:8001/img/detail_list/1.jpg',5);
INSERT INTO product VALUES(null, '浓情花意', 'http://148.70.50.157:8001/img/list_top/12.png',198,4399, 3, '醇香奶油', '2017-12-22','http://148.70.50.157:8001/img/detail_list/3.jpg',4);
INSERT INTO product VALUES(null, '情定爱情海', 'http://148.70.50.157:8001/img/list_top/13.png',198, 4566, 2, '醇香奶油', '2017-12-23','http://148.70.50.157:8001/img/detail_list/2.jpg',4);



#异型图表 轮播+长图
CREATE TABLE product_cs(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  dPid int,
  pic_l VARCHAR(128)
);
INSERT INTO product_cs VALUES(1,1,"http://148.70.50.157:8001/img/Carousel/1.jpg");
INSERT INTO product_cs VALUES(null,1,"http://148.70.50.157:8001/img/Carousel/2.jpg");
INSERT INTO product_cs VALUES(null,1,"http://148.70.50.157:8001/img/Carousel/3.jpg");
INSERT INTO product_cs VALUES(null,10,"http://148.70.50.157:8001/img/floor/index-five-1.png");
INSERT INTO product_cs VALUES(null,15,"http://148.70.50.157:8001/img/floor/pc1.png");
INSERT INTO product_cs VALUES(null,13,"http://148.70.50.157:8001/img/Carousel/r2.png");
INSERT INTO product_cs VALUES(null,5,"http://148.70.50.157:8001/img/Carousel/tz3.png");
INSERT INTO product_cs VALUES(null,14,"http://148.70.50.157:8001/img/Carousel/xz1.jpg");


#产品详情表
CREATE TABLE product_detail(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title varchar(32) ,
  pic_s_one varchar(128) ,#产品小图
  pic_s_two varchar(128) ,
  pic_s_three varchar(128) ,
  pic_s_foure varchar(128) ,
  pic_m_one varchar(128),#产品大图
  pic_m_two varchar(128),
  pic_m_three varchar(128),
  pic_m_foure varchar(128),
  pic_l_one varchar(128),#详情图
  pic_l_two varchar(128),
  pic_l_three varchar(128),
  size_one decimal(16,1) ,#规格
  size_two decimal(16,1) ,
  size_three decimal(16,1) ,
  size_foure decimal(16,1) ,
  price_one int ,#价格
  price_two int ,
  price_three int,
  price_foure int ,
  taste varchar(64),#味道
  stuff varchar(64)#原材料

);
INSERT INTO product_detail VALUES(NULL,'papi熊蛋糕',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-1(1).jpg',#小图
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-2(1).jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-3(1).jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-4(1).jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-1.jpg',#大图
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-2.jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-3.jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕-4.jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕1.jpg',#详情图
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕2.jpg',
'http://148.70.50.157:8001/img/detail/papi熊/PAPI熊蛋糕3.jpg',
'1.2',null,null,null,#规格
'198',null,null,null,#价格
"舞动巧克力","巧克力、草莓果馅、可可粉、进口安佳奶油");
INSERT INTO product_detail VALUES(NULL,'奥利奥',
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-2(1).jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-3(1).jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-4(1).jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-2.jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-3.jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士-4.jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士2.jpg",
"http://148.70.50.157:8001/img/detail/奥利奥/奥利奥雪域牛乳芝士3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"浓情芝士","进口新鲜蓝莓、进口原装安佳奶油、奶酪 进口黄油");
INSERT INTO product_detail VALUES(NULL,'白色红丝绒',
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-2(1).jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-3(1).jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-4(1).jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-2.jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-3.jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒-4.jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒2.jpg",
"http://148.70.50.157:8001/img/detail/白色丝绒/白色红丝绒3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"醇香奶油","进口安佳淡奶油、红丝绒预拌粉、甜菜根粉");
INSERT INTO product_detail VALUES(NULL,'布朗尼精灵',
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-2(1).jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-3(1).jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-4(1).jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-2.jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-3.jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵-4.jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵2.jpg",
"http://148.70.50.157:8001/img/detail/布朗尼/布朗尼精灵3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"舞动巧克力","安佳淡奶油、黑巧克力、可可粉、朗姆酒、核桃仁");
INSERT INTO product_detail VALUES(NULL,'极地牛乳',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-1(1).jpg',#小图
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-2(1).jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-3(1).jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-4(1).jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-1.jpg',#大图
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-2.jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-3.jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳-4.jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳.jpg',#详情图
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳.jpg',
'http://148.70.50.157:8001/img/detail/极地牛乳/极地牛乳.jpg',
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"浓情芝士","进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁");
INSERT INTO product_detail VALUES(NULL,'莱茵河莓妖精',
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-2(1).jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-3(1).jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-4(1).jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-2.jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-3.jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精-4.jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精2.jpg",
"http://148.70.50.157:8001/img/detail/莱茵河/莱茵河莓妖精3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"浓情芝士","进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪");
INSERT INTO product_detail VALUES(NULL,'蓝妃儿',
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-2(1).jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-3(1).jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-4(1).jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-2.jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-3.jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿-4.jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿2.jpg",
"http://148.70.50.157:8001/img/detail/蓝妃儿/蓝妃儿3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"缤纷果味","进口蓝莓、进口安佳淡奶油");
INSERT INTO product_detail VALUES(NULL,'露水茶颜',
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-2(1).jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-3(1).jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-4(1).jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-2.jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-3.jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜-4.jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜2.jpg",
"http://148.70.50.157:8001/img/detail/露水茶颜/露水茶颜3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"萌幻慕斯","进口抹茶粉、新西兰安佳淡奶油、进口巧克力");
INSERT INTO product_detail VALUES(NULL,'落莓恋曲',
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-2(1).jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-3(1).jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-4(1).jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-2.jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-3.jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲-4.jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲2.jpg",
"http://148.70.50.157:8001/img/detail/落莓恋曲/落莓恋曲3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"缤纷果味","德国进口白巧克力、新西兰安佳淡奶油、新鲜草莓、草莓果酱");
INSERT INTO product_detail VALUES(NULL,'芒来芒趣',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-1(1).jpg',#小图
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-2(1).jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-3(1).jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-4(1).jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-1.jpg',#大图
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-2.jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-3.jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣-4.jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣1.jpg',#详情图
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣2.jpg',
'http://148.70.50.157:8001/img/detail/芒来芒趣/芒来芒趣3.jpg',
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"缤纷果味","芒果果溶、安佳淡奶油、新鲜芒果、白巧克力");
INSERT INTO product_detail VALUES(NULL,'浓情花意',
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-2(1).jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-3(1).jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-4(1).jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-2.jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-3.jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意-4.jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意2.jpg",
"http://148.70.50.157:8001/img/detail/浓情花意/浓情花意3.jpg",
"1.2",null,null,null,#规格
"198",null,null,null,#价格
"醇香奶油","纯牛奶、木糖醇、安佳淡奶油");
INSERT INTO product_detail VALUES(NULL,'情定爱情海',
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-2(1).jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-3(1).jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-4(1).jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-2.jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-3.jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海-4.jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海2.jpg",
"http://148.70.50.157:8001/img/detail/情定爱情海/情定爱情海3.jpg",
"1.2","2.2","3.2","7.0",#规格
"198","298","398","698",#价格
"醇香奶油","原味戚风胚+特制乳脂奶油");


INSERT INTO product_detail VALUES(NULL,'吉致牛轧糖(巴旦木味)',
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-2(1).jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-3(1).jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-4(1).jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-2.jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-3.jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)-4.jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)2.jpg",
"http://148.70.50.157:8001/img/detail/牛轧糖/吉致牛轧糖(巴旦木味)3.jpg",
"1.0",null,null,null,#规格
"68",null,null,null,#价格
"萌幻慕斯","麦芽糖饴、白砂糖、奶粉、饮用水、黄油、白巧克力、鸡蛋、开心果酱");
INSERT INTO product_detail VALUES(NULL,'蝎美人',
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-2(1).jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-3(1).jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-4(1).jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-2.jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-3.jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人-4.jpg",
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/星座蛋糕/蝎美人2.jpg",
null,
"0.8",null,null,null,#规格
"98",null,null,null,#价格
"舞动巧克力","有机草莓、进口黑巧克力、进口安佳淡奶油、进口安佳黄油");
INSERT INTO product_detail VALUES(NULL,'吉致泡芙',
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-1(1).jpg",#小图
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-2(1).jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-3(1).jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-4(1).jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-1.jpg",#大图
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-2.jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-3.jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙-4.jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙1.jpg",#详情图
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙2.jpg",
"http://148.70.50.157:8001/img/detail/泡芙/吉致泡芙3.jpg",
"0.8",null,null,null,#规格
"88",null,null,null,#价格
"醇香奶油","顶级酥壳,天然香草棒,新西兰进口奶油(四只装)");
