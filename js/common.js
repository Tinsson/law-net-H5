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
		direction: "vertical"
	})
	$("#rcpage1").on("click",function(){
		console.log(11111);
	})

    var slider = new SliderUnlock("#slider", {}, function(){
    	$('.mask').addClass('fade-sm');
    	setTimeout(function(){
            $('.mask').hide();
		},1000);
    }, function(){
    });
    slider.init();

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