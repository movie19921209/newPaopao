//alert("ok");
//~~~~~~~~~~~~~~~~~~创建泡泡的方法
var hubble={	

//!!!!!!!!!!!!!!!!!!!!!!!!!!随机颜色	
	getColor:function(){			
		return  '#' +
   		 (function(color){
   		 	return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
    		 && (color.length == 6) ?  color : arguments.callee(color);
 		 })('');	
	},

	
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!添加li	Math.random()
	clickElement:function(){
		var i =Math.floor(Math.random()*(15-5+1)+7);				//设随机li个数
		for(var n=0;n<=i;n++){
			var color = this.getColor();
			var opacityDu = (Math.floor(Math.random()*(100-1+1)+1))/70; 
			var liWidth = Math.floor(Math.random()*(100-50+1)+50);		//宽高
			var liTop = Math.floor(Math.random()*(400-1+1)+1);			//top
			var liLeft = Math.floor(Math.random()*(830-1+1)+1);		//left
			var lis = $("<li></li>");
			lis.css("width",liWidth);
			lis.css("opacity",opacityDu);
			lis.css("height",liWidth);
			lis.css("borderRadius",liWidth/2);
			lis.css("position","absolute");
			lis.css("left",liLeft);
			lis.css("top",liTop);
			lis.css("transition","all 3s linear");//linear
			lis.css("backgroundImage","radial-Gradient(transparent,transparent,"
					+this.getColor());
			$("#liFirst1").append(lis);
		}
	},
	
	
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~飘散
	liFloat:function(){
			var n = ($("#liFirst1>li"));
			var ulW =  parseInt($("#liFirst1").css("width"));	
			for(var i=0;i<($("#liFirst1>li")).length;i++){
				var s = parseInt(Math.floor(Math.random()*(100-30+1)+10));
				var x = parseInt(Math.floor(Math.random()*(100-30+1)+10));		
				var y = parseInt(Math.floor(Math.random()*(100-30+1)+10));		
				if(x%2==0){x=x-x-x;};if(y%2==0){y=y-y-y;};							//往上或往下
				var left =parseInt($(n[i]).css("left"));							//x位移目标值
				var top =parseInt($(n[i]).css("top"));								//y位移目标值
				var liW =parseInt($(n[i]).css("height"));							//获取每一个元素宽

				if(left>0&&left+liW<ulW){
					$(n[i]).css("left",left+x);
				}else if(left<0){
					$(n[i]).css("left",left+x);
				}else if(left>ulW-liW){
					$(n[i]).css("left",left-x);
				}
				if(top>0&&top+liW<ulW){
					$(n[i]).css("top",top+y);
				}else if(top<0){
					$(n[i]).css("top",top+y);
				}else if(top>ulW-liW){
					$(n[i]).css("top",top-y);
				}
			}	
	},
	
	
	//线性光幕开始创建left
	solodLeft:function(){
		var lis = $("<li></li>");//创建一个正方形
		var liWidth = Math.floor(Math.random()*(250-150+1)+150);		//宽
		var liHeight = Math.floor(Math.random()*(20-10+1)+10);		//高
		var opacityDu = (Math.floor(Math.random()*(100-1+1)+1))/100;
		var liTop = Math.floor(Math.random()*(500-1+1)+1);			//top
		var liLeft = Math.floor(Math.random()*(930-1+1)+1);		//left
		var Ulwidth = $("#Ulsolid").css("width");
		var s = Math.floor(Math.random()*(10-4+1)+4);		
		lis.css("position","absolute"); 
		lis.css("opacity",opacityDu);
		lis.css("left","-200px");
		lis.css("top",liTop);
		lis.css("width",liWidth);
		lis.css("height",liHeight);
		lis.addClass("lisLeft");
		//console.log(lis.get(0).className);
		lis.css("transition","all "+s+"s linear");//linear
		lis.css("backgroundImage","linear-Gradient(90deg,transparent 0%,"
				+hubble.getColor()+" 80%");
		$("#Ulsolid").append(lis);
		setInterval(function(){
			lis.remove();
		},s+"000");
	},

//^^^^^^^^^^^^^^^^线性光幕开始创建top
	solodTop:function(){
		var lis = $("<li></li>");//创建一个正方形
		var liWidth = Math.floor(Math.random()*(20-10+1)+10);		//宽
		var liHeight = Math.floor(Math.random()*(250-150+1)+150);			//高
		var opacityDu = (Math.floor(Math.random()*(100-1+1)+1))/100;
		var liTop = Math.floor(Math.random()*(500-1+1)+1);			//top
		var liLeft = Math.floor(Math.random()*(930-1+1)+1);		//left
		var Ulwidth = $("#Ulsolid").css("width");
		var s = Math.floor(Math.random()*(10-4+1)+4);	
		lis.css("position","absolute");
		lis.css("opacity",opacityDu);
		lis.css("left",liLeft); 
		lis.css("top","-200px");
		lis.css("width",liWidth);
		lis.css("height",liHeight);	
		lis.addClass("lisTop");
		lis.css("transition","all "+s+"s linear");//linear
		lis.css("backgroundImage","linear-Gradient(transparent 0%,"
			+hubble.getColor()+" 80%");
		$("#Ulsolid").append(lis);
		setInterval(function(){
			lis.remove();
		},s+"000");
	},


//^^^^^^^^^^^^^^^^线性光幕开始创建	right
	solodRight:function(){
		var lis = $("<li></li>");//创建一个正方形
		var liWidth = Math.floor(Math.random()*(250-150+1)+150);		//宽
		var liHeight = Math.floor(Math.random()*(20-10+1)+10);			//高
		var opacityDu = (Math.floor(Math.random()*(100-1+1)+1))/100;
		var liTop = Math.floor(Math.random()*(500-1+1)+1);			//top
		var liLeft = Math.floor(Math.random()*(930-1+1)+1);		//left
		var Ulwidth = $("#Ulsolid").css("width");
		var s = Math.floor(Math.random()*(10-4+1)+4);	
		lis.css("position","absolute");
		lis.css("opacity",opacityDu);
		lis.css("right","-200px"); 
		lis.css("top",liTop);
		lis.css("width",liWidth);
		lis.css("height",liHeight);	
		lis.addClass("lisRight");
		lis.css("transition","all "+s+"s linear");//linear
		lis.css("backgroundImage","linear-Gradient(-90deg,transparent 0%,"
			+hubble.getColor()+" 80%");
		$("#Ulsolid").append(lis);
		setInterval(function(){
			lis.remove();
		},s+"000");
	},
	
	//^^^^^^^^^^^^^^^^线性光幕开始创建	buttom
	solodBottom:function(){
		var lis = $("<li></li>");//创建一个正方形
		var liWidth = Math.floor(Math.random()*(20-10+1)+10);			//宽
		var liHeight = Math.floor(Math.random()*(250-150+1)+150);		//高
		var opacityDu = (Math.floor(Math.random()*(100-1+1)+1))/100;
		var liTop = Math.floor(Math.random()*(500-1+1)+1);			//top
		var liLeft = Math.floor(Math.random()*(930-1+1)+1);		//left
		var Ulwidth = $("#Ulsolid").css("width");
		var s = Math.floor(Math.random()*(10-4+1)+4);
		lis.css("position","absolute");
		lis.css("opacity",opacityDu);
		lis.css("bottom","-200px"); 
		lis.css("left",liLeft);
		lis.css("width",liWidth);
		lis.css("height",liHeight);	
		lis.addClass("lisBottom");
		lis.css("transition","all "+s+"s linear");//linear
		lis.css("backgroundImage","linear-Gradient(0deg,transparent 0%,"
			+hubble.getColor()+" 80%");
		$("#Ulsolid").append(lis);
		/**/
		setInterval(function(){
			lis.remove();
		},s+"000");
	},

//线性光幕开始位移		left
	solodLeftMove:function(){
		var lis = $(".lisLeft");
		var Ulwidth = parseInt($("#Ulsolid").css("width"));
		for(var i=0;i<lis.length;i++){
			$(lis[i]).css("left",Ulwidth);
		}	
	},
//线性光幕开始位移		top
	solodTopMove:function(){
		var lis = $(".lisTop");
		var Ulheight = parseInt($("#Ulsolid").css("height"));
		for(var i=0;i<lis.length;i++){
			$(lis[i]).css("top",Ulheight);
		}	
	},
//线性光幕开始位移		right
	solodRightMove:function(){
		var lis = $(".lisRight");
		var Ulwidth = parseInt($("#Ulsolid").css("width"));
		for(var i=0;i<lis.length;i++){
			$(lis[i]).css("right",Ulwidth);
		}	
	},
//线性光幕开始位移		Buttom
	solodBottomMove:function(){
		var lis = $(".lisBottom");
		var Ulheight = parseInt($("#Ulsolid").css("height"));
		for(var i=0;i<lis.length;i++){
			$(lis[i]).css("bottom",Ulheight);
		}	
	},


	
}

//开始调用线性光幕
//开始调用线性光幕
var n = Math.floor(Math.random()*(3000-500+1)+700);			//top
setInterval(function(){									//开始调用线性光幕
	hubble.solodLeft();									//开始调用线性光幕
	hubble.solodLeftMove();
	hubble.solodTop();
	hubble.solodTopMove();
	hubble.solodRight();
	hubble.solodRightMove();
	hubble.solodBottom();
	hubble.solodBottomMove();
},n);


// ^^^^^^^^^^^^^^^^^^^^开启漂浮函数的方法

	$("#hubbleF").click(function(){
		document.getElementById("liFirst1").innerHTML="";
		document.getElementById("Ulsolid").innerHTML="";
		document.getElementById("liBroken").innerHTML="";
		if($("#liFirst1").is(":hidden")){
			$(".imgC_zt").hide();	//点击隐藏所有的效果
			$("#liFirst1").show("explode");				//泡泡漂浮
			$(".GliFirst").show("explode");				//叉扛
			
		}else{
			$(".imgC_zt").hide();						//点击隐藏所有的效果
			$(".GliFirst").hide();						//叉扛
		}
		//$("#hubble").show();
		hubble.clickElement();
		hubble.getColor();	
	setInterval(function(){
		hubble.liFloat();	
	},3000);
});




//^^^^^^^^^^^^^^^^^^^^^^       线性光幕开关

$("#solid").click(function(){
	document.getElementById("liFirst1").innerHTML="";
	document.getElementById("Ulsolid").innerHTML="";
	document.getElementById("liBroken").innerHTML="";
	if($("#Ulsolid").is(":hidden")){
		$("#imgC>.ul1").hide();						//点击隐藏所有的效果
		$("#Ulsolid").show("explode");				//显示自己
		$(".GliFirst").show("explode");				//显示叉扛
													//引用线性效果
	}else{
		$("#imgC>.ul1").hide();						//点击隐藏所有的效果
		$(".GliFirst").hide();						//叉扛
	}
});




//*****************div   叉扛关闭开关

$(".GliFirst").click(function(){						//关闭 叉扛开关
	$(".GliFirst").hide("explode");						//关闭叉扛
	$("#liFirst1").hide("explode");						//关闭泡泡漂浮
	$("#liBroken").hide("explode");						//关闭鼠标移入
	$("#Ulsolid").hide("explode");						//关闭线性
});	

$("#zhuTi").click(function(){
	if($("#header_left>ul").is(":hidden")){
		$("#header_left>ul").show();	
	}else{
		$("#header_left>ul").hide();
	}
});
$("#header_left>ul").click(function(){
	if($("#header_left>ul").is(":hidden")){
		$("#header_left>ul").show();
	}else{
		$("#header_left>ul").hide();
	}
});


/*~~ __          图片轮播开始        __ ~~*/
/*~~ __          图片轮播开始        __ ~~*/
/*~~ __          图片轮播开始        __ ~~*/


 var nCarouse={
	index : 0,						//当前显示
	nextIndex : 0,					//右向左移动的
	lock : true,					//锁
	lefts :150,						//移动的长度
	ss : 800,						//轮播时长
	

/*右边点击按钮
*/
	change:function(){
		this.lefts=150;
		if(nCarouse.lock==true){
			nCarouse.lock=false;
			var that=this;
			$("#imgSow"+this.index).css({"display":"block",
				"right":0,"z-index":"0","opacity":1});
			that.nextIndex++;
			if(that.nextIndex==5){ that.nextIndex=0 }
			$("#imgSow"+that.nextIndex).css({"display":"block",
				"right":-that.lefts,"z-index":"10","opacity":0})
				
			$("#imgSow"+that.index).animate({
				right:parseInt($("#imgSow"+this.index).css("right"))
					+that.lefts,
				opacity:"0",
			},that.ss,function(){  
				  that.index++;  
				  if(that.index==5){ that.index=0};
				  nCarouse.lock=true;
			})
					
			$("#imgSow"+that.nextIndex).animate({
				opacity:"1",
				right:0,
			},that.ss);
			$("#imgTrade>li").removeClass("active").eq(that.nextIndex).addClass("active")

		}
	},
/*左边点击按钮
*/
	changeLeft:function(){
		if(nCarouse.lock==true){
			nCarouse.lock=false;
			var that=this;
			$("#imgSow"+this.index).css({"display":"block",
				"right":0,"z-index":0,"opacity":1});
			that.nextIndex--;
			if(that.nextIndex==-1){ that.nextIndex=4;}
			$("#imgSow"+this.nextIndex).css({"display":"block",
				"right":+that.lefts,"z-index":10,"opacity":0});			
			$("#imgSow"+this.index).animate({
				right:-that.lefts,
				opacity:0,
			},that.ss,function(){
				$("#imgSow"+this.index).css("z-index",10);
			});
			$("#imgSow"+this.nextIndex).animate({
				right:0,
				opacity:1,
			},that.ss,function(){
				that.index--;  
				if(that.index==-1){ that.index=4};
				$("#imgSow"+that.nextIndex).css("z-index",0);
				nCarouse.lock=true;
			});
			$("#imgTrade>li").removeClass("active").eq(that.nextIndex).addClass("active")
		}
	},
			
	hovering : function(){
		var that=this;
		$("#imgTrade li").click/*mouseover*/(function(){
			if( nCarouse.lock==true){
				nCarouse.lock=false;
			var i = parseInt($(this).index());
				console.log(i);
			//点击的那个下面的li的下标  that.index 正显示的div的下标
			if(i>that.index ){			//左向右
				$("#imgSow"+that.index).css({"display":"block",
					"right":0,"z-index":"0","opacity":1});
				that.nextIndex=i;
				if(that.nextIndex==5){ that.nextIndex=0 }
				$("#imgSow"+that.nextIndex).css({"display":"block",
					"right":-that.lefts,"z-index":"10","opacity":0})

				$("#imgSow"+that.index).animate({
					right:parseInt($("#imgSow"+that.index).css("right"))
					+that.lefts,
					opacity:"0",
				},that.ss,function(){
					that.index=that.nextIndex;
					nCarouse.lock=true;
				})

				$("#imgSow"+that.nextIndex).animate({
					opacity:"1",
					right:0,
				},that.ss);
				$("#imgTrade>li").removeClass("active").eq(that.nextIndex).addClass("active")
				
			}else if(i<that.index){			//右向左
				$("#imgSow"+that.index).css({"display":"block",
					"right":0,"z-index":0,"opacity":1});
				that.nextIndex=i;
				if(that.nextIndex==-1){ that.nextIndex=4;}
				$("#imgSow"+that.nextIndex).css({"display":"block",
					"right":+that.lefts,"z-index":10,"opacity":0});
				$("#imgSow"+that.index).animate({
					right:-that.lefts,
					opacity:0,
				},that.ss,function(){
					$("#imgSow"+that.index).css("z-index",10);
				});
				$("#imgSow"+that.nextIndex).animate({
					right:0,
					opacity:1,
				},that.ss,function(){
					that.index=that.nextIndex;
					$("#imgSow"+that.nextIndex).css("z-index",0);
					nCarouse.lock=true;
				});
				$("#imgTrade>li").removeClass("active").eq(that.nextIndex).addClass("active")
			}
			else if(i==that.index){
				nCarouse.lock=true;
			}
			}							
		});
	}
 }


nCarouse.hovering();					//调用12345

var timer = setInterval(function(){		//图片轮播
	 nCarouse.change();
},2000);
$("#imgC").hover(function(){			//hover停止定时器。
 	clearInterval(timer);
},function(){
	timer = setInterval(function(){		//鼠标丢失开放定时器
		nCarouse.change();
	},2000);
})
imgC_right.onclick=function(){  nCarouse.change(); }			//点击向右
imgC_left.onclick=function(){  nCarouse.changeLeft(); }			//点击向右



//code edition
//加微信
$('#sao').click(function(){
	$("#code").show();
	$("#edition").show();
});
$("#weiXin_head").click(function(){
	$("#code").hide();
	$("#edition").hide();
});


//logo
$(".logoLi").mouseover(function(){
	var that = this;
	for(var n=0;n<$(".logoLi").length;n++){
		$(".logoLi").css("width","20%");
		$(".logoLi>div").css("left","38%");
	}
	$(that).css({"width":"60%"});
	$(that).children("div").css({"left":"15%","top":"33.33%"});
	$(that).children("p").css({"top":"37%","left":"-10%"});
	$(that).children("h4").css({"opacity":"1","margin-left":"60%"});
	$(".logoLi").mouseout(function(){
		$(".logoLi").css("width","33.33%");
		$(".logoLi>div").css({"left":"40%","top":"15%"});
		$(".logoLi>p").css({"top":"60%","left":"0"});
		$(that).children("h4").css({"opacity":"0","margin-left":"0%"});
	});
});

var organ = {			//风琴
	index: 0,//当前展开的li
	nextIndex: null,//需要变换的元素标号
	s: 5000,//秒
	timer: null,//接受正常运行的一个方法
	begin: function () {//运行整个机制
		this.timer = setInterval(this.autoToggle.bind(this), this.s);
		this.click_organ();
	},
	autoToggle: function () {		//自动开关
		$("#organ" + this.index).css({"width": "60%"});
		$("#organ" + this.index+">.organ_10").css({"opacity":0});
		$("#organ" + this.index+">.organ_60").css({"opacity":1});
		$("#organ" + this.index+">.organ_60>li:nth-child(2)").css({"left":0});
		this.nextIndex = this.index - 1;
		if (this.nextIndex < 0) {	this.nextIndex = 4}
		$("#organ" + this.nextIndex).css({"width": "10%"});
		$("#organ" + this.nextIndex+">.organ_60").css({"opacity":0});
		$("#organ" + this.nextIndex+">.organ_10").css({"opacity":1});
		this.index++;
		if (this.index == 5) {	this.index = 0;}
	},
	click_organ: function () {//获取鼠标事件的开关
		var that = this;
		$("#organ").hover(function () {
			clearInterval(that.timer);
			$("#organ>li").click(function () {
				if(that.index!= $(this).index()){						//如果当前点击的 不 是显示宽为60的折执行一下
					for (var i = 0; i < $("#organ>li").length; i++) {//所有盒子宽改为10
						$("#organ" + i).css({"width": "10%"});
					}
					$(this).css("width", "60%");						//当前点击盒子宽边60
					$("#organ" + that.index+">.organ_60").css({"opacity":0});//点击之前宽为60下面ul隐藏
					$("#organ" + that.index+">.organ_10").css({"opacity":1});//			        div显示
					that.index= $(this).index();
					$("#organ" + that.index+">.organ_60").css({"opacity":1});//点击之前宽为60下面ul显示
					$("#organ" + that.index+">.organ_10").css({"opacity":0});//			        div隐藏
				}
			})
		}, function () {
			that.timer = setInterval(that.autoToggle.bind(that), that.s);
		});
	},
}
window.onload=function(){
	organ.begin();//正常走
}











