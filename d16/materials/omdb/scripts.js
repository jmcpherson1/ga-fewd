/*
$.getJSON("url here", function(data) {
  console.log(data);
});
*/



$("button").on("click", function() {
  var title = $("input").val();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
  console.log(data);
    $(".title").text(data["Title"]);
    $(".year").text(data["Year"]);
    $(".poster").attr("src",data["Poster"]);
    $(".plot").text(data["Plot"]);
    //Make title a list item
    var searchHistory = $("<li>" + title + "</li>");
    //Append title to end of page
    $(".search-history").append(searchHistory);
  });
});

//When you click on list item it links to that movie page
$(".search-history").on("click", function(event) {
  var title = $(event.target).text();
  
  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
  console.log(data);
    $(".title").text(data["Title"]);
    $(".year").text(data["Year"]);
    $(".poster").attr("src",data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
});



