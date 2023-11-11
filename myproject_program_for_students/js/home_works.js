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