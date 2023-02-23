function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";               
    }
}

function cleanString(str) {
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
    playerSelection = cleanString(playerSelection);

    // Pre-determined results via a simple dictionary (fast and no conditionals needed)
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
        let playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissor'");
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
     }

     alert("Please reload browser to try again");
}

game();   