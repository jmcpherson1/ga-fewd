
$("#btnFile").on("click", function () {
   $("#file").toggle();
});

$("#btnFile").on("focusout", function () {
   $("#file").hide();
});

$("#btnEdit").on("click", function () {
   $("#edit").toggle();
});

$("#btnEdit").on("focusout", function () {
   $("#edit").hide();
});


//Other way to apply click function to button

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