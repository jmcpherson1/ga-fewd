// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$("#first").on("click", function() { //When thumb is clicked
   $("#bigimage").attr("src","img/1.jpg"); //Change #bigimage to the thumb
});

$("#second").on("click", function() { //When thumb is clicked
   $("#bigimage").attr("src","img/2.jpg"); //Change #bigimage to the thumb
});

$("#third").on("click", function() { //When thumb is clicked
   $("#bigimage").attr("src","img/3.jpg"); //Change #bigimage to the thumb
});

$("#fourth").on("click", function() { //When thumb is clicked
   $("#bigimage").attr("src","img/4.jpg"); //Change #bigimage to the thumb
});