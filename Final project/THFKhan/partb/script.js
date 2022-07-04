/*Umar Khan, Final Part B, Mar 12, 2021*/

function clearAll(){ /*It declares function to clear up all the text fields */
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value= "";
    document.getElementById("result").value= "";
}

function init(){
    var result = document.getElementById("result"); /*It declares the variable for the result text field*/
    result.addEventListener("click", calculate); /*It displays the calculated result on click*/
    var button = document.getElementById("button");  /*It declares the variable for the clear all button*/
    button.addEventListener("click", clearAll); /*On click of the button it clears all of the text fields */
}

function calculate(){ 
    var operand1 = document.getElementById("operand1").value; /*It declares the a variable operand1*/
    var operand2 = document.getElementById("operand2").value; /*It declares the a variable operand2*/
    var operand = document.querySelector('input[name="operation"]:checked').value;
    if(operand=="+") /*If the operand value is + then it adds the operand 1 and 2*/
            document.getElementById("result").value= parseFloat(operand1)+parseFloat(operand2);
    else if(operand=="-") /*If the operand value is - then it subtract the operand 1 and 2*/
            document.getElementById("result").value= parseFloat(operand1)-parseFloat(operand2);
    else if(operand=="*") /*If the operand value is * then it multiplies the operand 1 and 2*/
            document.getElementById("result").value= parseFloat(operand1)*parseFloat(operand2);
    else if(operand=="/") /*If the operand value is / then it divides the operand 1 and 2*/
            document.getElementById("result").value= parseFloat(operand1)/parseFloat(operand2);
}

window.onload = init; // loads the page 