import { getComputerChoice, determineWinner } from './game.js';
import { createGameUI, updateResult } from './ui.js';

function handleClick(event) {
    if (event.target.tagName === 'BUTTON') {
        const playerChoice = event.target.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        updateResult(`Computer chose ${computerChoice}. ${result}`);
    }
}

// Initialize the game
document.querySelector('#app').innerHTML = createGameUI();
document.querySelector('.buttons').addEventListener('click', handleClick);

