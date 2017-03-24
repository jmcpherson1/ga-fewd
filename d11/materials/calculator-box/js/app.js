// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

var click = 0;

$("#a10").on("click", function() {
   click = click + 10;
   $("#out").text(click);
});

$("#a20").on("click", function() {
   click = click + 20;
   $("#out").text(click);
});

$("#a30").on("click", function() {
   click = click + 30;
   $("#out").text(click);
});


$("#red").on("click", function() {
   $("#out").css("background-color","red"); 
});

$("#blue").on("click", function() {
   $("#out").css("background-color","blue");
});

$("#n10").on("click", function() {
   click = click - 10;
   $("#out").text(click);
});

$("#n20").on("click", function() {
   click = click - 20;
   $("#out").text(click);
});

$("#n30").on("click", function() {
   click = click - 30;
   $("#out").text(click);
});

//*****Center tile reset*****//
$("#out").on("click", function() { //If center is clicked
   click = 0; //Reset to 0
   $("#out").text(click);
   $("#out").css("background-color",""); //Remove bg color
});
