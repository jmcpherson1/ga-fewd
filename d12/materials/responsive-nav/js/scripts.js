//When the button is clicked
//Add toggle the nav
//When anywhere on page is clicked, close nav
//When page is more than 767px, show Nav (display:block)
   //If the page width is more than 767px display:block on nav


$("#menu-icon").on("click", function () {
   $("nav").toggle();
});

//Can't figure out why this isn't working
$("#menu-icon").on("focusout", function () {
   $("nav").hide();
});

//Override display:none on nav to show
$(window).resize(function() {
   var window = $("html").width();
   if (window > 767) {
      $("nav").show();
   } else if (window < 768) {
      $("nav").hide();
   }
});



