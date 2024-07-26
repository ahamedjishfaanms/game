document.addEventListener("DOMContentLoaded", () => {
    const paddle = document.getElementById("paddle");
    const ball = document.getElementById("ball");
    const gameContainer = document.querySelector(".game-container");
    
    let paddleLeft = gameContainer.offsetWidth / 2 - paddle.offsetWidth / 2;
    let ballTop = 0;
    let ballLeft = gameContainer.offsetWidth / 2 - ball.offsetWidth / 2;
    let ballSpeedY = 2;
    let ballSpeedX = 2;

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            paddleLeft -= 20;
            if (paddleLeft < 0) paddleLeft = 0;
        } else if (event.key === "ArrowRight") {
            paddleLeft += 20;
            if (paddleLeft > gameContainer.offsetWidth - paddle.offsetWidth) {
                paddleLeft = gameContainer.offsetWidth - paddle.offsetWidth;
            }
        }
        paddle.style.left = `${paddleLeft}px`;
    });

    function moveBall() {
        ballTop += ballSpeedY;
        ballLeft += ballSpeedX;

        if (ballLeft <= 0 || ballLeft >= gameContainer.offsetWidth - ball.offsetWidth) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballTop <= 0) {
            ballSpeedY = -ballSpeedY;
        }

        if (ballTop + ball.offsetHeight >= paddle.offsetTop &&
            ballLeft + ball.offsetWidth >= paddleLeft &&
            ballLeft <= paddleLeft + paddle.offsetWidth) {
            ballSpeedY = -ballSpeedY;
        }

        if (ballTop > gameContainer.offsetHeight) {
            alert("Game Over!");
            ballTop = 0;
            ballLeft = gameContainer.offsetWidth / 2 - ball.offsetWidth / 2;
        }

        ball.style.top = `${ballTop}px`;
        ball.style.left = `${ballLeft}px`;

        requestAnimationFrame(moveBall);
    }

    moveBall();
});
