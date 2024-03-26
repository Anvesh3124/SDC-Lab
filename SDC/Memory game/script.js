const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];
let flippedCards = [];
let matchedCards = [];
let isBoardLocked = false;
let score = 0;

const gameBoard = document.getElementById('game-board');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.textContent = value;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
}

function startGame() {
    gameBoard.innerHTML = '';
    flippedCards = [];
    matchedCards = [];
    isBoardLocked = false;
    score = 0;
    scoreDisplay.textContent = score;
    message.textContent = '';

    shuffle(cardValues);

    cardValues.forEach(value => {
        createCard(value);
    });
}

function flipCard() {
    if (isBoardLocked || this.classList.contains('flipped') || flippedCards.length === 2) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
            matchedCards.push(...flippedCards);
            flippedCards = [];
            score += 10;
            scoreDisplay.textContent = score;

            if (matchedCards.length === cardValues.length) {
                message.textContent = 'Congratulations! You won!';
            }
        } else {
            isBoardLocked = true;
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
                flippedCards = [];
                isBoardLocked = false;
                score -= 5;
                if (score < 0) score = 0;
                scoreDisplay.textContent = score;
            }, 1000);
        }
    }
}
