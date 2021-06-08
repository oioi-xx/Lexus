
$(document).ready(function(){
	$('.nav_wrap>ul>li').hover(function(){
		$(this).find('.twoD').stop().slideDown(500);
	},function(){
		$(this).find('.twoD').stop().slideUp(500);
	});
	
	$('#mobile_nav>ul>li').on("click",function(){
		var moblie_submenu=$(this).find('.m_twoD');
		if(moblie_submenu.is(':visible')){
			moblie_submenu.slideUp(500);
			$('.m_btn img').attr('src','images/menu_ico.png')
		}else{
			moblie_submenu.slideDown(500);
			$('.m_btn img').attr('src','images/menu_close.png')
		}
	})		
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });
});

    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	
	
	$('.moreBtn').click(function(){
        $('#content4').stop().fadeIn();
        $(this).css({opacity:0});
    });
	
