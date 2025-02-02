'use strict';

const gridContainer = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const gridCheck = document.querySelector('#toggle-grid-check');
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
        div.classList.add('square', 'square-outline');
        gridContainer.appendChild(div);
        div.style.setProperty('--number-square', sliderValue);

        gridCheck.addEventListener('click', () => {
            !gridCheck.checked ? div.classList.remove("square-outline") : div.classList.add("square-outline");
        })

    }

}

// Function -> changing grid size and loading color
function changeGridSize() {
    const newSize = slider.value;
    gridContainer.innerHTML = '';
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
// Being able to paint while holding left mouse button (mousedown + mouseover)
// Being able to erase color when right clicking




// https://spottedmonkey.github.io/etch-a-sketch-odin/images/rainbow-eraser.png
