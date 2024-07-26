document.addEventListener('DOMContentLoaded', () => {
    const monkey = document.getElementById('monkey');
    const scoreBoard = document.getElementById('score');
    let score = 0;

    function moveMonkey() {
        const gameContainer = document.querySelector('.game-container');
        const containerWidth = gameContainer.clientWidth;
        const containerHeight = gameContainer.clientHeight;
        const monkeyWidth = monkey.clientWidth;
        const monkeyHeight = monkey.clientHeight;

        const randomX = Math.floor(Math.random() * (containerWidth - monkeyWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - monkeyHeight));

        monkey.style.left = `${randomX}px`;
        monkey.style.top = `${randomY}px`;
    }

    function increaseScore() {
        score += 1;
        scoreBoard.textContent = score;
    }

    monkey.addEventListener('click', () => {
        increaseScore();
        moveMonkey();
    });

    setInterval(moveMonkey, 1000);
});
