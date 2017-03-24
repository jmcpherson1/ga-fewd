/*$("button").on("click", function() {
   // console.log("I was clicked!");
   $("p.cool").text("Cooler text for this line.");
})*/

/****************************/

/*
var clickCounter = 0;
var originalText = $("p.cool").text();

$("button").on("click", function() {  
   clickCounter = clickCounter + 1;
   console.log(clickCounter);
   if (clickCounter === 2) {  //If user clicks twice do this:
      $("p.cool").text("Button was clicked twice!"); 
   } else { //or else if the user clicks 3 times, do this:
      $("p.cool").text(originalText);
   }
})
*/

/****************************/

$("button").on("click", function() {  //When the button is clicked
   var inputVal = $("input").val(); //**variable needs to be inside function to work
   console.log(inputVal); //Grab the value of the input
   $("h1").text(inputVal); //put the value in h1
})

/****************************/