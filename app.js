let color = 'black'

function createBoard(size) {
    let gridbox = document.querySelector('.gridbox');
    gridbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //resets board everytime new board is created
    let box = gridbox.querySelectorAll('div');
    box.forEach((box) => box.remove());
    
    for (let i=0; i<(size*size); i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', colorBox)
        grid.style.backgroundColor = 'white';
        gridbox.insertAdjacentElement('beforeend', grid);
    }
}

createBoard(16);

function changeSize(input) {
    if (input >= 1 && input <= 100) {
    createBoard(input);
    }
    else {
        console.log('error!');
    };
}

function colorBox() {
    if (color == 'random') {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    } else {this.style.backgroundColor = color};
}

function changeColor(input) {
    color = input;
}

function resetBoard() {
    let gridbox = document.querySelector('.gridbox');
    let box = gridbox.querySelectorAll('div');
    box.forEach((box) => box.style.backgroundColor = 'white');
}