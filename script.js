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

// Function -> grid functions
function grid(sliderValue) {

    // create dynamically grid
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        const div = document.createElement('div');
        div.style.opacity = 0.1;
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

    grid(newSize);
    colorGrid();

    if (!gridContainer.classList.contains('active')) {
        gridContainer.classList.add("active");
        gridCheck.checked = true;
    }
}


// Event Listeners ---------------------------------------------

// Event listener -> disable context menu when right-mouse clicked
gridContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Event listener -> avoid dragging the grid container
gridContainer.addEventListener('dragstart', (e) => e.preventDefault());

// Event listener -> changing color
colorPicker.addEventListener("input", () => {
    colorGrid();
});

// Event listener -> color ready when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    colorGrid();
});

// Event listener -> slider
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


grid(sliderValue);

// COLOR ---------------------------------------------

// Function -> Grid color
function colorGrid() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        // Input-color
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colorPicker.value;
        });

        // Random color
        rainbowBtn.addEventListener("click", () => {
            square.addEventListener('mouseover', (e) => {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        });

        // Progressive darkening effect
        square.addEventListener('mouseover', (e) => {
            if (parseFloat(square.style.opacity) < 1) {
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            }
        });

        // Clear 
        clearBtn.addEventListener("click", () => {
            square.style.backgroundColor = '';
            square.style.opacity = 0.1;
        });
    });
};



// TODO
/* Being able to paint while holding left mouse button (mousedown + mouseover)
Being able to erase color when right clicking */

/* When removing the grid, it needs to stay that way when changing the size of the grid */

/* Need to change the code in order to optimize - too slow when changing the grid size several times- probably the loop and too many functions*/

