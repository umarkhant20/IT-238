/*Umar Khan, project 1b, Jan 20, 2021*/

function Convertor() { /*It performs the given calculation*/
    var mph; /*It declares the variable for the function*/
    var calculation;
    var option;
    var input;
    var output;
    
    mph = document.getElementById("MPH").value; 

    mph = parseFloat(mph); /* It accepts the string and convert it into a floating-point number. If the string does not contain a numeral value or If the first character of the string is not a Number then it returns NaN*/
    mph = mph.toFixed(2); /* It onverts a number into a string, rounding to a two number of decimals. */

   option = document.getElementById("SelConversion").value;
    
   if(option == "KMPH") { /* If the user select KMPH in the drop-down menu then the given calculation of output would perform*/
       calculation = mph * 1.61; 
       calculation = calculation.toFixed(2);
       output = (mph + " MPH is: "+ calculation + " Kilometers per hour" );
       document.getElementById("divResults").innerHTML = output;
   } 
   else if (option =="MPS"){ /* If the user select MPS in the drop-down menu then the given calculation of output would perform*/
       calculation = mph * 0.447;
       calculation = calculation.toFixed(2);
       output = (mph + " MPH is: "+ calculation + " Meters per second" );
       document.getElementById("divResults").innerHTML = output;}
   }

   var btn1 = document.getElementById("btn1"); /*It declares the variable for the button*/
   button.addEventHandler("onclick", eventHandler); /*It executes the given function on click of the button*/

   window.addEventListener("load", "init");