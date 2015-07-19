$(function(){
	var oriHeight=$(".about").css("height");
	$(".about")
		.css("height","0")
		.delay(300)
		.animate({height:oriHeight},500);
});
