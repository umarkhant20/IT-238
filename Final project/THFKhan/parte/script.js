/*Umar Khan, Final Part E, Mar 13, 2021*/

function idCheck() {
    var string = "Q00-0000"; //It declares variable string and sets its value
    var expression = /^[BQ]\d{2}-\d{4,6}$/g; 
    
    /*This Regular Expression is a pattern used to match a character sequence in the string.
    It matches any string that contains a sequence of 4 to 6. Find BQ character between the 
    brackets. This expression will accept the string below
    Q00-0000, B22-6333, B00-0000, Q22-6333 */

    var result = expression.test(string); // It declares the variable result and sets its value
    document.getElementById("result").innerHTML = result + "<br>"; //It displays whether the given string value is ture or false
}

function init () {
    var button = document.getElementById("button"); //It declares a variable for the button
    button.addEventListener("click", idCheck); //On click of the button it displays the result
}

window.onload = init; // loads the page 