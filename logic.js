// console.log(guess);
let outputBox = document.querySelector('.output')

let button = document.querySelector('#Submit')
button.addEventListener('click', () => {
    // console.log(userinput.value);
    let userinput = document.querySelector('#input');

    let guess = Math.floor(Math.random() * 100) + 1;

    checkLogic(userinput,guess);


})


function checkLogic(input , random){
    
    const p = document.createElement('p')
    p.classList.add('dilogBox')

    outputBox.appendChild(p)
}