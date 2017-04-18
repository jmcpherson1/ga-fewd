var movies = [];

$("button.search").on("click", function() {
  var title = $("input").val();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")"; //Create var to add rating beside title
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src",data["Poster"]);
    $(".plot").text(data["Plot"]);
    //Make title a list item
    var li = $("<li>" + data["Title"] + "</li>");
    //Append title to end of page
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: data["Title"],
      score: data["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
  });
});

//When you click on the "li" it links to that movie page
$("ul").on("click", function(event) {
  var titleAndRating = data["Title"] + " (" + data["Rated"] + ")"; //Create var to add rating beside title
  
  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src",data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
});


$("button.filter").on("click", function() {
  $("ul.search-history").children().remove();

/* THIS IT THE LONG WAY. USE FOR.EACH FUNCTION...
var index = 0;
while (index < movies.length) {
  var scoreAsInt = parseInt(movies[index]["score"]);
  if (scoreAsInt > 50 ) {
    var li = $("<li>" + movies[index]["title"] + "</li>");
    $("ul.search-history").append(li);
  }
  index = index + 1;
}
*/

  movies.forEach(function(aSingleMovie) {
    var scoreAsInt = parseInt(aSingleMovie["score"])
    if ( scoreAsInt > 50 ) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  });
  // get rid of all the bad movies
  //   * search through the array
  //   * for each movie that meets our criteria
  //   * insert it into the DOM
});

$("button.show-all").on("click", function() {
  $("ul.search-history").children().remove();

  movies.forEach(function(aSingleMovie) {
    var li = $("<li>" + aSingleMovie["title"] + "</li>");
    $("ul.search-history").append(li);
  });
});

//Find out if the checkbox is check
//If checked, only show good movies
//If uncheck, show all movies
$("input[type='checkbox']").change(function() {
  var isChecked = $("input[type='checkbox']").is(":checked");

  if (isChecked === true) {
    $("ul.search-history").children().remove();

    movies.forEach(function(aSingleMovie) {
      var scoreAsInt = parseInt(aSingleMovie["score"])
      if ( scoreAsInt > 50 ) {
        var li = $("<li>" + aSingleMovie["title"] + "</li>");
        $("ul.search-history").append(li);
      }
    });
  } else if (isChecked === false) {
    $("ul.search-history").children().remove();

    movies.forEach(function(aSingleMovie) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    });
  } 
});
