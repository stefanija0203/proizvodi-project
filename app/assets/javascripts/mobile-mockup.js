$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(current, next) {
			var d = 30;
      var f = 40;
      

      // alert("i: " + current + "dir: " + next);
      if((current==1 && next==2) || (current==3 && next==2)) {
        $(".points img").hide();
        // $(".points img:nth-child(n+1)").delay((n+1)*d).fadeIn(f);
        setTimeout(function() {  
          $(".points-section1 img").each(function( index ) {
            $(this).delay((index+1)*d).fadeIn(f);
            // console.log( index + ": " + $( this ).attr('alt') );
          }); 
        }, 1000);

      }
      if(current==2) {
        $(".points-section1 img").finish();
      }
      if((current==2 && next==3) || (current==4 && next==3)) {
        $(".points img").hide();
        setTimeout(function() {  
          $(".points-section2 img").each(function( index ) {
            $(this).delay((index+1)*d).fadeIn(f);
            // console.log( index + ": " + $( this ).attr('alt') );
          });
        }, 1000);
      }
      if(current==3) {
        $(".points-section2 img").finish();
      }

      if((current==3 && next==4) || (current==5 && next==4)) {
        $("#screen-details-1").css({"bottom": "-338px", "clip": "rect(0px, 299px, 503px, 0px)" });
        $("#screen-details-1").delay(3000).animate({ bottom : 0},
        {
          duration:5000,
          step: function(now, fx) {
              $(this).css('clip', 'rect(' +(now+338)+'px , 299px, '+(now+841)+'px, 0px)')
          }
        }, 1000);
        $(".points img").hide();
        setTimeout(function() {  
          $(".points-section3 img").each(function( index ) {
            $(this).delay((index+1)*d).fadeIn(f);
            // console.log( index + ": " + $( this ).attr('alt') );
          });
        }, 1000);
      }
      if(current==4) {
        $("#screen-details-1").finish();
        $(".points-section3 img").finish();
      }

      if((current==4 && next==5) || (current==6 && next==5)) {
        $("#screen-details-2").css({"bottom": "-206px", "clip": "rect(0px, 299px, 503px, 0px)" });
        $("#screen-details-2").delay(3000).animate({ bottom : 0},
        {
          duration:5000,
          step: function(now, fx) {
              $(this).css('clip', 'rect(' +(now+206)+'px , 299px, '+(now+709)+'px, 0px)')
          }
        }, 1000); 
        $(".points img").hide();
        setTimeout(function() {  
          $(".points-section4 img").each(function( index ) {
            $(this).delay((index+1)*d).fadeIn(f);
            // console.log( index + ": " + $( this ).attr('alt') );
          });
        }, 1000);
      }
      if(current==5) {
        $("#screen-details-2").finish();
        $(".points-section4 img").finish();
      }    
		}
	});
});