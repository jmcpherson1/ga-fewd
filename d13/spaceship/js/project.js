$(document).keydown(function(event){
    switch (event.which){
    case 37:    //left arrow key
        $("#ship").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $("#ship").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $("#ship").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $("#ship").finish().animate({
            top: "+=50"
        });
    }


});

// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 37: // left
//         break;

//         case 38: // up
//         break;

//         case 39: // right
//         break;

//         case 40: // down
//         break;

//         default: return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });


