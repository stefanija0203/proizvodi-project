$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(current, next) {
			var d = 800;
			var f = 1000;

      // alert("i: " + current + "dir: " + next);
      if((current==2 && next==3) || (current==4 && next==3)) {
        $("#screen-details-1").css({"bottom": "-338px", "clip": "rect(0px, 299px, 503px, 0px)" });
        $("#screen-details-1").delay(3000).animate({ bottom : 0},
        {
          duration:5000,
          step: function(now, fx) {
              $(this).css('clip', 'rect(' +(now+338)+'px , 299px, '+(now+841)+'px, 0px)')
          }
        }, 1000);
      }

      if((current==3 && next==4) || (current==5 && next==4)) {
        $("#screen-details-1").css({"bottom": "-338px", "clip": "rect(0px, 299px, 503px, 0px)" });
        $("#screen-details-2").css({"bottom": "-206px", "clip": "rect(0px, 299px, 503px, 0px)" });
        $("#screen-details-2").delay(3000).animate({ bottom : 0},
        {
          duration:5000,
          step: function(now, fx) {
              $(this).css('clip', 'rect(' +(now+206)+'px , 299px, '+(now+709)+'px, 0px)')
          }
        }, 1000); 
      }    
		}
	});
});