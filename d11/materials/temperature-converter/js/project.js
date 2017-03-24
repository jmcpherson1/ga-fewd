//When the button is clicked
//Take the inputVal
//Convert the inputVal to Fahrenheit = (C * 1.8) + 32
//Insert the conversion into inputVal into the #coverted


$("button").on("click", function () {
   // var inputVal = $("input").val();
   var inputVal = $("input").val() * 1.8 + 32;
      
   $("#converted").text(inputVal);

})