var mainPer = (function () {

	function init() {
		header();
		mobileImg();
		aboutSlide();
		imgUrl();
		Mslide();
		sideBar();
		remoteSlide();
		subScrolled();
		historyClick();
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
	
	function remoteSlide() {
		var $newsArea = $(".remote-benefit-slide");
		$newsArea.slick({
			dots: false,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false
		});
	}

	function sideBar() {
		var
			$side = $(".side"),
			$sideInner = $(".side span"),
			$mGnb = $(".m-gnb"),
			$document = $("body"),
			$mGnbBtn = $(".m-gnb>ul>li")
			;
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
	
	//history page
	function historyNav() {
		var $historyNav = $('.history-nav li'),
				$historyNavCon = $('.history-nav'),
				$historyContainer = $('.history-container h4'),
				$aboutSnb = $('.about-snb')
				;
		//연혁 스크롤시 snb 상단, 좌측 연혁 스티키 토글
		$(window).scroll(function (){
			var $scrTop = $(window).scrollTop();
			$aboutSnb.each(function(){
				var $snbContainer = $('.page-sub'),
						$snbTop = $snbContainer.offset().top,
						$snbBottom = $snbTop + $snbContainer.outerHeight() - $aboutSnb.outerHeight();				
				if ($snbBottom < $scrTop) {
					$aboutSnb.addClass('sticky');
					$aboutSnb.next().css({paddingTop : $aboutSnb.outerHeight()});
					$historyNavCon.addClass('sticky');
				} else {
					$aboutSnb.removeClass('sticky')
					$aboutSnb.next().css({paddingTop : 0});
					$historyNavCon.removeClass('sticky');
					$historyContainer.removeClass('active');
				}
			})
		})
	}
	
	// 연혁 클릭시 스크롤 이동
	function historyClick() {
		var $historyNav = $('.history-nav li'),
				$document = $("html, body"),
				$winW = $(document).width(),
				$historyContainer = $('.history-container'),
				$offLeft = $('.right-align').offset().left;
		if ( $winW < 480 ) {
			$offLeft = $offLeft - 66.5
		} else {
			$offLeft = $offLeft - 159
		}
		$historyNav.click(function() {
			var $idx = $(this).index(),
					$scroll = $historyContainer.eq($idx).offset().top - 100;
			$document.animate({scrollTop: $scroll});
		})
		$(window).scroll(function() {			
			var $sct = $(window).scrollTop() + 100,
					$activeH4 = $('.active h4');			
			$historyContainer.each(function () {
				var $idx = $(this).index(),
						$scroll = $(this).offset().top - 100;
				if ($sct > $scroll) {
					$historyNav.removeClass("active");					
					$historyNav.eq($idx).addClass("active");
					$historyContainer.children('h4').removeClass("active");
					$historyContainer.eq($idx).children('h4').addClass("active");
					$('h4.active').css({left : $offLeft});
				} else {
					if ( $winW < 480 ) {
					$historyContainer.eq($idx).children('h4').css({left : '-68px'});
				} else {
					$historyContainer.eq($idx).children('h4').css({left : '-210px'});
				}
				}
			})
		})
	}

//	function historyParallax() {
//		$(window).scroll(function() {
//			$('.history-nav li').each(function(){
//			var 
//			$scrTop = $(window).scrollTop();
//				if ( < $scrTop + 400) {
//					$(this).addClass("sticky");
//				}
//			});
//		})
//	}
	
	//sub page visual-container scroll effect
	function subScrolled(){
		var $winW = $(document).width();
		var $subParallax = $('.sub-parallax');
		var windowScrolled;
		$(window).scroll(function(){
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ($(window).scrollTop() < 1100) {
					if ( $winW < 480 ) {
						$subParallax.css({opacity : (1 - (windowScrolled/26) / 20)});
					} else {
						$subParallax.css({opacity : (1 - (windowScrolled/42) / 20)});
					}				
				$subParallax.css({transform : 'translateY(' + windowScrolled / + 2 + 'px)'});
			} 
		});  
	};
	
	return {
		init: init
	};
}());
mainPer.init();
