console.log("遊びましょう！");

// Choices
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function computerPlay() // Returns Computer Choice
{
    const MIN = 1; // min random integer range
    const MAX = 10; // max random integer range

    let randomPicker = Math.floor(Math.random() * (MAX - MIN)) + MIN; // Gives random integer between 1 and 9 (both included)

    if(randomPicker >= 1 && randomPicker < 4)
    {
        return(ROCK);
    } 
    else if(randomPicker >= 4 && randomPicker < 7)
    {
        return(PAPER);
    }
    else
    {
        return(SCISSORS);
    }
    
}

function playRound(playerSelection, computerSelection) // Play one round
{
    let score; // Array to store scores [0: Player, 1: Computer]

    // Game logic
    if (playerSelection == computerSelection) // if (player = computer)
    {
        console.log(`Issa Draw\n You: ${playerSelection}\t Computer: ${computerSelection}`); //      say "Issa draw"
        score = [1,1]; // return [1,1]
    } 
    else if ((playerSelection == ROCK && computerSelection == SCISSORS) 
            || (playerSelection == PAPER && computerSelection == ROCK) 
            || (playerSelection == SCISSORS && computerSelection == PAPER)) // else if ((player = ROCK and computer = scissors) or (player = PAPER and computer = ROCK) or (player = SCISSSORS and computer = PAPER))
    {
        console.log(`You Win!!!!\n You: ${playerSelection}\t Computer: ${computerSelection}`); // say "You Win!"
        score = [1,0]; // return [1,0]
    }
    else // else
    {
        console.log(`L\n You: ${playerSelection}\t Computer: ${computerSelection}`); // say "You Lose!"
        score = [0,1]; // return [0,1]
    }

    return score;
}

function game() // Run game, play 5 rounds
{

}
let playerSelection = prompt("Choose yout weapon");
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);