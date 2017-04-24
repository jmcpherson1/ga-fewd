//When the button is clicked
//Add toggle the nav
//When anywhere on page is clicked, close nav
//When page is more than 767px, show Nav (display:block)
   //If the page width is more than 767px display:block on nav

// Toggle dropdown menu
$('.menu-icon').on("click", function () {
   $('nav .dropdown').toggle();
});

$('.menu-icon').on('focusout', function () {
   $('nav .dropdown').hide();
});

//Remove display:none on nav when window is resized
// $(window).resize(function() {
//    var pageWidth = $(window).width();
//    if (pageWidth > 1024) {
//       $("nav .dropdown").show();
//    } else if (pageWidth < 1023) {
//       $("nav .dropdown").hide();
//    }
// });

// Remove display:none on nav when window is resized
// $(window).click(function() {
//    var pageWidth = $(window).width();
//    if (pageWidth > 1024) {
//       $('nav .dropdown').css('display','block');
//    } else {
//       console.log('idk what to put here');
//    }
// });


//Nav animation
$('.menu-icon').click(function(){
	$(this).toggleClass('open');
  // $('.header').css('background','transparent');
  // $('.header').toggleClass('.header-bg');
  // $('.header').toggleClass('.change-bg');
});