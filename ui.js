export function createGameUI() {
    return `
        <div class="game-container">
            <h1>Rock Paper Scissors</h1>
            <div class="buttons">
                <button data-choice="rock">🪨 Rock</button>
                <button data-choice="paper">📄 Paper</button>
                <button data-choice="scissors">✂️ Scissors</button>
            </div>
            <div id="result" class="result">Choose your move!</div>
        </div>
    `;
}

export function updateResult(message) {
    document.getElementById('result').textContent = message;
}

