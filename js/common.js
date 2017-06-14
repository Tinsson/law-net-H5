$(document).ready(function(){
	$('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4',"page5","page6"],
        afterLoad:function(anchorLink,index){
        	var loadedSection = $(this);
        	$(".wrap").find("img").removeAttr("class");
        	$("#second2,#third2,#four2,#five2,#five3,#six2").css("opacity","0");
        	if (index == 1){
        		$("#first1").addClass("animated zoomIn");
        		$("#first1").one('webkitAnimationEnd animationend',function(){
			    	$("#first2").addClass('animated fadeInUp');
			    })
        	}
        	if (index == 2) {
        		$("#second1").addClass("animated bounceInRight");
        		$("#second1").one('webkitAnimationEnd animationend',function(){
			    	$("#second2").addClass('animated bounceInLeft');
			    	$("#second2").css("opacity","1");
			    })
        	}
        	if (index == 3) {
        		$("#third1").addClass("animated rollIn");
        		$("#third1").one('webkitAnimationEnd animationend',function(){
			    	$("#third2").addClass('animated rotateInDownRight');
			    })
        	}
        	if (index == 4) {
        		$("#four1").addClass("animated bounceInDown");
        		$("#four1").one('webkitAnimationEnd animationend',function(){
			    	$("#four2").addClass('animated bounceInUp');
			    	$("#four2").css("opacity","1");
			    })
        	}
        	if (index == 5) {
        		$("#five1").addClass("animated fadeInRight");
        		$("#five1").one('webkitAnimationEnd animationend',function(){
			    	$("#five2").addClass('animated fadeInLeft');
			    })
			    $("#five2").one('webkitAnimationEnd animationend',function(){
			    	$("#five3").addClass('animated zoomIn');
			    	$("#five3").css("opacity","1");
			    })
        	}
        	if (index == 6) {
        		$("#six1").addClass("animated bounceInDown");
        		$("#six1").one('webkitAnimationEnd animationend',function(){
			    	$("#six2").addClass('animated bounceInUp');
			    	$("#six2").css("opacity","1");
			    })
        	}
        }
    })
	$("#second3,#third3,#four3").on("touchend",function(){
		$(".mask").show();
	})
	$(".close").on("touchend",function(){
		$(".mask").hide();
	})
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
	$(".commit").on("touchend",function(e){
		e.preventDefault();
		var name = $("#name").val(),
			phone = $("#phone").val(),
			company = $("#company").val();
		if(name == ""){
			alert("名字不能为空");
			$("#name").focus();
		}else if(phone == ""){
			alert("电话不能为空");
			$("#phone").focus();
		}else if(company == ""){
			alert("请输入企业名");
			$("#company").focus();
		}else{
			console.log("成功");
		}
	})
})