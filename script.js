
const container = document.querySelector('.container');
for (let i = 0; i < 16*16; i++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.style.height = `${100/16}%`;
    square.style.width = `${100/16}%`;
    square.style.border = "1px solid black";
    container.appendChild(square);
};
// let a = prompt('hwat', 4);

const newSize = document.querySelector('#newSize');
newSize.addEventListener('click', () =>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    let a = prompt('kk');
    for (let i = 0; i < a*a; i++) {
        let square = document.createElement('div');
        square.style.height = `${100/a}%`;
        square.style.width = `${100/a}%`;
        square.style.border = "1px solid black";
        container.appendChild(square);
    };
});



const green = document.querySelector('#green');
green.addEventListener('click', greenColor);
function greenColor () {
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'green';
});
};

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    let allChildren = container.children;
    for (child of allChildren) {
        // child.classList.remove('makeItGreen');
        // child.classList.remove('makeItBlack');
        // child.classList.remove('makeItRed');
        // child.classList.remove('makeItWhite');
        // child.classList.add =('makeItYellow');
        // container.style.backgroundColor = 'yellow';
        child.style.backgroundColor = 'white';
    };
});

// container.addEventListener('mouseover', (event) => {
//     event.target.classList.add('makeItWhite');
//     event.target.style.backgroundColor = 'white';
// });
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', randomColor);
    
function randomColor () {
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });
};

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
});

    

function randomNumber () {
    let randomize = Math.floor(Math.random() * 256);
    return randomize
};

const black = document.querySelector('#black');
black.addEventListener('click', blackColor);
function blackColor () {
    container.addEventListener('mouseover', (event) => {
        // event.target.setAttribute('class', 'makeItBlack');
        event.target.style.backgroundColor = 'black';
    });
};

