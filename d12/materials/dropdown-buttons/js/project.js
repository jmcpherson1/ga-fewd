
$("#btnFile").on("click", function () {
   $("#file").toggle();
});

$("#btnFile").on("focusout", function () {
   $("#file").hide();
});

$("#btnEdit").on("click", function () {
   $("#edit").toggle();
});

/*
$("button").on("click", function () {
   $("ul").toggleClass("hide");
});
*/

/*
$("#btnFile").on("click", function () {
   $("#file").css("display", "block");
});
*/