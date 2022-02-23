// Method for creating the etch board.
const createBoard = () => {
    for (let i = 0; i < 16; i++) {
        let etchPixelRow = document.createElement('div');
        etchPixelRow.classList.add('etch-pixel-row')
        for (let j = 0; j < 16; j++) {
            let etchPixel = document.createElement('div');
            etchPixel.classList.add('etch-pixel');
            etchPixel.addEventListener('mouseover', () => changeColor(etchPixel));
            etchPixelRow.appendChild(etchPixel);
        }
        document.getElementsByTagName('main')[0].appendChild(etchPixelRow);
    }
}

// Method for changing background color of pixels.
const changeColor = (etchPixel) => {
    etchPixel.style.background = "black";
}

// Reset board.
const reset = () => {
    let board = document.getElementsByTagName('main')[0];

    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    createBoard();
}

window.onload = () => {
    createBoard();
}