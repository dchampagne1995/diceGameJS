// Welcome alert
alert("Welcome to the Dice Game!");

// Initializing and setting two random variables for dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Selecting dice images based on random numbers
var diceImg1 = "images/" + "dice" + randomNumber1 + ".png";
var diceImg2 = "images/" + "dice" + randomNumber2 + ".png";

// Setting image to corresponding dice roll
document.querySelector(".img1").setAttribute("src", diceImg1);
document.querySelector(".img2").setAttribute("src", diceImg2);

// Player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🥇 Player 1 Wins!"
}

// Player 2 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🥈";
}

// Draw
else {
  document.querySelector("h1").textContent = "It's a Draw!";
}
