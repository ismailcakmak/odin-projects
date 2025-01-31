var humanPoint = 0;
var computerPoint = 0;
var roundPlayed = 0;
var lastHumanChoice = null;
var lastComputerChoice = null;
var winOrDraw = null;

function getComputerChoice() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
      
    let availableChoices = ['rock','paper','scissors'];
    let computerChoice = availableChoices[getRandomInt(3)];

    return computerChoice;
}

function determineWinner(humanChoice, computerChoice) {

    if (humanChoice === computerChoice)
        return "draw"

    let isThereAnyRock = function() {
        return (humanChoice ==='rock' || computerChoice ==='rock') ? true : false;
    }();

    let isThereAnyPaper = function(){
        return (humanChoice ==='paper' || computerChoice ==='paper') ? true : false;
    }();

    let isThereAnyScissors = function(){
        return (humanChoice ==='scissors' || computerChoice ==='scissors') ? true : false;
    }();

    

    if (isThereAnyRock & isThereAnyPaper) {
        return (humanChoice ==="paper") ? "human" : "computer";
    }

    if (isThereAnyRock & isThereAnyScissors) {
        return (humanChoice ==="rock") ? "human" : "computer";
    }

    if (isThereAnyPaper & isThereAnyScissors) {
        return (humanChoice ==="scissors") ? "human" : "computer";
    }
}

function playRound(humanChoice) {

    let computerChoice = getComputerChoice();
    let winner = determineWinner(humanChoice,computerChoice);
    
    //update points
    if (winner === 'draw') {
        humanPoint += 1;
        computerPoint += 1;
    }
    else   
        (winner === "human") ? humanPoint++ : computerPoint++;
    

    //global var
    winOrDraw = winner;

    //congrat sentence
    let winnerSentence = (winner==='draw') ? "there is a draw" : `${winner} won this round!`;
    winnerSentence += `\n Human : ${humanPoint} vs Computer : ${computerPoint}`;
    console.log(winnerSentence);
    roundPlayed++;

    lastComputerChoice = computerChoice;
    lastHumanChoice = humanChoice;
    changeDom();
}

function changeDom(){

    /* change round counter */
    roundCounter = document.querySelector(".round");
    roundCounter.textContent = "Round : " + String(roundPlayed);

    /* change human and computer score */
    humanPointElement = document.querySelector(".human-point");
    computerPointElement = document.querySelector(".computer-point");

    humanPointElement.textContent = "Human Score : " + String(humanPoint);
    computerPointElement.textContent = "Computer Score : " + String(computerPoint);

    if (winOrDraw==="human") {
        humanPointElement.style.color = "green";
        computerPointElement.style.color="red";
    }
    else if (winOrDraw==="computer") {
        humanPointElement.style.color = "red";
        computerPointElement.style.color="green";
    }
    else {
        humanPointElement.style.color = "orange";
        computerPointElement.style.color="orange";
    }

    /* change rock-paper-scissors images */
    humanMoveImage = document.querySelector(".human-move-image");
    computerMoveImage = document.querySelector(".computer-move-image");

    switch(lastHumanChoice){
        case "rock":
            humanMoveImage.setAttribute("src", "./images/rock.svg")
            break;
        case "paper":
            humanMoveImage.setAttribute("src", "./images/paper.svg")
            break;
        case "scissors":
            humanMoveImage.setAttribute("src", "./images/scissors.svg")
            break;
    }

    switch(lastComputerChoice){
        case "rock":
            computerMoveImage.setAttribute("src", "./images/rock.svg")
            break;
        case "paper":
            computerMoveImage.setAttribute("src", "./images/paper.svg")
            break;
        case "scissors":
            computerMoveImage.setAttribute("src", "./images/scissors.svg")
            break;
    }


}

function main() {

    const btnRock = document.querySelector(".btn-rock");
    const btnPaper = document.querySelector(".btn-paper");
    const btnScissors = document.querySelector(".btn-scissors");

    btnRock.addEventListener("click", ()=>{
        playRound("rock");
    });

    btnPaper.addEventListener("click", ()=>{
        playRound("paper");
    });

    btnScissors.addEventListener("click", ()=>{
        playRound("scissors");
    });     
    
}


main();