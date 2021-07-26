$("#check").click(function() {
    // whn the button is clicked, .toggled will be used throughout the css in order for ease of access and efficiency.
    $("html").toggleClass("toggled");
    });
//Button 1 animation, change width and height to 60px
$( "#btn1" ).click(function() {
  $( ".moon" ).animate({
   width: "60px",
   height: "60px", 
    }, 100 );
});
//Button 2 animation, change width and height to 120px
$( "#btn2" ).click(function() {
  $( ".moon" ).animate({
   width: "120px",
   height: "120px",    
    }, 100 );
});

//Button 3 animation, change width and height to 240px
$( "#btn3" ).click(function() {
  $( ".moon" ).animate({
   width: "240px",
   height: "240px",    
    }, 100 );
});
