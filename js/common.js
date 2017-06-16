$(document).ready(function(){
	$("#fullpage").onepage_scroll({
		sectionContainer: ".section",
		easing: "ease",
		animationTime: 600,
		pagination: false,
		beforeMove: function(index){
			return function(){
				return false;
			};
		},
		afterMove: function(index){

		},
		loop: false,
		responsiveFallback: false,
		direction: "vertical",
		forbidden: [4]
	})
	$("#rcpage3").on("click",function(){
		$("#fullpage").moveDown()
	})

	/*$("#rcpage2").on("click",function(){
		$("#fullpage").moveUp()
	})*/

	$(".music").on("touchend",function(){
		var ado = document.getElementById("ado");
		if($(this).hasClass("rotate")){
			$(this).removeClass("rotate");
			ado.pause();
		}else{
			$(this).addClass("rotate");
			ado.play();
		}
	})

})