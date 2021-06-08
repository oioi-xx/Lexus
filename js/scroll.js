//follow quick menu
$(window).scroll(function(){
var scrollTop = $(document).scrollTop();
if (scrollTop < 75) {
 scrollTop = 75;
}
$("#side_menu_mobile").stop();
$("#side_menu_mobile").animate( { "top" : scrollTop });
$("#side_menu_mobile").css({"paddingTop":"10px"});
});