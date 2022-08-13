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

function game(hand)
{
    function setScore() {
        playerScoreElm.setAttribute("data-key", playerScore);
        computerScoreElm.setAttribute("data-key", computerScore);
        playerScoreElm.textContent = playerScore;
        computerScoreElm.textContent = computerScore;
    }

    const computerHandElm = document.querySelector("#computer-hand");
    const playerHandElm = document.querySelector("#player-hand");
    const playerScoreElm = document.querySelector("#player-score");
    const computerScoreElm = document.querySelector("#computer-score");
    const gameInfoTextElm = document.querySelector("#game-info-text");
    const roundInfoTextElm = document.querySelector("#round-info-text"); 

    const computerHand = getComputerChoice().toUpperCase();
    const playerHand = hand;

    let playerScore = playerScoreElm.getAttribute("data-key");
    let computerScore = computerScoreElm.getAttribute("data-key");

    computerHandElm.textContent = computerHand;
    playerHandElm.textContent = playerHand;

    const result = playRound(playerHand, computerHand);

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

    setScore();

    const nextRound = parseInt(roundInfoTextElm.getAttribute("data-key"))+1;
    roundInfoTextElm.setAttribute("data-key", nextRound);
    roundInfoTextElm.textContent = `Round ${nextRound}`;

    let whoWon = (playerScore>computerScore) ? "You Won!": (playerScore<computerScore) ? "You Lost!" : "It's a Draw!";
    let message = `${whoWon}\n\nScore\nPlayer: ${playerScore} Computer: ${computerScore}`;
    gameInfoTextElm.textContent = message;
}

function getPlayerHand(e)
{
    hand = this.getAttribute('data-key');
    game(hand);
}

function setUpGame() {
    let hands = document.querySelectorAll(".hand");
    hands.forEach(hand => hand.addEventListener('click', getPlayerHand));
}

setUpGame();

