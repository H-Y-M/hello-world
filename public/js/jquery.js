$(function(){
	$('.top_nav__item a:first').hover().css({'color':'#fff'});

	$(".search_input__input").focus(function(){
		$('.js_smartbox').show();
	});

	$('.js_smartbox').mouseleave(function(){
		$('.js_smartbox').hide(800);
	});

	//  歌单推荐 点击滑动第一个
	s=0;
	v=-1200;

	function steLight(){
		n=s/v;
		$('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n).addClass('active');
		$('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n)).removeClass('active');
	}

	$('.mod_index--hot .js_jump').click(function(){
		s+=v;
		if (s<=-1200) {
			s=-1200;
		}
		steLight();
		$('.mod_index--hot .Allw').animate({
			'left':s+'px'
		},500);
	});

	$('.mod_index--hot .slide_action .slide_action__btn').click(function(){
		s-=v;
		if (s>=0) {
			s=0;
		}
		steLight()
		$('.mod_index--hot .Allw').animate({
			'left':s+'px'
		},500)
	});

	

	$('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg').click(function(){
		$(this).addClass('active');
		$('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($(this)).removeClass('active');

		idx=$(this).index('.mod_index--hot .mod_slide_switch .slide_switch__item--current .slide_switch__bg');

		s=idx*v;

		$('.mod_index--hot .Allw').animate({
			'left':s+'px'
		},500)

	});

// 新歌首发导航条
	$('.mod_index_tab span').hover().css({'color':'black'});

// 新歌首发 点击滑动第二个

   function steLightT(){
		n=s/v;
		$('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n).addClass('active');
		$('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n)).removeClass('active');
	}

	
	
	$('.mod_index--song .slide_action__btn--left').click(function(){
		s+=v;
		if (s<=-3600) {
			s=-3600
		}
		steLightT()

		 $('.mod_index--song .lide__list').animate({
		 	'left':s+'px'
		 },500);

	});


	$('.mod_index--song .slide_action__btn--right').click(function(){
		s-=v;
		if (s>=0) {
			s=0;
		}
		steLightT()
		// alert(1);
		 $('.mod_index--song .lide__list').animate({
		 	'left':s+"px"
		 },500);
	});

	$('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg').click(function(){
		$(this).addClass('active');
		$('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($(this)).removeClass('active');

		idx=$(this).index('.mod_index--song .mod_slide_switch .slide_switch__item--current .slide_switch__bg');

		s=idx*v;

		 $('.mod_index--song .lide__list').animate({
		 	'left':s+"px"
		 },500);

	});
	// 精彩推荐 第三个滑动

  function ste(){
		n=s/v;
		$('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n).addClass('active');
		$('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n)).removeClass('active');
	}




	$('.mod_index--event .slide_action__btn--left').click(function(){
		s+=v;
		if (s<=-2400) {
			s=-2400;
		}
		ste()
		$('.mod_index--event .mod_event_slide').animate({
			'left':s+'px'
		},500);

	});

	$('.mod_index--event .slide_action__btn--right').click(function(){
		s-=v;
		if (s>=0) {
			s=0;
		}
		ste()
		$('.mod_index--event .mod_event_slide').animate({
			'left':s+'px'
		},500);

	});



	$('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg').click(function(){
		$(this).addClass('active');
		$('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($(this)).removeClass('active');

		idx=$(this).index('.mod_index--event .mod_slide_switch .slide_switch__item--current .slide_switch__bg');

		s=idx*v;

		 $('.mod_index--event .mod_event_slide').animate({
			'left':s+'px'
		},500);


	});

// 新碟首发 第四个滑动

  
 function steL(){
		n=s/v;
		$('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n).addClass('active');
		$('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg').eq(n)).removeClass('active');
	}



	$('.mod_index--album .slide_action__btn--left').click(function(){
		s+=v;
		if (s<=-3600) {
			s=-3600;
		}
		steL()
		$('.mod_index--album .slide__list').animate({
			'left':s+'px'
		},500);

	});

	$('.mod_index--album .slide_action__btn--right').click(function(){
		s-=v;
		if (s>=0) {
			s=0;
		}
		steL()
		$('.mod_index--album .slide__list').animate({
			'left':s+'px'
		},500);

	});



	$('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg').click(function(){
		$(this).addClass('active');
		$('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg').not($(this)).removeClass('active');

		idx=$(this).index('.mod_index--album .mod_slide_switch .slide_switch__item--current .slide_switch__bg');

		s=idx*v;

		 $('.mod_index--album .slide__list').animate({
			'left':s+'px'
		},500);


	});

});