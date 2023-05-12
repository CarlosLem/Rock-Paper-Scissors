let computerChoice;
let userInput;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice === 0){
        computerChoice = "rock"
    }
    else if (choice === 1){
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Please Enter Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == 'scissors') ||
        (playerSelection == "paper" && computerSelection == 'rock') ||
        (playerSelection == "scissors" && computerSelection == 'paper')
    ){
        return "Player";
    }
    else {
        return "Computer"
    }
}



function game(){
    for (let i = 1; i<=5; i++){

        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playerSelection + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

}

function scoreKeeer(){
    
}

game();
