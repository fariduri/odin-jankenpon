const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const PLAYERWINS = "PLAYERWINS";
const DRAW = "DRAW";
const COMPUTERWINS = "COMPUTERWINS";

function getComputerChoice()
{
    let randNum = Math.random();

    switch (true) {
        case randNum < 0.33334:
            return ROCK;
        case randNum < 0.66667:
            return PAPER;
        default:
            return SCISSORS;
    }
}

function playRound(playerHand, computerHand)
{
    console.log(`player: ${playerHand} vs computer: ${computerHand}`);

    if ((playerHand === ROCK && computerHand === SCISSORS) || (playerHand === PAPER && computerHand === ROCK) || (playerHand === SCISSORS && computerHand === ROCK))
    {
        console.log(`You Win! ${playerHand} beats ${computerHand}`);
        return PLAYERWINS;
    }
    else if (playerHand === computerHand)
    {
        console.log(`Draw! ${playerHand} equals ${computerHand}`);
        return DRAW;
    }
    else 
    {
        console.log(`You Lose! ${computerHand} beats ${playerHand}`);
        return COMPUTERWINS;
    }
}

function game()
{
    let computerHand, playerHand, result;
    let playerScore = 0;
    let computerScore = 0;

    console.log("遊びましょう！");

    let round = 1;

    computerHand = getComputerChoice().toUpperCase();
    console.log(`::::: Round ${round} :::::`);

    do {
        playerHand = prompt(`::::: Round ${round} :::::\nChoose Your Weapon!\n 'ROCK', 'PAPER', 'SCISSORS'`).toUpperCase();
    } while (playerHand !== ROCK && playerHand !== PAPER && playerHand !== SCISSORS);

    result = playRound(playerHand, computerHand);

    switch(result)
    {
        case DRAW:
            playerScore++;
            computerScore++;
            break;
        case PLAYERWINS:
            playerScore++;
            break;
        case COMPUTERWINS:
            computerScore++;
            break;    
    }
    
    let whoWon = (playerScore>computerScore) ? "You Won!": (playerScore<computerScore) ? "You Lost!" : "It's a Draw!";
    let message = `${whoWon}\n\nFinal Score\nPlayer: ${playerScore} Computer: ${computerScore}`;
    alert(message);
}

game();
