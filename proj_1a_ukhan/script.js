/*Umar Khan, project 1a, Jan/13/2021*/
function Convertor() {
    var mph;
    var calculation;
    var option;
    var input;
    var output;
    
    mph = document.getElementById("MPH").value;

    mph = parseFloat(mph);
    mph = mph.toFixed(2);

   option = document.getElementById("SelConversion").value;
    
   if(option == "KMPH") {
       calculation = mph * 1.61;
       calculation = calculation.toFixed(2);
       output = (mph + " MPH is: "+ calculation + " Kilometers per hour" );
       document.getElementById("divResults").innerHTML = output;
   } 
   else if (option =="MPS"){
       calculation = mph * 0.447;
       calculation = calculation.toFixed(2);
       output = (mph + " MPH is: "+ calculation + " Meters per second" );
       document.getElementById("divResults").innerHTML = output;}
   }