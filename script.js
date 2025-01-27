'use strict';

const grid = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const removeGrid = document.querySelector('#remove-grid-check');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const randomColorBtn = document.querySelector('#reset');


// let div = document.createElement('div');
// div.style.color = "black";
// div.style.height = "20px";
// div.style.width = "20px";
// div.style.border = "solid 1px";
// grid.appendChild(div);

// for (let i = 0; i < 16; i++) {
//     let div = document.createElement('div');
//     div.style.display = "flex";
//     div.style.flexDirection = "row";
//     div.style.alignItems = "center";
//     div.style.color = "black";
//     div.style.height = "20px";
//     div.style.width = "20px";
//     div.style.border = "solid 1px";
//     grid.appendChild(div);
// }

// function mkGrid() {
//     for (let i = 0; i < 16; i++) {
//         for (let x = 0; x < 16; x++) {
//             let div = document.createElement('div');
//             div.style.cssText = ' flex-basis: 37.5px; height: 37.5px; background-color: white; border: solid 1px';
//             grid.appendChild(div);
//         }
//     }
// }

// mkGrid();



const size = 16; // Initial grid size

function createSquares(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}

createSquares(size);

// Event listener for changing grid size
document.getElementById('slider').addEventListener('input', () => {
    const newSize = slider.value;
    grid.innerHTML = ''
    createSquares(newSize);

});



// colorPicker.addEventListener("change", () => console.log(colorPicker.value));

colorPicker.addEventListener("input", () => {
    document.querySelector('.square').style.backgroundColor = colorPicker.value;
});

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