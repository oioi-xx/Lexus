/* $(function(){
	$('.nav_wrap>ul>li').hover(function(){
		$('.twoD').stop().slideDown(1000);
	},function(){
		$('.twoD').stop().slideUp(1000);
	});
}); */

/* $(document).ready(function(){
	$('.nav_wrap>ul>li').hover(function(){
		$('.twoD',this).stop().slideDown(1000)
	},function(){
		$('.twoD',this).stop().slideUp(1000)
	});
}); */


$(document).ready(function(){
	$('.nav_wrap>ul>li').hover(function(){
		var submenu=$(this).find('.twoD');
		submenu.stop().slideDown(500);
	},function(){
		var submenu=$(this).find('.twoD');
		submenu.stop().slideUp(500);
	});
	
	$('#mobile_nav>ul>li').click(function(){
		var moblie_submenu=$(this).find('.m_twoD');
		if(moblie_submenu.is(':visible')){
			moblie_submenu.slideUp(500);
		}else{
			moblie_submenu.slideDown(500);
		}
		
	})
})





