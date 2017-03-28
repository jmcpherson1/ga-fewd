//DROPDOWN
//Take the dropdownVal and inputVal
//When the convert btn is clicked
//Convert to selected temp
//Insert the conversion into the DOM (#converted)



$("button").on("click", function () {

   // console.log($('select :selected').val())

   if ($('select :selected').val() === 'celsius'){
      var celsius = ($("input").val() - 32) * .5556;
      $('#converted').text(celsius).val() + $('#temp').text(" Celsius");
      // console.log(celsius);
   } else if ($('select :selected').val() === 'fahrenheit'){
      var fahrenheit = ($("input").val() * 1.8) + 32;
      $('#converted').text(fahrenheit).val() + $('#temp').text(" Fahrenheit");
      // console.log(fahrenheit);
   } else {
      console.log('error');
   }
});

