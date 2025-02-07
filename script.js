'use strict';

const gridContainer = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const gridCheck = document.querySelector('#toggle-grid-check');
const gridSize = document.querySelector('#grid-size');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#btn--rainbow');
const clearBtn = document.querySelector('#btn--reset');

let sliderValue = slider.value;


// GRID ---------------------------------------------

// Function -> Create grid
function generateGrid() {

    for (let i = 0; i < sliderValue * sliderValue; i++) {
        const div = document.createElement('div');
        div.classList.add('square', 'square-outline');
        div.style.setProperty('--number-square', sliderValue);
        gridContainer.appendChild(div);

        gridCheck.addEventListener('click', () => {
            if (!gridCheck.checked) {
                div.classList.remove("square-outline");
                gridContainer.classList.remove("active");
            } else {
                div.classList.add("square-outline");
                gridContainer.classList.add("active");
            }
        });
    }
}

// Function -> changing grid size and loading color
function changeGridSize() {
    const newSize = slider.value;
    gridContainer.innerHTML = '';
    gridSize.textContent = `${newSize}`;
    generateGrid(newSize);
    colorGrid();

    if (!gridContainer.classList.contains('active')) {
        gridContainer.classList.add("active");
        gridCheck.checked = true;
    }
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
gridContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});


generateGrid(sliderValue);


// COLOR ---------------------------------------------

// Function -> Grid color
function colorGrid() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            // e.preventDefault();
            square.style.backgroundColor = colorPicker.value;
        });
    })
};

// Function -> random color
function randomColors() {
    for (let i = 0; i < sliderValue * sliderValue; i++) {

        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('mouseover', (e) => {
                // e.preventDefault();
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            });
        })
    }
}

// Event listener -> main color (black) when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    colorGrid();
});

// Event listener -> changing color
colorPicker.addEventListener("change", () => {
    colorGrid();
});

// Event listener -> rainbow color
rainbowBtn.addEventListener("click", () => {
    randomColors(sliderValue);
});




// TODO
// Being able to paint while holding left mouse button (mousedown + mouseover)
// Being able to erase color when right clicking
// When removing the grid, it needs to stay that way when changing the size of the grid




// https://spottedmonkey.github.io/etch-a-sketch-odin/images/rainbow-eraser.png
