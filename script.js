'use strict';

const grid = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const showGrid = document.querySelector('#remove-grid-check');
const gridSize = document.querySelector('#grid-size');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#reset');

const sliderValue = slider.value;


// GRID ---------------------------------------------

// Function -> Create grid
function generateGrid(sliderValue) {
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        div.style.setProperty('--number-square', sliderValue);
    }
}

// Function -> changing grid size and loading color
function changeGridSize() {
    const newSize = slider.value;
    grid.innerHTML = '';
    generateGrid(newSize);
    gridSize.textContent = `${newSize}`;
    colorGrid();
}

// Event listener -> clicking on slider
slider.addEventListener('input', () => {
    changeGridSize();
});

// Event listener -> using wheel of mouse
slider.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) { // scroll up
        this.value = parseInt(this.value) + 3;
        changeGridSize();
    } else { // scroll down
        if (parseInt(this.value) > 0) {
            this.value = parseInt(this.value) - 1;
            changeGridSize();
        }
    }
    e.preventDefault(); // prevent the page from scrolling
});

// Event listener -> disable context menu when right-mouse clicked
grid.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

generateGrid(sliderValue);


// COLOR ---------------------------------------------

// Function -> Grid color
function colorGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mousedown', (e) => {
            square.style.backgroundColor = colorPicker.value;
            if (e.button === 2) square.style.backgroundColor = '';

        })
    })
};

// Event listener -> main color (black) when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    colorGrid();
});

// Event listener -> changing color
colorPicker.addEventListener("change", () => {
    colorGrid();
});


// slider.addEventListener("input", () => {
//     document.querySelector('.container-grid').style.height = slider.value + 'px';
// });

// div2.style.cssText = 'border: black solid 1px; background-color: pink; height: 200px';


// TODO