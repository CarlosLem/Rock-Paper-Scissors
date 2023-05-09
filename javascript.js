let computerChoice;
let playerSelection = prompt("Please Enter Rock, Paper or Scissors").toLowerCase();


console.log(playerSelection);
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice === 0){
        computerChoice = "Rock"
    }
    else if (choice === 1){
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }

    console.log(computerChoice)
}

getComputerChoice();

function getPlayerSelection(){

    if (answer === 'scissors'){
        if (computerChoice === 'Paper'){
            console.log("You Win, Scissors beats Paper")
        }
        if (computerChoice === 'Scissors'){
            console.log("It's a Tie!")
        }
        else {
            console.log("You Lose, Rock beats Paper")
        }
    }
    else if (answer === 'paper'){
        if (computerChoice === 'Paper'){
            console.log("It's a Tie!")
        }
        else if (computerChoice === "Scissors"){
            console.log("You Lose, Scissors beats Paper")
        }
        else {
            console.log("You Win, Paper beats Rock")
        }
    }
    else if (answer === 'rock') {
        if (computerChoice === "Paper"){
            console.log("You Lose, Paper beats Rock")
        }
        else if (computerChoice === "Scissors"){
            console.log("You Win, Rock beats Paper")
        }
        else{
            console.log("It's a Tie!")
        }
    }
    else {
        console.log("Incorrect Value.")
    }
}

getPlayerSelection();

