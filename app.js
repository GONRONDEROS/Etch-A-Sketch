document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
});

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
    this.style.backgroundColor = "black"
};
