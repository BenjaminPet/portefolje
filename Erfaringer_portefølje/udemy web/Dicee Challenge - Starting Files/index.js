
var a = Math.floor(Math.random() * 6) + 1;
var b = Math.floor(Math.random() * 6) + 1;

console.log(a + " " + b);
      
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + a + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + b + ".png");

if (a > b) {
    document.querySelector("h1").innerHTML = "Player 1 win!";
} else if (a === b) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "Player 2 win!" ;
}
