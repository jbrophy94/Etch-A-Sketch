//Refactor this to use bubbling instead of a for loop to add event listeners.

"use strict";

const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear-btn");
const customBtn = document.querySelector(".customize-btn");

//Function to generate dimension x dimension grid
function generateGrid(dimension) {
  //Lay out specified rows
  for (let i = 1; i <= dimension; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");

    gridContainer.appendChild(newRow);

    //Lay out specified columns
    for (let i = 1; i <= dimension; i++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");

      newRow.appendChild(newSquare);
    }
  }
}

//Call generateGrid with 16x16 to start
generateGrid(16);
