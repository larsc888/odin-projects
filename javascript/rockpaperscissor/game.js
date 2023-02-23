const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor";


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            return ROCK;
            break;
        case 2:
            return PAPER;
            break;
        case 3:
            return SCISSOR;
            break;                        
    }
}

function cleanPlayerSelection(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[i].toUpperCase()
        }
        else {
            result += str[i].toLowerCase()
        }
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = cleanPlayerSelection(playerSelection);

    // Make a result calcuation dictionary with rock, paper, scissor (will match player choice)
    let results = {
        'Rock': {
            'Scissor': 'You Win! Rock beats Scissor',
            'Paper': 'You Lose! Scissor beats Rock',
            'Rock': 'You Tie! You both choose Rock'
        },
        'Paper': {
            'Rock': 'You Win! Paper beats Rock',
            'Scissor': 'You Lose! Scissor beats Paper',
            'Paper': 'You Tie! You both choose Paper'
        },
        'Scissor': {
            'Paper': 'You Win! Scissor beats Paper',
            'Rock': 'You Lose! Rock beats Scissor',
            'Scissor': 'You Tie! You both choose Scissor'
        }
    }
    
    return results[playerSelection][computerSelection];
  }

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        const playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissor'");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
     }

     alert("Please reload browser to try again");
}

game();



   