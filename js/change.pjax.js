console.log("\n%c Change By 山卜方 %c https://novcu.com ","color:#fff;background:#000;padding:5px 0","color:#fff;background:#666;padding:5px 0");
(function ($) {

  var MyApp = {
      initPjax: function () {
          var self = this;

          // 初始化
          $(document).pjax('a:not(a[target="_blank"])', '#pjax', {
            container: '#pjax',
            fragment: "#pjax",
            timeout: 1600,
            maxCacheLength: 500,
        });
       
          // PJAX 渲染结束时
          $(document).on('pjax:end', function () {
              // 这里的调用 **只有** 在「局部刷新」时才会运行
              self.siteBootUp();
          });
          self.siteBootUp();
      },

      /*
      * Things to be execute when normal page load
      * and pjax page load.
      */
      siteBootUp: function () {
          // ... 「局部刷新」和「页面刷新」都需要运行的代码
          var self = this;
          self.clickOna();
          self.nexts();
      },


/*a标签价跳转*/
 clickOna: function () {
      var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
      var location_href = window.location.href.replace(parse_url,'$3');
      $('.song a:not(:has(img))').hover(function() {
        var this_href = $(this).attr('href');
        var replace_href = this_href.replace(parse_url,'$3');
        if ( this_href != replace_href && location_href != replace_href){$(this).attr('target','_blank');}
      });
    },


    /*上一页 下一页*/

    nexts: function () {
    $(function(){	
      var cubuk_seviye = $(document).scrollTop();
      var header_yuksekligi = $('.nav-post').outerHeight();
      
      $(window).scroll(function() {
          var kaydirma_cubugu = $(document).scrollTop();
      
          if (kaydirma_cubugu > header_yuksekligi){$('.nav-post').addClass('yin');} 
          else {$('.nav-post').removeClass('yin');}
      
          if (kaydirma_cubugu > cubuk_seviye){$('.nav-post').removeClass('chu');} 
          else {$('.nav-post').addClass('chu');}				
      
          cubuk_seviye = $(document).scrollTop();	
       });
      });
    },

  };
  window.MyApp = MyApp;

})(jQuery);

$(document).ready((function(_this) {
  return function() {
    var bt;
    bt = $('#back_to_top');
    if ($(document).width() > 480) {
      $(window).scroll(function() {
        var st;
        st = $(window).scrollTop();
        if (st > 30) {
          return bt.css('display', 'block');
        } else {
          return bt.css('display', 'none');
        }
      });
      return bt.click(function() {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }
  };
})(this));

/*
$('#gotop').on('click', GoTop);
function scaleIn(object, time) {
    object.css('transition', time).css('transform', 'scale(0)');
    object.show();
    object.css('transform', 'scale(1)');
}

function scaleOut(object, time) {
    object.css('transition', time).css('transform', 'scale(0)')
}
function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$('#gotop').hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
        scaleIn($('#gotop'), '0.7');
    } else {
        scaleOut($('#gotop'), '0.7');
    }
});
*/


function getCurDate()  
{  
 var d = new Date();  

 var years = d.getFullYear();   
 var ndate = years;  
 divT.innerHTML= ndate;  
}  
  
function add_zero(temp)  
{  
 if(temp<10) return "0"+temp;  
 else return temp;  
}  
  
setInterval("getCurDate()",100);  
  
function show_runtime(){window.setTimeout("show_runtime()",1000);X=new Date("6/12/2019 00:00:00");Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);runtime_span.innerHTML="博客已经运行"+A+"天"+B+"小时"}show_runtime();



jQuery(document).ready(function($){
  if(window.location.hash){
  var checkExist = setInterval(function() {
  if ($(window.location.hash).length) {
  $('html, body').animate({scrollTop: $(window.location.hash).offset().top-200}, 600);
  clearInterval(checkExist);
  }
  }, 100);
  }
  });
//搜索框
function search_show(){
	if($("#search_k").css("display")=='none'){
		 $("#search_k").slideDown();
	}else{
		 $("#search_k").slideUp();
	 }
};
function keyup_submit(e){ 
  var evt = window.event || e; 
   if (evt.keyCode == 13){
    document.getElementsByClassName("search_backg").item(0).style.display="flex"

   }
 };
 function rewardToggle(){
  document.getElementsByClassName("search_backg").item(0).style.display="none"
}

