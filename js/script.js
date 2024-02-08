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

//function to clear the grid
function clearGrid() {
  for (row of document.querySelectorAll("row")) {
    row.remove();
  }
}

//Function to toggle on magenta-class
function toggleMagenta(target) {
  target.classList.toggle("magenta-class");
}

//add event listener to grid. Use event propagation/delegation
gridContainer.addEventListener("mouseover", function (e) {
  const target = e.target;
  if ([...target.classList].includes("square")) toggleMagenta(target);
});

//add event listener to clear button:
clearBtn.addEventListener("click", clearGrid);

//Call generateGrid with 16x16 to start before any buttons are clicked.
generateGrid(16);
