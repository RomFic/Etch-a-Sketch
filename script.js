'use strict';

const grid = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const removeGrid = document.querySelector('#remove-grid-check');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const clearBtn = document.querySelector('#reset');

const sliderValue = slider.value;

// Function -> Create grid
function generateGrid(sliderValue) {
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        grid.style.setProperty('--number', sliderValue);
    }
}

generateGrid(sliderValue);

// Event listener -> changing grid size
slider.addEventListener('input', () => {
    const newSize = slider.value;
    grid.innerHTML = '';
    generateGrid(newSize);
});

// Event listener -> changing color
colorPicker.addEventListener("change", () => {
    document.querySelector('.square').style.backgroundColor = colorPicker.value;
    console.log(colorPicker.value)
});


// slider.addEventListener("input", () => {
//     document.querySelector('.container-grid').style.height = slider.value + 'px';
// });

// div2.style.cssText = 'border: black solid 1px; background-color: pink; height: 200px';
