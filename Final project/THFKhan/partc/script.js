/*Umar Khan, Final Part C, Mar 13, 2021*/

//This function picks up the unblur images from the images folder and display them  
var unblurImage = function(eventObj){
    var imageTag = eventObj.target; //It returns the element that being targeted
    var newFileName = "probc1-images/" + imageTag.id + ".jpg";
    imageTag.src = newFileName;
}

//This function picks up the blur images from the images folder and display them  
var blurImage = function(eventObj){
    var imageTag = eventObj.target; //It returns the element that being targeted
    var newFileName = "probc1-images/" + imageTag.id + "blur.jpg";
    imageTag.src = newFileName;
}

//This function unblurs all the images 
function unblurAll(){
    var images = document.getElementsByTagName("img");
    for(let imageTag of images){
      var newFileName = "probc1-images/" + imageTag.id + ".jpg";
      imageTag.src = newFileName;
    }
}

//This function load images, unblur and blur them on mouse's cursor move
function init(){
    var para =document.getElementById("images");
    for(let i = 1; i<= 4; i++){
      let imageCell = document.createElement("img");
      imageCell.setAttribute("id", i);
      para.appendChild(imageCell);
      let imgName = "probc1-images/" + i + "blur.jpg";
      imageCell.src = imgName;
      imageCell.addEventListener("mouseover", unblurImage);
      imageCell.addEventListener("mouseleave", blurImage);
    }
    var button = document.getElementById("btn1"); //It declares a variable for the button
    button.addEventListener("click",unblurAll);  //It displays the Unblur all images button on the page
}

window.onload = init; //It loads the page