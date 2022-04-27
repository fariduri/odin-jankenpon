console.log("遊びましょう！");

function computerPlay() // Returns Computer Choice
{
    const min = 1; // min random integer range
    const max = 10; // max random integer range

    let randomPicker = Math.floor(Math.random() * (max - min)) + min; // Gives random integer between 1 and 9 (both included)
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
    return null;
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