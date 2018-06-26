(function ($){
	$.fn.displayDropItem=function(){
		$(this).hover(function(){
			$(".header .top-nav .help.drop .down").css({"display":"block"});
		},function(){
			$(".header .top-nav .help.drop .down").css({"display":"none"});
		});
	}
	$.fn.displayUserDropItem=function(){
		$(this).hover(function(){
			$(".header .top-nav .user-info.drop .down").css({"display":"block"});
		},function(){
			$(".header .top-nav .user-info.drop .down").css({"display":"none"});
		});
	}
	$.fn.displayUnderLine=function(){
		if($(this)[0]==undefined){return;}
		var ch=$(this)[0].children;
		for(var i=1;i<ch.length;i++){
			var target = $(ch[i]);
			(function(target){
				target.hover(function(){
					target.removeClass("nav-item list-unstyled");
					target.addClass("nav-item list-unstyled active");
				},function(){
					target.removeClass("nav-item list-unstyled active");
					target.addClass("nav-item list-unstyled");
				})
			})(target);
		}
	}
	$.fn.setDisplayThumb=function(){
		var goodsThumb=$(this);
		var preImg=null;
		var targetImg=goodsThumb[0];
		for(var i=0;i<goodsThumb.length;i++){
			(function(tg){
				$(tg).hover(function(){
					var imgSrc = tg.querySelector("img").src;
					imgSrc = imgSrc.replace(/100x100/i,"468x468");
					$(".goods-info img").attr("src",imgSrc);
					if(tg.className!="thumbnail-img-item active"){
						preImg=targetImg;
						targetImg=tg;
						$(targetImg).removeClass("thumbnail-img-item");
						$(targetImg).addClass("thumbnail-img-item active");
						var underline = $(targetImg)[0].lastElementChild;
						$(underline).removeClass("under-line");
						$(underline).addClass("under-line active");
//						还原上一张图片样式
						$(preImg).removeClass("thumbnail-img-item active");
						$(preImg).addClass("thumbnail-img-item");
						var pre_underline = $(preImg)[0].lastElementChild;
						$(pre_underline).removeClass("under-line active");
						$(pre_underline).addClass("under-line");
					}
				},function(){})
			})(goodsThumb[i]);
		}
	}
	$.fn.choseItemSize=function(){
		var goodsSizeItem = $(this);
		var preChose = null;
		var targetChose = goodsSizeItem[1];
		for(var i=0;i<goodsSizeItem.length;i++){
			(function(gs){
				$(gs).unbind("click");
				$(gs).click(function(){
					if(gs.className!="goods-size-item active"){
						preChose=targetChose;
						targetChose=gs;
						$(preChose).removeClass("goods-size-item active");
						$(preChose).addClass("goods-size-item");
						$(targetChose).removeClass("goods-size-item");
						$(targetChose).addClass("goods-size-item active");
					}
				});
			})(goodsSizeItem[i]);
		}
	}
	$.fn.buyGoodsNums=function(){
		var goodsMax = $(".goods-store-nums").html();
		$(".num-reduce").click(function(){
			var goodsNum=$("#goods-num").val();
			goodsNum--;
			if(goodsNum<1){
				$("#goods-num").val(1);
			}else{
				$("#goods-num").val(goodsNum);
			}
		});
		$(".num-add").click(function(){
			var goodsNum=$("#goods-num").val();
			goodsNum++;
			if(goodsNum>Number(goodsMax)){
				$("#goods-num").val(goodsMax);
			}else{
				$("#goods-num").val(goodsNum);
			}
		});
		$("#goods-num").change(function(){
			var goodsNum=$("#goods-num").val();
			if(goodsNum<1){
				$("#goods-num").val(1);
			}
			if(goodsNum>Number(goodsMax)){
				$("#goods-num").val(goodsMax);
			}
		});
	}
	$.fn.addShoppingCar=function(){
		$(this).click(function(){
			var goodsName = $(".goods-title h3").html();
			var goodsPrice = $(".goods-price").html();
			var goodsPriceOff = $(".goods-price-off").html();
			var goodsColor = $(".goods-color-item.thumbnail-img-item.active")[0].querySelector("img").src;
			var goodsSize = $(".goods-size-item.active span").html();
			var goodsNum = $("#goods-num").val();
			console.log(goodsName,goodsPrice,goodsPriceOff,goodsColor,goodsSize,goodsNum);
		});
	}
})(jQuery);
