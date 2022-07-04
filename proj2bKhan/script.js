/*Umar Khan, project 2b, Feb 17, 2021*/

var contents;

function readSingleFile(event) {

    /* Obtain the single uploaded file*/
    var f = event.target.files[0]; 

    if (f) {
        var r = new FileReader( );
        r.onload = function(e) { 
            contents = e.target.result;
        }
        r.readAsText(f);
    }
    else { 
        alert("Failed to load file");
    }
}

function getBySubcountry(){ /*It performs the given function*/
    var contentsArray = JSON.parse(contents); /*It coverts text into a JavaScript object*/
    var requestedSubcountry = document.getElementById("subcountry").value; /*It sets or returns the value of the option*/
    var output = document.getElementById("output"); /*It declares the outpout for the function*/
    var display = "";
    for (let d of contentsArray) { /*It decalres variable globally*/
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
    var contentsArray = JSON.parse(contents); /*It coverts text into a JavaScript object*/
    var requestedName = document.getElementById("name").value; /*It sets or returns the value of the option*/
    var output2 = document.getElementById("output2"); /*It declares the outpout for the function*/
    var display = "";
    for (let d of contentsArray) {  /*It decalres variable globally*/
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
    document.getElementById("file").addEventListener("change", readSingleFile, false);
    var button = document.getElementById("btn"); /*It declares the variable for first button*/
    button.addEventListener("click", getBySubcountry); /*It executes the given function on click of the first button*/
    var button2 = document.getElementById("btn2"); /*It declares the variable for second button*/
    button2.addEventListener("click", getByName); /*It executes the given function on click of the second button*/
}

window.addEventListener("load", init);