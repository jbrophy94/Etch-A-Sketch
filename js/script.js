//Refactor this to use bubbling instead of a for loop to add event listeners.

"use strict";

const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear-btn");
const customBtn = document.querySelector(".customize-btn");

for (let i = 1; i <= 16; i++) {
  const newChild = document.createElement("div");
  newChild.classList.add("row");
  gridContainer.appendChild(newChild);
  for (let j = 1; j <= 16; j++) {
    const gridSquare = document.createElement("div");
    newChild.appendChild(gridSquare);

    gridSquare.classList.add("square");
  }
}

let squares = document.querySelectorAll(".square");

gridContainer.addEventListener("mouseover", function (e) {
  e.target.classList.toggle("magenta-class");
});

// for (let square of squares) {
//   square.addEventListener("mouseover", function (e) {
//     square.classList.toggle("magenta-class");
//     console.log(square.classList);
//   });
// }

function clearGrid() {
  for (let square of squares) {
    square.classList.remove("magenta-class");
  }
}

clearBtn.addEventListener("click", clearGrid);

function customizeGrid() {
  //remove the existing grid
  for (let row of document.querySelectorAll(".row")) {
    row.remove();
  }

  //get/validate user input
  let validWidth = false;
  let gridWidth;
  while (!validWidth) {
    gridWidth = parseInt(prompt("How many squares wide do you want it to be?"));
    if (typeof gridWidth === "number") validWidth = true;
  }

  let validHeight = false;
  let gridHeight;
  while (!validHeight) {
    gridHeight = parseInt(
      prompt("How many squares wide do you want it to be?")
    );
    if (typeof gridHeight === "number") validHeight = true;
  }
  console.log(`Height: ${gridHeight}, Width: ${gridWidth}`);

  //Redraw grid with user's specifications
  for (let i = 1; i <= gridHeight; i++) {
    const newChild = document.createElement("div");
    newChild.classList.add("row");
    gridContainer.appendChild(newChild);
    for (let j = 1; j <= gridWidth; j++) {
      const gridSquare = document.createElement("div");
      newChild.appendChild(gridSquare);

      gridSquare.classList.add("generated");

      squares = document.querySelectorAll(".generated");

      gridContainer.addEventListener("mouseover", function (e) {
        e.target.classList.toggle("magenta-class");
        gridContainer.classList.remove("magenta-class");
        document.querySelectorAll(".row").classList.remove("magenta-class");
      });

      // gridSquare.setAttribute(
      //   "style",
      //   `height:${(window.innerHeight * 100) / gridHeight}`
      // );
      // gridSquare.setAttribute(
      //   "style",
      //   `width:${(window.innerWidth * 100) / gridWidth}`
      // );
      // gridSquare.classList.add("square");
    }
  }

  function clearGrid() {
    for (let square of squares) {
      square.classList.remove("magenta-class");
    }
  }
}

customBtn.addEventListener("click", customizeGrid);

console.log(window.innerHeight);
