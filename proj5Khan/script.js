/*Umar Khan, project 5, Mar 03, 2021*/

function validateForm(e) {
    var x = document.form1.fname.value;
    if (x == "") {
        alert("Name is a required field. It cannot be left empty.");

        // Calling the preventDefault method
        // prevents the default behavior of
        // the submitting the form when the 
        // submit button is clicked.
        e.preventDefault( );
    }
}

function init( ) {
    var f = document.getElementsByName("form1");
    f[0].addEventListener("submit", validateForm);
}

function yesnoCheck(that) {
    if (that.value == "Yes") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}

window.onload = init; // loads the page 