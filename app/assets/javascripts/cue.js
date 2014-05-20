$(document).ready(function() {
    $('#fullpage').fullpage({
    	onLeave: function(current, next) {
    		var d = 1000;
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
				$('#fifth').delay(5*d).fadeIn(f);
				$('#sixth').delay(6*d).fadeIn(f);
				$('#seventh').delay(7*d).fadeIn(f);
				$('#eighth').delay(8*d).fadeIn(f);
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
    	}
	});
	
	$('.carousel').carousel({
		interval: 1000
	});
});