// player1
var randomNumber1 = Math.floor(Math.random()*6)+1;

randomDiceeImage = "dice"+randomNumber1+".png";//it's convert into = dice1.png

randomImageSource = "images/"+randomDiceeImage;//it check images

var image1 = document.querySelectorAll("img")[0];//it select player 1

image1.setAttribute("src", randomImageSource);//change img to dice1 dice2 

// player2

var randomNumber2 = Math.floor(Math.random()*6)+1;

randomDiceeImage = "dice"+randomNumber2+".png";

randomImageSource = "images/"+randomDiceeImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

// result

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player1 wins!";

}else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player2 wins!";

}else {
    document.querySelector("h1").innerHTML = "Drow!";
}
