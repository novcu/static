
console.log("\n%c Change By 山卜方 %c https://novcu.com ","color:#fff;background:#000;padding:5px 0","color:#fff;background:#666;padding:5px 0")
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



var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var location_href = window.location.href.replace(parse_url,'$3');
$('.song a:not(:has(img))').hover(function() {
  var this_href = $(this).attr('href');
  var replace_href = this_href.replace(parse_url,'$3');
  if ( this_href != replace_href && location_href != replace_href){$(this).attr('target','_blank');}
});


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

