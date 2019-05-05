
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            		
            if (scroll > 200) {
                $(".int").css({
                    'right': 110 + "px",
                });
            }
            if(scroll>=0&&scroll<950){
            	  $(".bg").css({"background-image":"url('assets/image/life5.jpg')"});
            }else if(scroll>=950&&scroll<1870){
            	$(".bg").css({"background-image":"url('assets/image/bg1.jpg')"});
            }else if(scroll>=1870){
            	$(".bg").css({"background-image":"url('assets/image/bg2.jpg')"});
            }
            /*$("body").css({"background-position-y":(-scroll/20)+"px"})*/
        });

       function sethere(){
       		$('.here').css({'opacity':0,});
			$('#'+sethere.arguments[0]+' .here').css({'opacity':1,});
			$('html,body').animate( { scrollTop: ($('#'+sethere.arguments[0]).offset().top)-300 }, 800);
       }
	   //回到最上層
$(function(){
//動畫方式回到上層
$("#gotop").click(function(){
    jQuery("html,body").animate({
    scrollTop:0
    },1000);
});
//目前的位置距離網頁頂端，若大於300px則顯示回上層圖示;否則隱藏
$('#gotop').stop().fadeOut("fast");
$(window).scroll(function() {
   if ( $(this).scrollTop() > 300){
      $('#gotop').fadeIn("fast");
   } else {
      $('#gotop').stop().fadeOut("fast");
   }
});
});




        //設定每兩秒執行一次randomImg() ，此行要在 function 之外
        setInterval("randomImg()",5000);
        var titlenumber=0;
        function randomImg(){
        	titlenumber++;
        	if(titlenumber>=$('.titlepc').length){
        		titlenumber=0;
        	}
        	for(var i=0;i<$('.titlepc').length;i++){
        			if(i==titlenumber){
        				$(".titlepc")[i].className="titlepc show";
        			}else{
        			$(".titlepc")[i].className="titlepc no";
        		}
        	}
        	
        }       

