/* Umar Khan, project 3, Feb 12, 2021 */
class Lotto { 
    constructor(numLottoBalls, numBalls) { /*It creates an object for the class*/
        this.numLottoBalls = numLottoBalls; /*It refers the object it belongs to */
        this.numBalls = numBalls;
        this.balls = [ ];
        for(let i = 0; i < numBalls; i++) { /*It decalres variable globally*/
            this.balls.push(0); /*It adds the item to array and changes the length of an array*/
        }
    }

    drawLotto( ) {
        for(let i = 0; i < this.numBalls; i++) {
            let ball = Math.floor(Math.random( ) * /*It randomly select the balls to display */
                this.numLottoBalls) + 1;
            this.balls[i] = ball; 
        }
    }

    getBall(index) {
        return this.balls[index - 1]; /*It return the result of randomly selected balls */

    }

    toString( ) {
        var output = '';
        for(let i = 0; i < this.numBalls; i++) {
            output += this.balls[i] + ' '; /* It adds the value of the right operand to a variable and assigns the result to the variable. */
        }
        return output; /*It returns the results*/
    }
}

function drawLotto( ) { /*It performs the given function*/

    var numBallsDraw = document.getElementById("numberBallsDrawn").innerHTML;
    var lottoNum = document.getElementById("ballsRange").innerHTML;
    var dl = new Lotto(lottoNum, numBallsDraw);
    dl.drawLotto( );
    for(let i = 1; i <= numBallsDraw; i++) { /*It declares variable globally*/
        let imgLocation = i.valueOf( );
        let imgNum = dl.getBall(i);
        let image = document.getElementById(imgLocation);
        let pathName = "lottoballs/" + imgNum + ".gif"; /* It declares variable globally to get the images from the lottoballs folder*/
        image.src = pathName;
    }
}

function init( ) {
    let btn = document.getElementById("btn"); 
    btn.addEventListener("click", drawLotto);
    for(let i = 1; i <= numBallsDraw; i++) { /*It declares variable globally*/
        let imageId = i.valueOf( );
        let image = document.getElementById(imageId);
        image.addEventListener("click", event => {
            var clickedImage = event.target;
            var imgNum = Math.floor(Math.random( ) * lottoNum) + 1; /*It gets the random images from the lottoballs folder*/
            clickedImage.src = "lottoballs/" + imgNum + ".gif"; 
        });
    }
}

function init(){ 
    var Button = document.getElementById("btn"); /*It declares the variable for draw balls button*/
    Button.onclick = drawLotto; /*It executes the given function on click of the button*/
    
    var slider = document.getElementById("ballsDrawn"); 
    var output = document.getElementById("numberBallsDrawn");
    output.innerHTML = slider.value; 

    slider.oninput = function() {
    output.innerHTML = this.value; /*It returns the results*/
    }

    var slider2 = document.getElementById("numBallsRange");
    var output2 = document.getElementById("ballsRange");
    output2.innerHTML = slider2.value;

    slider2.oninput = function() {
    output2.innerHTML = this.value;  /*It returns the results*/
    }
}

window.addEventListener("load", init); /* It runs on page load */