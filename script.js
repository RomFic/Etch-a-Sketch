'use strict';

const grid = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const showGrid = document.querySelector('#remove-grid-check');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#reset');

const sliderValue = slider.value;

// Function -> Create grid
function generateGrid(sliderValue) {
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
        div.style.setProperty('--number-square', sliderValue);
    }
}

generateGrid(sliderValue);

// Event listener -> changing grid size
slider.addEventListener('input', () => {
    const newSize = slider.value;
    grid.innerHTML = '';
    generateGrid(newSize);
});

// Function - Grid color
function colorGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            square.style.backgroundColor = colorPicker.value;
        })
    })
};

// Event listener -> main color (black) when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    colorGrid(squares);
});

// Event listener -> changing color
colorPicker.addEventListener("change", () => {
    const squares = document.querySelectorAll('.square');
    colorGrid(squares);
});


// slider.addEventListener("input", () => {
//     document.querySelector('.container-grid').style.height = slider.value + 'px';
// });

// div2.style.cssText = 'border: black solid 1px; background-color: pink; height: 200px';
