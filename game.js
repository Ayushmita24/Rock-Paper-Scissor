export const choices = ['rock', 'paper', 'scissors'];

export function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

export function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    
    return 'Computer wins!';
}

