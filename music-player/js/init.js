// JavaScript Document

//static function:
function getObj(id){return document.getElementById(id);}

//staic property;
var browserHeight;
var audio=new Audio();


window.onload=function(){
	initPageHeight();
	page1Init();
}

//init web page height by browser visible height function 
function initPageHeight(){
	browserHeight=document.documentElement.clientHeight;
	document.body.style.height=browserHeight+"px";
}

//first page init function
function page1Init(){
	
	headerAnimal();
	headerColorAnimal();
	cdAnimal();
	//sayHi();
	
}

function musicInit(src){

    audio.controls = false;  //控件不显示
	audio.src="music/"+src+".mp3";
    //document.body.appendChild(audio);  //把它添加到页面中
	audio.play();
}



//first page dynamic background floor init function
function headerAnimal(){
	$(document).ready(function() {
          $('#particles').particleground({
             dotColor: '#FFFFFF',
             lineColor: '#FFFFFF'
          });
    });
}

function cdAnimal(){
	var musicList=getObj("musicList").getElementsByTagName("ul")[0].getElementsByTagName("li");
	var cdMod=getObj("cd");
	var cdLogo=getObj("cdLogo");
	for( var i=0;i<musicList.length;i++){
	  	musicList[i].onclick=function(){
			cdLogo.style.backgroundImage="url(img/"+this.id+".jpg)";
			cdMod.className="music-logo-circle1-1";
			musicInit(this.id);
		}
	}
}

function sayHi(){
     var sayHiTimer=null;
	 var box= getObj("sayHi");
	 box.onmouseover=function(){
 		 var box=getObj("sayHi");
         var words="您 好 ： 欢 迎 查 看 我 的 简 历 ， 我 叫 张 鹏 ， 是 一 名 在 职 web 前 端 工 程 师 ， 学 历 本 科 软 件 工 程 专 业 ， 年 龄 26 岁 ， 相 关 经 验 三 年 ， 目 前 居 住 北 京 ，擅 长 div + css 布 局 以 及 js;熟 悉 java , sql, html5 以 及 css3;了 解 响 应 式,瀑 布 流 布 局,jQuery等， 期 待 与 您 合 作 ！";
         var wordList=words.split(" ");
         var index=0;
        
         sayHiTimer=setInterval(function(){
			 box.innerHTML+=wordList[index];
			 index++;
			 if(index==3){
			 box.innerHTML+="<br/>&nbsp;&nbsp;&nbsp"	 
			 }
			
			 if(index==wordList.length){
				clearInterval(sayHiTimer);	
				words=""; 
				box=null;
			 }
	     },10)
	 }
	 
	 box.onmouseout=function(){
		 clearInterval(sayHiTimer);	 
		 this.innerHTML="";
	 }	
}

//first page backgroundcolor gradient floor function
function headerColorAnimal(){
	var header=getObj("colorFloor");
	var headerAnimalTimer=null;
	var colorList=new Array("#FF6600","#6600FF","#33FFCC","#66FF66","#99FF99","#FF0033");
	var index=0;
	headerAnimalTimer=setInterval(function(){
		if(index<5){
		  index++;
		}else{
		  index=0;
		}
	    header.style.backgroundColor=colorList[index];								 
	
	},1000)
}