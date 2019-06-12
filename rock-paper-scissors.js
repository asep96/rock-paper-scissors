function computerPlay(){
    let choiceArray = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[choice];
}

let computerSelection;
let userSelection;

function playRound(computerSelection, userSelection){
    let userPrompt = prompt("Make your selection: Rock, Paper, or Scissors");
    userSelection = userPrompt.toLocaleLowerCase();
    computerSelection = computerPlay();
    if(computerSelection == userSelection){
        result = "Both players made the same selection. We have a draw!" + 
        " Both players earn a point!";
        console.log(result);
        return "draw";
        }
    else if (computerSelection == "scissors" && userSelection == "rock"){
        result = "You win! Rock beats scissors!";
        console.log(result);
        return "win";
        }

    else if (computerSelection == "scissors" && userSelection == "paper"){
        result = "You lose! Scissors beats paper!";
        console.log(result);
        return "loss";
        }

    else if (computerSelection == "rock" && userSelection == "scissors"){ 
        result = "You lose! Rock beats scissors!";
        console.log(result);
        return "loss";
        }

    else if (computerSelection == "rock" && userSelection == "paper"){ 
        result = "You win! Paper beats rock!";
        console.log(result);
        return "win";
        }

    else if (computerSelection == "paper" && userSelection == "scissors"){ 
        result = "You win! Scissors beats paper!";
        console.log(result);
        return "win";
        }
    else if (computerSelection == "paper" && userSelection == "rock") {
        result = "You lose! Paper beats rock!";
        console.log(result);
        return "loss";
        }
    else {
        result = "Something went wrong with your submission. This round will be treated as a draw.";
        console.log(result);
        return "draw";
        }
}
    
function game(){
    let userScore = 0;
    let compScore = 0;
    for(i=1; i<6;i++){
        let currentRound = playRound();
        if (currentRound == "win"){
            userScore = userScore + 1;
        }
        else if(currentRound == "loss"){
            compScore = compScore + 1;
        }
        else if(currentRound == "draw"){
            userScore = userScore + 1;
            compScore = compScore + 1;
        }
        console.log("Current score is User: " + userScore + " Comp: " + compScore);
        console.log("Round: " + i);
    }

    if (userScore > compScore){
        return "You win by the score of " + userScore + "-" + compScore;
    }
    else if (userScore < compScore){
        return "The computer wins by the score of " + compScore + "-" + userScore;
    }
    else{
        return "The game ends in a draw by the score of " + compScore + "-" + userScore;
    }
}