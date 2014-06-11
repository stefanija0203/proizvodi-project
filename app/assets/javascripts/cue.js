$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(current, next) {
			var d = 800;
			var f = 1000;

			// alert("i: " + current + "dir: " + next);
			if(current==2 && next==1) {
				$(".load_first").css("background-color", "#f9423a");
			}
			if(current==1) {
				$(".load_first").css("background-color", "#808285");
			}
			if((current==1 && next==2) || (current==3 && next==2)) {
				$('#first').hide();
				$('#second').hide();
				$('#third').hide();
				$('#fourth').hide();
				$('#fifth').hide();
				$('#sixth').hide();
				$('#seventh').hide();
				$('#eighth').hide();	
				
				$('#first').delay(d).fadeIn(f);
				$('#second').delay(2*d).fadeIn(f);
				$('#third').delay(3*d).fadeIn(f);
				$('#fourth').delay(4*d).fadeIn(f);
				$('#fifth').delay(4.5*d).fadeIn(f);
				$('#sixth').delay(5*d).fadeIn(f);
				$('#seventh').delay(5.5*d).fadeIn(f);
				$('#eighth').delay(6*d).fadeIn(f);

				$(".load_sec").css("background-color", "#f9423a");
				
			}
			if(current == 2) {
				$('#first').finish();
				$('#second').finish();
				$('#third').finish();
				$('#fourth').finish();
				$('#fifth').finish();
				$('#sixth').finish();
				$('#seventh').finish();
				$('#eighth').finish();

				$(".load_sec").css("background-color", "#808285");
			}
			if((current==2 && next==3) || (current==4 && next==3)) {
				$(".load_third").css("background-color", "#f9423a");
					$('.carousel').carousel({
						interval: 2000
					});
			}
			if(current==3) {
				$(".load_third").css("background-color", "#808285");
			}
			if((current==3 && next==4) || (current==5 && next==4)) {
				$('#anim').animate({marginTop: "100px"}, 1500);
				$(".load_fourth").css("background-color", "#f9423a");
			}
			if(current==4) {
				setTimeout(function(){
					$('#anim').finish().removeAttr('style');}, 1000);
					$(".load_fourth").css("background-color", "#808285");
			}
			if(current==4 && next==5) {
				$(".load_six").css("background-color", "#f9423a");
			}
			if(current==5) {
				$(".load_six").css("background-color", "#808285");
			}
		}
	});

	// $('.right_nav').scrollspy();

	// $('.load').click(function() {
	// 	console.log("here");
	// 	console.log(this);
	// 	$(".load").removeClass('active');
	// 	$(this).addClass('active');
	// });
	
	$('.right_nav').on('click', 'a', function() {
	    $('.right_nav a.active').removeClass('active');
	    $(this).addClass('active');
		$(this).css("background-color", "#f9423a");
	});


});