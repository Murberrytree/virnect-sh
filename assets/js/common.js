var mainPer = (function () {

	function init() {
		header();
//		slide();
//		sideBar();
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

//	function slide() {
//		var $visualArea = $(".visual_slide div");
//		$visualArea.slick({
//			autoplay: true,
//			infinite: true,
//			dots: true,
//			arrows: false
//		});
//
//		$(".img-url").each(function () {
//			var $url = $(this).attr("data-img");
//			$(this).css({
//				backgroundImage: "url(" + $url + ")"
//			});
//		});
//
//	}

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

	return {
		init: init
	};
}());
mainPer.init();
