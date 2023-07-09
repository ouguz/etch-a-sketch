
const container = document.querySelector('.container');
for (let i = 0; i < 16*16; i++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    square.style.height = `${100/16}%`;
    square.style.width = `${100/16}%`;
    // square.style.border = "1px solid black";
    container.appendChild(square);
};

const slider = document.querySelector('#myRange');
const sliderIndicator = document.querySelector('#demo');
sliderIndicator.textContent = '16 x 16';
slider.addEventListener('change', () =>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    let a = slider.value;
    sliderIndicator.textContent = `${slider.value} x ${slider.value}`;
    for (let i = 0; i < a*a; i++) {
        let square = document.createElement('div');
        square.style.height = `${100/a}%`;
        square.style.width = `${100/a}%`;
        // square.style.border = "1px solid black";
        container.appendChild(square);
    };
});

container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = `royalblue`;
});

const black = document.querySelector('#black');
black.addEventListener('click', blackColor);
function blackColor () {
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
};

const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('click', pickYourColor);
function pickYourColor () {
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = colorPicker.value;
});
};

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseIt);
function eraseIt () {
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'white';
    });
};

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    let allChildren = container.children;
    for (child of allChildren) {
        child.style.backgroundColor = 'white';
    };
});


const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', randomColor);
    
function randomColor () {
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    });
};
    
function randomNumber () {
    let randomize = Math.floor(Math.random() * 256);
    return randomize
};