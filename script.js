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



// colorPicker.addEventListener("change", () => console.log(colorPicker.value));

// slider.addEventListener("input", () => {
//     document.querySelector('.container-grid').style.height = slider.value + 'px';
// });




// Exercise
// const div2 = document.createElement('div');
// // div2.style.cssText = 'border: black solid 1px; background-color: pink;';
// div2.classList.add('newDiv');
// div2.style.cssText = 'border: black solid 1px; background-color: pink; height: 200px';
// document.querySelector('.main').appendChild(div2);

// const text3 = document.createElement('h1');
// text3.textContent = "I’m in a div";
// div2.appendChild(text3);

// const text4 = document.createElement('p');
// text4.textContent = "ME TOO!";
// div2.appendChild(text4);

































// let gridSizeX = 4;
// let gridSizeY = 4;

// const n = 8;

// let mouseDown = false;

// function mkGrid() {
//     for (let i = 0; i < n; i++) {
//         for (let x = 0; x < n; x++) {
//             let div = document.createElement('div');
//             div.style.color = "black";
//             div.style.height = "20px";
//             div.style.width = "20px";
//             div.style.border = "solid 1px";
//             grid.appendChild(div);
//         }
//     }
// }

// mkGrid();

// function createGrid() {
//     for (let i = 0; i < (slider.value * slider.value); i++) {
//         const div = document.createElement('div');
//         const boxSize = 250 / slider.value; // creates the dynamic squares
//         div.classList.add('square');
//         div.style.width = boxSize + 'px';
//         div.style.height = boxSize + 'px';
//         grid.appendChild(div);
//     }
// }

// slider.addEventListener('change', function () {
//     let boxes = document.querySelectorAll('.grid');
//     boxes.forEach(box => {
//         box.remove();//removes old grid
//     });
//     createGrid() //makes new grid after reset
//     console.log(slider.value);

// })