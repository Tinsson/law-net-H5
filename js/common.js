$(document).ready(function(){
	$("#fullpage").onepage_scroll({
		sectionContainer: ".section",
		easing: "ease",
		animationTime: 600,
		pagination: false,
		beforeMove: function(index){
			if(index == 2){
				$(".arrow").hide();
			}
		},
		afterMove: function(index){
			if(index == 2){
				$("#st1").addClass("animated slideInUp");
				$("#st1").one("webkitAnimationEnd animationend",function(){
					$("#st2").addClass("animated slideInUp");
					$("#st1").css("opacity",1);
					$("#st2").one("webkitAnimationEnd animationend",function(){
						$("#st1").removeClass("animated slideInUp").addClass("font-fade");
						$("#st2").removeClass("animated slideInUp").addClass("font-fade");
						picShow(1);
					})
				})
			}
		},
		loop: false,
		responsiveFallback: false,
		direction: "vertical",
		forbidden: [2,3,4]
	})

	function picShow(no){
		if(no == 1){
			$(".pic").eq(0).addClass("animated slideInLeft");
			$(".pic").eq(1).addClass("animated slideInRight");
			$(".pic").eq(0).one("webkitAnimationEnd animationend",function(){
				$(".pic").eq(0).removeClass("animated slideInLeft").css("opacity",1);
				$(".pic").eq(1).removeClass("animated slideInRight").css("opacity",1);
				$(".pic").eq(2).addClass("animated slideInUp");
				$(".pic").eq(3).addClass("animated slideInUp");
				$(".pic").eq(2).one("webkitAnimationEnd animationend",function(){
					$(".pic").eq(2).removeClass("animated slideInUp").css("opacity",1);
					$(".pic").eq(3).removeClass("animated slideInUp").css("opacity",1);
					$(".pic").eq(4).addClass("animated rotateIn");
					$(".pic").eq(4).one("webkitAnimationEnd animationend",function(){
						$(".pic").eq(4).removeClass("animated rotateIn").css("opacity",1);
					})
				})
			});
		}
	}
	$(".pic").filter(function(index){
		if(index == 0 || index == 2){
			return true;
		}
	}).on("click",function () {
		$("#fullpage").moveDown();
	})
	$("#rcpage1").on("click",function(){
		console.log(11111);
	})

    var slider = new SliderUnlock("#slider", {
		labelTip: "滑动解锁",
		successLabelTip: "解锁成功"
	}, function(){
    	$('.mask').addClass('fade-sm');
    	setTimeout(function(){
            $('.mask').hide();
			ado.play();
			setTimeout(function(){
				$(".arrow").addClass("animated bounceInUp");
				$(".arrow").one("webkitAnimationEnd animationend",function(){
					$(".arrow").removeClass("animated bounceInUp").addClass("arr_float");
				})
			},1500)
		},1000);
    }, function(){
    });
    slider.init();

	var ado = document.getElementById("ado");
	$(".music").on("touchend",function(){
		if($(this).hasClass("rotate")){
			$(this).removeClass("rotate");
			ado.pause();
		}else{
			$(this).addClass("rotate");
			ado.play();
		}
	})
	ado.pause();
})