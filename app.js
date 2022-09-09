document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
});

let color = 'black';
let click = false;

function createBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalOfDivs = size * size; 
    for (let i = 0; i< totalOfDivs; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", squareColor);        
        board.insertAdjacentElement('beforeend', square);
    };
};

function getSize(input){
    if(input >= 2 && input <= 100){
        createBoard(input);
    } else {
        console.log("Debes elegir un tamano entre 2 y 100");
    };
};

function squareColor(){
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        };
    };
};

function changeColor(choice){
    color = choice;
};

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}; 

document.querySelector("body").addEventListener("click", allow);

function allow(e){
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if(click){
        document.querySelector('.mode').textContent = 'Mode: Coloring';
        } else {
            document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        };
    };
}; 


