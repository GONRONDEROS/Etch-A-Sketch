document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);
    console.log('hello');
});

function createBoard(size){
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalOfDivs = size * size; 
    for (let i = 0; i< totalOfDivs; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'red';
        board.insertAdjacentElement('beforeend', div);
    };
};


