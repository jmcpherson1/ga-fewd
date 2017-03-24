$("a#color-button").on("click", function() {
   var redInputVal = $("input#red").val();
   var greenInputVal = $("input#green").val();
   var blueInputVal = $("input#blue").val();
   // var rgbInputVal = "rgb(" + redInputVal + "," + greenInputVal + "," + blueInputVal + ")";

   // $("#wrapper").css("background-color","rgb(255, 255, 255)");
   $("#wrapper").css("background-color","rgb(" + redInputVal + "," + greenInputVal + "," + blueInputVal + ")");
   $("p#colorful-text").text("RGB: " + "(" + redInputVal + "," + greenInputVal + "," + blueInputVal + ")");
})

//When the user inputs the numbers
//And then clicks the button (#color-button)
//Change the color of the button to users rgb values
//Change the #color-text text to user input numbers