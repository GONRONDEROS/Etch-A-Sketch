document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
});

function createBoard(size){
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalOfDivs = size * size; 
    for (let i = 0; i< totalOfDivs; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'red';
        board.insertAdjacentElement('beforeend', square);
    };
};

function getSize(input){
    createBoard(input);
}

