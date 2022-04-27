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
    console.log(randomPicker);

    if(1 <= randomPicker < 4)
    {

    } 
    else if(4 <= randomPicker < 7)
    {

    }
    else if(7 <= randomPicker < 10)
    {

    }
    
}

function playRound(playerSelection, computerSelection) // Play one round
{

}

function game() // Run game, play 5 rounds
{

}

computerPlay();
computerPlay();
computerPlay();