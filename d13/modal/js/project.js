//When button is clicked
//Toggle modal on and off
//Fade in overlay
//When outside of modal is clicked, hide modal and overlay

$("a").on("click", function () {
   $(".modal").toggleClass("show-modal");
   $(".overlay").fadeIn();
});

$(".overlay").on("click", function() {
  $(".overlay").hide();
  $(".modal").toggleClass("show-modal");
});
