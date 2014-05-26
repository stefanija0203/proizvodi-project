$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(current, next) {
			var d = 800;
			var f = 1000;

			// alert("i: " + current + "dir: " + next);
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
			}
			if((current==3 && next==4) || (current==5 && next==4)) {
				// function ani(){
				// 	$('.fourth-right').animate({'margin-top': '80px'}, 4000, function(){
				// 		$('.fourth-right').css('margin-top','10px');
				// 		ani();
				// 	});
				// };
				// ani();

				// .fourth-right.animate({top: '70px'}, "slow");

				// $('.fourth-right').animate({top: 70px}, 2000, "swing");
			}
		}
	});
	
	$('.carousel').carousel({
		interval: 2000
	});
});