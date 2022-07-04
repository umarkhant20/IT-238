/*Umar Khan, Final Part D, Mar 13, 2021*/

function calculateTip( ){ //It declares a calculateTip function
    validation( ) ;
    var amount = document.getElementById("amount").value; // It declares a variable, amount
    var tip = amount * 0.20; // It declares the value of the variable tip
    if (tip < 1.00){ 
        tip = 1.00;
    }
    tip = Math.floor(Math.round(tip*100.0))/100.0;
    document.getElementById("tip").value = "$" + tip; // It performs the given math 
}

function validation () { // It creates a validation function to check the entered value
    var amount = document.getElementById("amount").value;
    if( isNaN(amount)) // If the amount is not entered in numeric, it show a warning 
        document.getElementById("warning").innerText="*Please enter the amount in numbers only*";
    else // If the amount is in numeric then it won't show a warning
         document.getElementById("warning").innerText="";
}

function init(){
    var button = document.getElementById("button"); //It declares a variable for the calculate button
    button.addEventListener("click", calculateTip); //On click of the button it displays the calculated tip
    var validity = document.getElementById("amount"); //It declares a variable of validity*/
    validity.addEventListener("input", validation); //On input of a non numeric value it displays a warning
}

window.onload = init; // loads the page 