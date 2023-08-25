// getting random values for player 1


const scoreDisplay1 = document.getElementById("scoreone");
const scoreDisplay2 = document.getElementById("scoretwo");

var score1 = 0;
var score2 = 0;


const player1IncrementButton = document.getElementById("refreshButton");
player1IncrementButton.addEventListener("click", function() {
    var random1=Math.random();
random1=random1*6;
random1=Math.floor(random1)+1;
console.log(random1);
if(random1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(random1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(random1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(random1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(random1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


// getting random values for player 2

var random2=Math.random();
random2=random2*6;
random2=Math.floor(random2)+1;
console.log(random2);
if(random2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(random2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(random2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(random2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(random2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}


if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins !!";
    score1++; // Increment the score
    console.log(score1);
    scoreDisplay1.textContent = `Score1: ${score1}`;

    // const player1ScoreDisplay = document.getElementById("scoreone");
    // player1Score++;
    // player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;
    // // Update and store the score in localStorage
    // localStorage.setItem("player1Score", player1Score);

    // const player2ScoreDisplay = document.getElementById("scoretwo");
    // player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
    
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 wins!!";
    score2++; // Increment the score
    
    scoreDisplay2.textContent = `Score2: ${score2}`;
    
    // const player2ScoreDisplay = document.getElementById("scoretwo");
    // player2Score++;
    // player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
    // // Update and store the score in localStorage
    // localStorage.setItem("player2Score", player2Score);

    // const player1ScoreDisplay = document.getElementById("scoreone");
    // player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;

}
else{
    document.querySelector("h1").innerHTML="Draw";

    // const player1ScoreDisplay = document.getElementById("scoreone");
    // player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;

    // const player2ScoreDisplay = document.getElementById("scoretwo");
    // player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
}




});


// var random1=Math.random();
// random1=random1*6;
// random1=Math.floor(random1)+1;
// console.log(random1);
// if(random1===1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(random1===2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(random1===3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(random1===4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(random1===5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }


// // getting random values for player 2

// var random2=Math.random();
// random2=random2*6;
// random2=Math.floor(random2)+1;
// console.log(random2);
// if(random2===1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(random2===2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(random2===3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(random2===4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(random2===5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }


// let player1Score = localStorage.getItem("player1Score") || 0;
// let player2Score = localStorage.getItem("player2Score") || 0;

// // player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;
// // player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;

// if(random1>random2){
//     document.querySelector("h1").innerHTML="Player 1 wins !!";
//     const player1ScoreDisplay = document.getElementById("scoreone");
//     player1Score++;
//     player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;
//     // Update and store the score in localStorage
//     localStorage.setItem("player1Score", player1Score);

//     const player2ScoreDisplay = document.getElementById("scoretwo");
//     player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
    
// }
// else if(random2>random1){
//     document.querySelector("h1").innerHTML="Player 2 wins!!";
//     const player2ScoreDisplay = document.getElementById("scoretwo");
//     player2Score++;
//     player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
//     // Update and store the score in localStorage
//     localStorage.setItem("player2Score", player2Score);

//     const player1ScoreDisplay = document.getElementById("scoreone");
//     player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;

// }
// else{
//     document.querySelector("h1").innerHTML="Draw";

//     const player1ScoreDisplay = document.getElementById("scoreone");
//     player1ScoreDisplay.textContent = `Player 1: ${player1Score}`;

//     const player2ScoreDisplay = document.getElementById("scoretwo");
//     player2ScoreDisplay.textContent = `Player 2: ${player2Score}`;
// }

// const refreshButton = document.getElementById("refreshButton");

// // Add a click event listener to the button
// refreshButton.addEventListener("click", function() {
//     // Reload the page
//     location.reload();
// });
