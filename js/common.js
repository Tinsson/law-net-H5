
$.fn.autotype = function(callback){

    var $text = $(this);
    var str = $text.html();
    var index = 0;
    var x = $text.html('');
    if($("#third_box").css("display") == "none"){
        $("#third_box").show();
	}
    var timer = setInterval(function(){
        var current = str.substr(index, 1);
        if(current == '<'){
            index = str.indexOf('>', index) + 1;
        }else{
            index ++ ;
        }
        $text.html(str.substring(0, index) + (index & 1 ? '_': ''));
        if(index >= str.length){
            clearInterval(timer);
            $(".normal_tip").addClass("font-fade");
            callback();
        }
    },100);
};

function showtext(){
    $(".text").eq(0).addClass("animated flipInX");
    $(".text").eq(1).addClass("animated flipInX");
    $(".text").eq(1).one("webkitAnimationEnd animationend",function(){
        $(".text").eq(0).removeClass("animated flipInX").css("opacity",1);
        $(".text").eq(1).removeClass("animated flipInX").css("opacity",1);
        $(".text").eq(2).addClass("animated flipInX");
        $(".text").eq(3).addClass("animated flipInX");
        $(".text").eq(2).one("webkitAnimationEnd animationend",function(){
            $(".text").eq(2).removeClass("animated flipInX").css("opacity",1);
            $(".text").eq(3).removeClass("animated flipInX").css("opacity",1);
        });
	})
}
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
			}else if(index == 3){
				$("#third_box").autotype(showtext);
			}else if(index == 4){
                $("#ft1").addClass("animated bounceInUp");
                $("#ft1").one("webkitAnimationEnd animationend",function(){
                    $("#ft2").addClass("animated bounceInUp");
                    $("#ft1").css("opacity",1);
                    $("#ft2").one("webkitAnimationEnd animationend",function(){
                        $("#ft1").removeClass("animated bounceInUp").addClass("font-fade");
                        $("#ft2").removeClass("animated bounceInUp").addClass("font-fade");
                        picShow(2);
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
		}else if(no == 2){
			//触发拼图的开始
		}
	}
	$(".pic").on("click",function () {
		var i = $(this).index();
		if(i == 0 || i == 2){
            $("#fullpage").moveDown();
		}else{

		}
	})

    $(".text").on("click",function () {
        var i = $(this).index();
        if(i == 2){
            $("#fullpage").moveDown();

        }else{

        }
    })
    var slider = new SliderUnlock("#slider", {
		labelTip: "滑动解锁",
		successLabelTip: "解锁成功"
	}, function(){
    	$('.mask').addClass('fade-sm');
    	setTimeout(function(){
            $('.mask').hide();
			/*ado.play();*/
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