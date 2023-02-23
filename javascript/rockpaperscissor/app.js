const WIN = 1
const TIE = 0
const LOSE = -1

// Keep Track of Player Score
let PLAYERSCORE = 0;
let CPUSCORE = 0;

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

function tallyScore(result) {
    if (result === WIN) {
        PLAYERSCORE += 1;
    }
    if (result === LOSE) {
        CPUSCORE += 1;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = cleanString(playerSelection);

    // Pre-determined results via a simple dictionary (fast and no conditionals needed)
    let resultList = {
        'Rock': {
            'Scissor': ['You Win! Rock beats Scissor', WIN],
            'Paper': ['You Lose! Scissor beats Rock', LOSE],
            'Rock': ['You Tie! You both choose Rock', TIE]
        },
        'Paper': {
            'Rock': ['You Win! Paper beats Rock', WIN],
            'Scissor': ['You Lose! Scissor beats Paper', LOSE],
            'Paper': ['You Tie! You both choose Paper', TIE]
        },
        'Scissor': {
            'Paper': ['You Win! Scissor beats Paper', WIN],
            'Rock': ['You Lose! Rock beats Scissor', LOSE],
            'Scissor': ['You Tie! You both choose Scissor', TIE]
        }
    }
    
    let result = resultList[playerSelection][computerSelection];
    tallyScore(result[1])
    return result[0]
  }

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        let playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissor'");
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
     }
     alert("Player score is " + PLAYERSCORE + " and Computer score is " + CPUSCORE + ".  \nPlease reload browser to try again.");
}

game();   