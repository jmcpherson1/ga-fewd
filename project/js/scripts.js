//When the button is clicked
//Add toggle the nav
//When anywhere on page is clicked, close nav
//When page is more than 767px, show Nav (display:block)
   //If the page width is more than 767px display:block on nav

// Toggle dropdown menu
$(".menu-icon").on("click", function () {
   $("nav.dropdown").toggle();
});

$(".menu-icon").on("focusout", function () {
   $("nav.dropdown").hide();
});

// Remove display:none on nav
// $(window).resize(function() {
//    var pageWidth = $(window).width();
//    if (pageWidth > 1024) {
//       $("nav.dropdown").show();
//    } else if (pageWidth < 1023) {
//       $("nav.dropdown").hide();
//    }
// });
