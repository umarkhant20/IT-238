/*Umar Khan, project 2a, Feb 01, 2021*/

function getBySubcountry(){ /*It performs the given function*/
    var dataArray = JSON.parse(data); /*It coverts text into a JavaScript object*/
    var requestedSubcountry = document.getElementById("subcountry").value; /*It sets or returns the value of the option*/
    var output = document.getElementById("output"); /*It declares the outpout for the function*/
    var display = "";
    for (let d of dataArray) { /*It decalres variable globally*/
        var n = d.name; /*It declares the variable for the function*/
        var c = d.country;
        var s = d.subcountry;
        if (s == requestedSubcountry){ /*It takes the name of the Subcountry and then displays the name of the cities within that subcountry*/
            display += `${n}\n`;
                }
            }
            output.value = display; /*It returns the results*/
}

function getByName(){ /*It performs the given function*/
    var dataArray = JSON.parse(data); /*It coverts text into a JavaScript object*/
    var requestedName = document.getElementById("name").value; /*It sets or returns the value of the option*/
    var output2 = document.getElementById("output2"); /*It declares the outpout for the function*/
    var display = "";
    for (let d of dataArray) {  /*It decalres variable globally*/
        var n = d.name; /*It declares the variable for the function*/
        var c = d.country;
        var s = d.subcountry;
        if (n == requestedName){ /*It takes the name of the city and then displays the name of the Subcountry and country that belongs to that city*/
            display += `${s} ${c}\n`;
                }
            }
            output2.value = display; /*It returns the results*/
}

function init(){
    var button = document.getElementById("btn"); /*It declares the variable for first button*/
    button.addEventListener("click", getBySubcountry); /*It executes the given function on click of the first button*/
    var button2 = document.getElementById("btn2"); /*It declares the variable for second button*/
    button2.addEventListener("click", getByName); /*It executes the given function on click of the second button*/
}

window.addEventListener("load", init);