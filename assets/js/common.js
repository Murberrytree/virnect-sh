var mainPer = (function () {

	function init() {
		header();
		imgUrl();
		slide();
		sideBar();
	}

	function header() {
		var $header = $(".header");
		$(window).scroll(function () {
			var $scrTop = $(window).scrollTop();
			if ($scrTop > 10) {
				//스크롤할때
				$header.addClass("if_scroll");
				$header.removeClass("if_top");
			} else {
				//스크롤탑일때
				$header.addClass("if_top");
				$header.removeClass("if_scroll");
			}
		});
	}
	
	function imgUrl() {
		$(".img-url").each(function () {
			var $url = $(this).attr("data-img");
			$(this).css({
				backgroundImage: "url(" + $url + ")"
			});
		});
	}

	function slide() {
		var $newslArea = $(".news-container section");
		$newslArea.slick({
			dots: false,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

//	function sideBar() {
//		var ckNum = 1,
//			$nav = $(".nav"),
//			$side = $(".side");
//		$side.click(function () {
//			$this = $(this);
//			if (ckNum === 0) {
//				$nav.stop().animate({
//					right: "-300px"
//				});
//				$this.css({
//					background: "url(images/common/menu.png) no-repeat"
//				});
//				ckNum = 1;
//			} else {
//				$nav.stop().animate({
//					right: "0"
//				});
//				$this.css({
//					background: "url(images/common/close.png) no-repeat"
//				});
//				ckNum = 0;
//			}
//		});
//	}
	function sideBar() {
		var 
			$side = $(".side"),
			$mGnb = $(".m-gnb"),
			$document = $("body");
		$side.click(function(){
			var $this = $(this);
			$mGnb.toggleClass("m-show");
			$document.toggleClass("m-show");
		});
	}
	return {
		init: init
	};
}());
mainPer.init();
