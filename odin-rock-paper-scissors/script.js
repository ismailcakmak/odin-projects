
var humanPoint = 0;
var computerPoint = 0;


function getComputerChoice() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
      
    let availableChoices = ['rock','paper','scissors'];
    let computerChoice = availableChoices[getRandomInt(3)];

    return computerChoice;
}

function getHumanChoice() {

    let humanChoice = null;
    let isChoiceValid = false;

    while (!isChoiceValid) {
        humanChoice = prompt("What's your choice : rock, paper, scissors");
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors')
            isChoiceValid = true;
    }
    
    return humanChoice;
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

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = determineWinner(humanChoice,computerChoice);
    
    //update points
    if (winner === 'draw') {
        humanPoint += 1;
        computerPoint += 1;
    }
    else   
        (winner === "human") ? humanPoint++ : computerPoint++;
    

    //congrat sentence
    let winnerSentence = (winner==='draw') ? "there is a draw" : `${winner} won this round!`;
    winnerSentence += `\n Human : ${humanPoint} vs Computer : ${computerPoint}`;
    console.log(winnerSentence);
    alert(winnerSentence);



}


function main() {

    while(true)     
        playRound();
    
}


main();