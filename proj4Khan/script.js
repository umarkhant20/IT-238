/* Umar Khan, project 4, Feb 25, 2021 */
function clickEventHandler( ) 
{
    const correctAnswers = ["b", "c", "a", "b", "c"]; /*These are the correct answer for the quiz*/
    var numCorrectAnswers = 0;
    for(let i = 1; i <= 5; i++) { /*It declare a variable globally*/
        var radioButtons = document.getElementsByName(i + "");
        for(let k = 0; k <= 2; k++) {
            if (radioButtons[k].checked &&
                radioButtons[k].value == correctAnswers[i-1]){
                numCorrectAnswers++;
            }
        }
    } /*It declares the variable and displays the total score on the page*/
    var para = document.getElementById("score");
    para.innerHTML = "Score: " + numCorrectAnswers;
}

/* There are the six button that appears on the page*/
function init( ) {
    var button6 = document.getElementById("btn6");
    button6.onclick = clickEventHandler;
    document.getElementById("btn").onclick = Hint1;
    document.getElementById("btn2").onclick = Hint2;
    document.getElementById("btn3").onclick = Hint3;
    document.getElementById("btn4").onclick = Hint4;
    document.getElementById("btn5").onclick = Hint5;
}

/*Hide and unhide function for the first hint buttons and it displays the given hint*/

function Hint1() {
    var h = document.getElementById("hint");
    if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
    document.getElementById("hint").innerHTML = "a is an incorrect answer";
    
}//End of Hint1();

/*Hide and unhide function for the first hint buttons and it displays the given hint*/
function Hint2() {
    var h = document.getElementById("hint2");
    if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
    document.getElementById("hint2").innerHTML = "b is an incorrect answer";
    
}//End of Hint2();

/*Hide and unhide function for the first hint buttons and it displays the given hint*/
function Hint3() {
    var h = document.getElementById("hint3");
    if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
    document.getElementById("hint3").innerHTML = "c is an incorrect answer";
    
}//End of Hint3();

/*Hide and unhide function for the first hint buttons and it displays the given hint*/
function Hint4() {
    var h = document.getElementById("hint4");
   if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
    document.getElementById("hint4").innerHTML = "a is an incorrect answer";
    
}//End of Hint4();

/*Hide and unhide function for the first hint buttons and it displays the given hint*/
function Hint5() {
    var h = document.getElementById("hint5");
    if(h.style.display == 'block'){
        h.style.display = 'none';
    }
    else{
        h.style.display = 'block';
    }
    document.getElementById("hint5").innerHTML = "b is an incorrect answer";
    
}//End of Hint5();

window.addEventListener("load", init); /* It runs on page load */