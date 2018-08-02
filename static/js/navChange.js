$(function() {
	var oWrapper = $('.container');
	var oHeader = $('#header-container');
	var nav_item = oWrapper.find('[data-subNav]');
	var sub_nav = oWrapper.find('.sub-nav');
	var subNav_wrapper = sub_nav.find('.sub-nav_wrap');

	var timer = null;

	//鼠标移入li
	nav_item.hover(function() {
		clearTimeout(timer);

		hoverChange();

		var getVal = $(this).attr('data-subNav');
		var subNav_cur = $('.sub-nav_wrap[data-link=' + getVal + ']');
		var cur_imgs = subNav_cur.find('a');

		goodsShow(subNav_cur);
		showImg(cur_imgs);

	}, function() {
		timer = setTimeout(function() {
			outChange();

		}, 0);
	})

	//鼠标移入图片
	sub_nav.hover(function() {
		clearTimeout(timer);

	}, function() {
		timer = setTimeout(function() {
			outChange();

		}, 0);
	});

	//移入变化
	function hoverChange() {
		oHeader.fadeIn().css("background", "#fff")
		sub_nav.stop().animate({
			height: 170
		});
	};
	//移出变化
	function outChange() {
		oHeader.css("background", "")
		sub_nav.stop().animate({
			height: 0
		});
	};

	// 当前商品容器显示
	function goodsShow(subNav_cur) {
		subNav_wrapper.hide();
		subNav_cur.show();
	};

	// 小列表显示
	function showImg(aImg) {
		var num = 0;
		var timer = null;

		aImg.css({
			opacity: 0,
			marginLeft: 30
		});

		for(var i = 0; i < aImg.length; i++) {
			aImg.eq(i).animate({
				marginLeft: 0,
				opacity: 1
			}, 500);

			if(i === aImg.length - 1) {
				clearInterval(timer);
			}
		}

		// 图片移入移出透明度变化
		aImg.hover(function() {
			$(this).css({
				opacity: 1
			}).siblings().css({
				opacity: 0.7
			});
		}, function() {
			aImg.css({
				opacity: 1
			});
		});
	};

});