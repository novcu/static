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


//点击加载更多
jQuery(document).ready(function($) {
//点击下一页的链接(即那个a标签)
$('.nexts').click(function() {
    $this = $(this);
    $this.addClass('loading').text('正在努力加载'); //给a标签加载一个loading的class属性，用来添加加载效果
    var href = $this.attr('href'); //获取下一页的链接地址
    if (href != undefined) { //如果地址存在
        $.ajax({ //发起ajax请求
            url: href,
            //请求的地址就是下一页的链接
            type: 'get',
            //请求类型是get
            error: function(request) {
                //如果发生错误怎么处理
            },
            success: function(data) { //请求成功
                $this.removeClass('loading').text('查看更多'); //移除loading属性
                var $res = $(data).find('.boke'); //从数据中挑出文章数据，请根据实际情况更改
                $('.list-main').append($res.fadeIn(500)); //将数据加载加进posts-loop的标签中。
                var newhref = $(data).find('.nexts').attr('href'); //找出新的下一页链接
                if (newhref != undefined) {
                    $('.nexts').attr('href', newhref);
                } else {
                    $('.nexts').remove(); //如果没有下一页了，隐藏
                }
            }
        });
    }
    return false;
});
});


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

//豆瓣图书电影条目
$("a[href*='douban.com/subject/']").each(function () {
    var _this = $(this);
    var str = _this.attr("href");
    var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
    if (db_reg.test(str)) {
        var db_type = str.replace(db_reg, "$1");
        var db_id = str.replace(db_reg, "$2").toString();
        var db_api = "https://bm.weajs.com/api/";
        if (db_type == 'movie') {
          var ls_item = 'movie'+db_id;
          var url = db_api + "movies/" + db_id + "/";
          if(localStorage.getItem(ls_item)==null ||localStorage.getItem(ls_item)=='undefined'){
            $.ajax({
                url: url,
                type: 'GET',
                dataType: "json",
                success: function (data) {
                  localStorage.setItem(ls_item,JSON.stringify(data));
                  moiveShow(_this,ls_item)
                }
            });
          }else{
            moiveShow(_this,ls_item)
          }
        } else if (db_type == 'book') {
          var ls_item = 'book'+db_id;
          var url = db_api + "books/" + db_id;
          if(localStorage.getItem(ls_item)==null ||localStorage.getItem(ls_item)=='undefined'){
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                  localStorage.setItem('book'+db_id,JSON.stringify(data));
                  bookShow(_this,ls_item)
                }
            });
          }else{
            bookShow(_this,ls_item)
          }
        }
    }
});
function moiveShow(_this,ls_item){
    var storage=localStorage.getItem(ls_item);
    var data=JSON.parse(storage);
    var str = _this.attr("href");
    //console.log(data)
    var db_star = Math.ceil(data.rating);
    $("<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + str + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.directors + " / 类型：" + data.genres + " / " + data.pubdate + "</time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro + "</section></div></div><img class='post-preview--image' src=" + data.cover + "></div>").replaceAll(_this);
}
function bookShow(_this,ls_item){
    var storage=localStorage.getItem(ls_item);
    var data=JSON.parse(storage);
    var str = _this.attr("href");
    ///console.log(data)
    var db_star = Math.ceil(data.rating);
    $("<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' href='" + str + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section style='max-height:75px;overflow:hidden;' class='post-preview--excerpt'>" + data.intro + "</section></div></div><img class='post-preview--image' src=" + data.cover + "></div>").replaceAll(_this);
}

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
  $(document).ready(function() {
    let coll = document.querySelectorAll('.collapsible');
    for (let i = 0; i < coll.length; i++) {
      let firstcoll = coll[0].nextElementSibling;
     
      coll[i].addEventListener('click', function() {
        let collcontentt = this.nextElementSibling;
        if (collcontentt.style.display === 'block') {
          collcontentt.style.display = 'none';
        } else {
          collcontentt.style.display = 'block';
        }
      });
    }
  });
  $(document).ready(function() {
    let coll = document.querySelectorAll('.collapsiblee');
    for (let i = 0; i < coll.length; i++) {
      let firstcoll = coll[0].nextElementSibling;
     
      coll[i].addEventListener('click', function() {
        let collcontenttt = this.nextElementSibling;
        if (collcontenttt.style.display === 'none') {
          collcontenttt.style.display = 'block';
        } else {
          collcontenttt.style.display = 'none';
        }
      });
    }
  })
