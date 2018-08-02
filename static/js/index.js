/**
 * Created by Administrator on 2016/7/27.
 */
//------------------------------------header------------------------------------
$(function(){
    $('.top').click(function(){
        $('.mztop').css('display','none');
    })
});
//------------------------------------Nav切换------------------------------------
$(function(){
    $('.vice-list li').hover(function(){
        $(this).children('div').stop().animate({height:'200px'},200);
    },function(){
        $(this).children('div').stop() .animate({height:'0'},200);
    });
});
//------------------------------------大轮播--------------------------------------
$(function(){
    var timer;
    var b = 0;
    var dd;
    //console.log($('img'));
    function show(a){
        var index = a;
        $('.list ul li').each(function(index){
            this.className= '';
            $('.main ul li').eq(index).css('opacity','0');
        });
        $('.list ul li').eq(index).addClass('control');
        //$('.main ul li').eq(index).addClass('current');
        $('.main ul li').eq(index).animate({opacity:1},500);
    }
    $('.list ul li').each(function(index){
        $(this).mouseover(function(){
            clearInterval(timer);
            show(index);
        });
        $(this).mouseout(function(){
            b = index;
            autoPLay();
        })
    });
    $('.two').click(function(){
        clearInterval(timer);
        b++;
        if(b == $('.list ul li').length){
            b = 0;
        }
        show(b);
    });
    $('.two').mouseout(function(){
        autoPLay();
    });
    $('.one').click(function(){
        clearInterval(timer);
        if(b == $('.list ul li').length){
            b = $('.list ul li').length;
        }
        b--;
        show(b);
    });
    $('.one').mouseout(function(){
        autoPLay();
    });

    function autoPLay(){
        clearInterval(dd);
        timer = setInterval(function(){
            b++;
            if(b == $('.list ul li').length){
                b = 0;
            }
            show(b);
        },4000)
    }
    autoPLay();

});
//------------------------------------------tab切换--------------------------------------
$(function(){
    var tab =$('.home-category-list .home-category-nav li');
    //var content =$('.home-category-list .home-category-nav li .home-nav');
    tab.hover(function(){
        $(this).children('.home-nav').css('display','block')
    },function(){
        $(this).children('.home-nav').css('display','none')
    });
});
//------------------------------------------小动画----------------------------------------
$(function(){
    $('.home-baby-one').hover(function(){
        $('.baby-one').stop().animate({height:'100px'},200);
    },function(){
        $('.baby-one') .stop() .animate({height:'0'},200);
    })
});
//------------------------------------------小轮播---------------------------------------
function homeProduct(){
    var Div = $('.home-panel-baby div'),
        Se = $('.home-panel-baby'),
        DivWidth = Div.width(),
        DivLength = Div.length,
        timer2,
        toggle = true;
    Se.width(DivWidth  * DivLength + 140 + 'px');
    $('.home-panel h2 .left').mousedown(function(e){
        clearInterval(timer2);
        toggle = !toggle;
        Se.animate({left:-1240 + 'px'}, 500);
        $(this).addClass('move').siblings().removeClass('move');

    });
    //console.log($('.home-panel h2 .right'));
    $('.home-panel h2 .right').mousedown(function(e){
        clearInterval(timer2);
        toggle = !toggle;
        Se.animate({left:0}, 500);
        $(this).addClass('move').siblings().removeClass('move');
    });
    $('.home-panel h2 span').mouseup(function(){
        autoPlay();
    });
    function play(){
        if(toggle){
            $('.home-panel-baby').animate({left:-1240 + 'px'}, 500);
            toggle = !toggle;
            $('.home-panel h2 .left').addClass('left-move').siblings().removeClass('left-move');
        }else {
            $('.home-panel-baby').animate({left:0 + 'px'}, 500);
            toggle = !toggle;
            $('.home-panel h2 .right').addClass('right-move').siblings().removeClass('right-move');
        }
    }
    function autoPlay(){
        timer2 =  setInterval(play,5000);
    }
    autoPlay();
}
homeProduct();
//-------------------------------------------
