$(".box").css("background-color","blue");

$(".box").text("This is a blue box!");

// $("#box1").on("click", function() {
//    $("#box1").css("width","500px");
//    $("#box1").css("height","500px");
//    $("#box2").css("width","200px");
//    $("#box2").css("height","200px");
// })

// $("#box2").on("click", function() {
//    $("#box2").css("width","500px");
//    $("#box2").css("height","500px");
//    $("#box1").css("width","200px");
//    $("#box1").css("height","200px");
// })

/****************************/


$("#box1").on("click", function() {
   $("#box1").addClass("bigger");
})