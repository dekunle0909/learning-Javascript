// var myMessage = document.getElementById("message");
// function showMessage() { 
//     myMessage.className = "show";
// }
// setTimeout(showMessage, 3000);

var colorChange = document.getElementById("color-change");
var colors = ["red", "green", "indigo", "yellow", "purple"];
var counter = 0;
function changeColor() { 
    colorChange.style.backgroundColor = colors[counter];
//     counter++;
//     if (counter >= colors.length) {
//         counter = 0;
//     }
} 
var myTimer = setInterval(changeColor, 2000); 

colorChange.onclick = function() {
    clearInterval(myTimer); 
}