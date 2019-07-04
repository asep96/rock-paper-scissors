let computerSelection;
let userSelection;
const resultsDiv = document.querySelector("#round_result");
const endGameDiv = document.querySelector('#end_game_message');
const finalScoreDiv = document.querySelector('#final_score');
const currentScoreDiv = document.querySelector('#current_score');
let roundCount = 1;
let userScore = 0;
let compScore = 0;

var btnRock = document.querySelector('#rock_btn');
btnRock.addEventListener('click', () => {
  userSelection = "rock";
  computerSelection = computerPlay();
  roundCount = roundCount + 1;
  gameLogic();
});

var btnPaper = document.querySelector('#paper_btn');
btnPaper.addEventListener('click', () => {
  userSelection = "paper";
  computerSelection = computerPlay();
  roundCount = roundCount + 1;
  gameLogic();
});

var btnScissors = document.querySelector('#scissors_btn');
btnScissors.addEventListener('click', () => {
  userSelection = "scissors";
  computerSelection = computerPlay();
  roundCount = roundCount + 1;
  gameLogic();
});

function computerPlay(){
    let choiceArray = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[choice];
}


function finalScore(userScore, compScore){
    if(userScore > compScore){
        currentScoreDiv.textContent = "User wins by a score of " + userScore + "-" + compScore; 
    }
    else if(userScore < compScore){
        currentScoreDiv.textContent = "Computer wins by a score of " + compScore + "-" + userScore;
    }
    else{
        currentScoreDiv.textContent = "We have a draw with a score of " + compScore + "-" + userScore;
    }
    endGameDiv.textContent = "Five rounds were played! Refresh the page to play again!"
}


function playRound(computerSelection, userSelection){
    if(computerSelection == userSelection){
        result = "Both players made the same selection. We have a draw!" + 
        " Both players earn a point!";
        resultsDiv.textContent = result;
        return "draw";
        }
    else if (computerSelection == "scissors" && userSelection == "rock"){
        result = "You win this round! Rock beats scissors!";
        resultsDiv.textContent = result;
        return "win";
        }

    else if (computerSelection == "scissors" && userSelection == "paper"){
        result = "You lose this round! Scissors beats paper!";
        resultsDiv.textContent = result;
        return "loss";
        }

    else if (computerSelection == "rock" && userSelection == "scissors"){ 
        result = "You lose this round! Rock beats scissors!";
        resultsDiv.textContent = result;
        return "loss";
        }

    else if (computerSelection == "rock" && userSelection == "paper"){ 
        result = "You win this round! Paper beats rock!";
        resultsDiv.textContent = result;
        return "win";
        }

    else if (computerSelection == "paper" && userSelection == "scissors"){ 
        result = "You win this round! Scissors beats paper!";
        resultsDiv.textContent = result;
        return "win";
        }
    else if (computerSelection == "paper" && userSelection == "rock") {
        result = "You lose this round! Paper beats rock!";
        resultsDiv.textContent = result;
        return "loss";
        }
    else {
        result = "Something went wrong with your submission. This round will be treated as a draw.";
        resultsDiv.textContent = result;
        return "draw";
        }
}

function gameLogic(){
    let currentRound = playRound(computerSelection, userSelection);
    if(roundCount <= 6){
        if(currentRound == "win"){
            ++userScore;
        }
        else if (currentRound == "loss"){
            ++compScore;
        }
        else if(currentRound == "draw"){
            ++userScore;
            ++compScore;
        }
        currentScoreDiv.textContent = "Current score is User:" + userScore + " Comp:" + compScore;
    }
    if(roundCount == 6){
        finalScore(userScore, compScore);
    }
}