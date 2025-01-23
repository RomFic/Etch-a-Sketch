'use strict';

const grid = document.querySelector('.container-grid');
const slider = document.querySelector('#slider');
const removeGrid = document.querySelector('#remove-grid-check');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const randomColorBtn = document.querySelector('#reset');

// let gridSizeX = 4;
// let gridSizeY = 4;

const n = 8;

let mouseDown = false;

function mkGrid() {
    for (let i = 0; i < n; i++) {
        for (let x = 0; x < n; x++) {
            let div = document.createElement('div');
            div.style.color = "blue";
            div.style.height = "20px";
            div.style.width = "20px";
            div.style.border = "solid 2px";
            grid.appendChild(div);
        }
    }
}

mkGrid();
