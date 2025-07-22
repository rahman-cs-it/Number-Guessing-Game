let guess = Math.floor(Math.random() * 100) + 1;
console.log(`guess1 ${guess}`);
let outputBox = document.querySelector('.output')

let para = document.querySelector('.output p')

let resetButton = document.querySelector('#reset')


let userElement = document.querySelector('#input');

let button = document.querySelector('#Submit')
button.addEventListener('click', () => {
    let inputValue = userElement.value.trim(); // remove extra spaces

    // ✅ Check if input is empty
    if (inputValue === '') {
        para.innerText = "❗ Please enter a number before submitting.";
        return;
    }

    // ✅ Optional: check if value is a real number
    if (isNaN(inputValue)) {
        para.innerText = "⚠️ That’s not a valid number. Try again.";
        return;
    }

    // ✅ Convert to number and proceed
    checkLogic(Number(inputValue), guess);
});



function checkLogic(inputValue, random) {
    // console.log('check 3');
    // console.log(para);

    // console.log(`inputvalue = ${inputValue}`);
    // console.log(`random = ${random}`);

    if (inputValue === random) {
        para.innerText = `🎉 Congratulations! You guessed it right. The number is ${random}`;
    } else if (inputValue < random) {
        para.innerText = `📈 You're too low. Try guessing higher.`;
    } else {
        para.innerText = `📉 You're too high. Try guessing lower.`;
    }

}

resetButton.addEventListener('click', () => {
    userElement.value = '';
    para.innerText = '';
    guess = Math.floor(Math.random() * 100) + 1;
    console.log(`guess2 ${guess}`);


})