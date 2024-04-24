

let playerPoint=0;
let computerPoint=0;

const playerMessage = document.querySelector("#playerPoint");
const computerMessage = document.querySelector("#computerPoint");
const roundMessage = document.querySelector("#roundMessage");

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click",() =>handleClick("Rock"));

paperButton.addEventListener("click",()=>handleClick("Paper"));

scissorsButton.addEventListener("click",() =>handleClick("Scissors"));

function handleClick(playerChoice){



    let computerChoice = getComputerChoice();

    let roundWinner=playRound(playerChoice, computerChoice);
    
    updateRoundMessage(roundWinner,playerChoice,computerChoice);

    if(isGameOver()){
        alert(finalMessage());
        resetGame();

    }                                                                                                                                                                               
    

}

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

function playRound(playerChoice,computerChoice){

    if(
        (playerChoice.toLowerCase()=="rock" && computerChoice.toLowerCase()=="scissors")||
        (playerChoice.toLowerCase()=="paper" && computerChoice.toLowerCase()=="rock")||
        (playerChoice.toLowerCase()=="scissors" && computerChoice.toLowerCase()=="paper")

    ){
        playerPoint++;
        return "player";
    }
    else if(playerChoice.toLowerCase()== computerChoice.toLowerCase()){

        return "tie";
    }

    else{
        computerPoint++;
        return "computer";

    }

    


}

function updateRoundMessage(roundWinner,playerChoice,computerChoice){

    let message;
    let playerScore = `Player score: ${playerPoint}`;
    let computerScore = `Computer score: ${computerPoint}`;

    if (roundWinner == "player"){
        message = `You win! ${playerChoice} beats ${computerChoice}`
        
    }else if (roundWinner=="computer"){
        message = `You lose! ${computerChoice} beats ${playerChoice}`

    } else if(roundWinner=="tie"){
        message = `It is a tie.`

    }
    
    roundMessage.textContent= message;
    playerMessage.textContent= playerScore;
    computerMessage.textContent= computerScore;



}

function isGameOver(){


    if(playerPoint == 5 || computerPoint == 5){

        return true;
    }else{

        return false;
    }
}

function finalMessage(){
    let finalMessage;

    if(playerPoint==5){
        finalMessage= `Player win!`

    } else if(computerPoint==5){
        finalMessage= `Computer win!`

    }

    return finalMessage;

}

function resetGame(){
    playerPoint=0;
    computerPoint=0;

    let message='';
    let playerScore = `Player score: ${playerPoint}`;
    let computerScore = `Computer score: ${computerPoint}`;

    roundMessage.textContent= message;
    playerMessage.textContent= playerScore;
    computerMessage.textContent= computerScore;


}





