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
        console.log(`Issa Draw\nYou: ${playerSelection}\t Computer: ${computerSelection}`); // say "Issa draw"
        score = [1,1]; // return [1,1]
    } 
    else if ((playerSelection == ROCK && computerSelection == SCISSORS) 
            || (playerSelection == PAPER && computerSelection == ROCK) 
            || (playerSelection == SCISSORS && computerSelection == PAPER)) // else if ((player = ROCK and computer = scissors) or (player = PAPER and computer = ROCK) or (player = SCISSSORS and computer = PAPER))
    {
        console.log(`You Win!!!!\nYou: ${playerSelection}\t Computer: ${computerSelection}`); // say "You Win!"
        score = [1,0]; // return [1,0]
    }
    else // else
    {
        console.log(`L\nYou: ${playerSelection}\t Computer: ${computerSelection}`); // say "You Lose!"
        score = [0,1]; // return [0,1]
    }

    return score;
}

function game() // Run game, play 5 rounds
{
    let playerInput;
    let computerInput;
    let scorePlayer = 0, scoreComputer = 0; // Store overall score [0: Player, 1: Computer]
    let updateScore; // Array to store to ber added score [0: Player, 1: Computer]
    
    // Game loop
    for (let round = 1; round < 6; round++) // Loop 5 times
    {
        console.log(`:::::::::  Round ${round}  ::::::::`)
        computerInput = computerPlay(); // Ask Computer Input
        playerInput = (prompt(`Round ${round}\nChoose: Rock, Paper, Scissors | Not case sensitive!`)).toUpperCase();

        while(playerInput != ROCK && playerInput != PAPER && playerInput != SCISSORS)// Ask Player Input, if input not Rock Paper or Scissors, ask again
        {
            playerInput = (prompt(`Round ${round}\nChoose: Rock, Paper, Scissors | Not case sensitive!`)).toUpperCase();
        }
        
        updateScore = playRound(playerInput, computerInput); // determine who won
        
        // Update Score
        scorePlayer += updateScore[0]; 
        scoreComputer += updateScore[1];

        console.log(`Current Score\nYou: ${scorePlayer} Computer: ${scoreComputer}`);
    }

    console.log(':::::::  Final Verdict  ::::::');
    if (scorePlayer > scoreComputer)
        console.log("YOU WON THE MATCH!!");
    else if (scorePlayer < scoreComputer)
        console.log("MATCH LLLLLLLLLLLLL");
    else
        console.log("DRAAAAAAAAWWW LLLLLLLLL");
    
    
}

game();