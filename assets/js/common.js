var mainPer = (function () {

	function init() {
		header();
		mobileImg();
		aboutSlide();
		imgUrl();
		Mslide();
		sideBar();
		historyNav();
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
	
	function mobileImg() {
		var 
			$solutionImg = $(".responsive-img .img-url"),
			$mobileImg = $(".responsive-img img"),
			$mobileCeo = $(".about-ceo"),
			$winW = $(document).width();
		if ( $winW < 480 ) {
			$solutionImg.each(function(){
				var $this = $(this),
						$url = $this.attr("data-img");
				$this.attr('data-img', $url.replace(/\img_/, 'img_m_'));
			});
			$mobileImg.each(function(){
				var $this = $(this),
						$url = $this.attr("src");
				$this.attr('src', $url.replace(/\img_/, 'img_m_'));
			});
			$mobileCeo.each(function(){
				var $this = $(this),
						$url = $this.attr("data-img");
				$this.attr('data-img', $url.replace(/\img_/, 'img_m_'));
			});
		}		
	}
	
	function imgUrl() {
		$(".img-url").each(function () {
			var $url = $(this).attr("data-img");
			$(this).css({
				backgroundImage: "url(" + $url + ")"
			});
		});
	}

	function Mslide() {
		var $newsArea = $(".news-container section");
		$newsArea.slick({
			dots: false,
			arrows: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
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
						slidesToScroll: 1,
						dots: true
					}
				}
			]
		});
	}
	
	function aboutSlide() {
		var $partners = $(".about-partners section"),
				$winW = $(document).width();;
		if ( $winW < 480 ) {
			$partners.slick({
				dots: true,
				rows: 5,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false
			});
		}		
	}

	function sideBar() {
		var
			$side = $(".side"),
			$sideInner = $(".side span"),
			$mGnb = $(".m-gnb"),
			$document = $("body"),
			$mGnbBtn = $(".m-gnb>ul>li");
		$side.click(function(){
			var $this = $(this);
			$mGnb.toggleClass("m-show");
			$document.toggleClass("m-show");
			$sideInner.toggleClass("side-from");
			$sideInner.toggleClass("side-to");
		});		
		$mGnbBtn.click(function(){
			var $this = $(this);
			$mGnbBtn.removeClass("active");
			$this.addClass("active");
		});
	}
	
	function historyNav() {
		var $historyNav = $('.history-nav li');
		$historyNav.click(function(){
			$historyNav.removeClass('active');
			$(this).addClass('active');
		})
	}
	
	return {
		init: init
	};
}());
mainPer.init();
