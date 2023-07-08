
const container = document.querySelector('.container');
let a = prompt('hwat', 4);

for (let i = 0; i < a*a; i++) {
    let square = document.createElement('div');
    square.style.height = `${100/a}%`;
    square.style.width = `${100/a}%`;
    square.style.border = "1px solid black";
    container.appendChild(square);
};

container.addEventListener('mouseover', (event) => {
    event.target.setAttribute('class', 'makeItGreen');
});

let children = container.children;
console.log(children);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    square.removeAttribute('class');
});


