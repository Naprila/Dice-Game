// Player1
var randomNumber1 = Math.floor(Math.random()*6)+1;

var leftImageAddress = "images/dice"+randomNumber1+".png";
var randomDiceImage = document.querySelector(".img1").setAttribute("src", leftImageAddress);


// Player2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var rightImageAddress = "images/dice"+randomNumber2+".png";
var randomDiceImage = document.querySelector(".img2").setAttribute("src", rightImageAddress);

document.querySelector(".container h1").textContent=winner();

// Logic for finding the Winner
function winner()
{
  if(randomNumber1 === randomNumber2)
    return "It's a TIE!!!";
  else if(randomNumber1 > randomNumber2)
    return "Player1 Wins!";
  else
    return "Player2 Wins!";
}
