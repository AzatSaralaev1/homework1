// Homework 1
const gmailInput = document.querySelector ('#gmail_input')
const gmailButton = document.querySelector ('#gmail_button')
const gmailSpan = document.querySelector ('#gmail_result')

const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

gmailButton.addEventListener ('click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    } else{
        gmailSpan.innerHTML = 'Not OK'
        gmailSpan.style.color = 'red'
    }
})


// Homework 1 part 2
document.addEventListener('DOMContentLoaded', () => {
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');
    let currentPosition = 0;
    const moveBlock = () => {
        const maxPosition = parentBlock.offsetWidth - childBlock.offsetWidth;
        const move = () => {
            if (currentPosition < maxPosition) {
                currentPosition += 5;
                childBlock.style.left = currentPosition + 'px';
                setTimeout(move, 10);
            }
        };
        move();
    };
    moveBlock();
});


// Homework 2
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutesS');
const secondsDisplay = document.getElementById('secondsS');
const millisecondsDisplay = document.getElementById('ml-secondsS');
let timerInterval, minutes = 0, seconds = 0, milliseconds = 0;
function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}
startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }
            updateDisplay();
        }, 10);
    }
});
stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = undefined;
});
resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = undefined;
    minutes = seconds = milliseconds = 0;
    updateDisplay();
});
updateDisplay();

