$(document).ready(function(){
	$('.nav_wrap>ul>li').hover(function(){
		$('body').addClass('background')
	},function(){
		$('body').removeClass('background')
	});
})