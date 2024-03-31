
function getComputerChoice(){

    let computerChoice;
    let randomNumber=Math.floor(Math.random()*3)+1;

    if (randomNumber == 1){
        computerChoice="Rock";


    }else if(randomNumber == 2){
        computerChoice= "Paper";


    } else if(randomNumber == 3){

        computerChoice= "Scissors";
    }

    return computerChoice;

}

function playRound(playerSelection, computerSelection){

    let result;

    if (playerSelection.toLowerCase()== "rock"){

        if (computerSelection.toLowerCase() == "paper" ){

            result= "You lose! Paper beats Rock";
            return result;
        } else if(computerSelection.toLowerCase() == "scissors"){

            result= "You win! Rock beats Scissors";
            return result;
        } else {

            return "It is a tie."

        }
    }

    else if(playerSelection.toLowerCase()== "paper"){
        
        if (computerSelection.toLowerCase() == "scissors" ){

            result= "You lose! Scissors beats Paper";
            return result;
        } else if(computerSelection.toLowerCase() == "rock"){

            result= "You win! Paper beats Rock";
            return result;
        } else {

            return "It is a tie."

        }


    }

    else if(playerSelection.toLowerCase()== "scissors"){

        if (computerSelection.toLowerCase() == "rock" ){

            result= "You lose! Rock beats Scissors";
            return result;
        } else if(computerSelection.toLowerCase() == "paper"){

            result= "You win! Scissors beats Paper";
            return result;
        } else {

            return "It is a tie."

        }




    }




}

function playGame(){
    const playerSelection = window.prompt("Rock, Paper or Scissors?", "Rock");

    for (let i = 1; i <=5 ; i++){

        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
playGame();









