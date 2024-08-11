const container = document.getElementById("container");
const setSizeButton = document.getElementById("set-size");

let previousGridSize = 0;

setSizeButton.onclick = () => {
  const setSizeValue = document.getElementById("grid-size").value;
  getGridSize(setSizeValue);
  console.log(setSizeValue);
};

function getGridSize(squaresInput = 16) {
  if (parseInt(squaresInput) === NaN || squaresInput <= 0) {
    squaresInput = 16;
    alert("Wrong size! I'll set the grid for you to 16x16");
  } else if (squaresInput > 100) {
    squaresInput = 100;
    alert("Value is too big! I'll set the grid for you to maximum size (100x100).");
  }
  const numberOfSquares = squaresInput * squaresInput;

  for (let i = 0; i < previousGridSize; i++) {
    const singleSquare = document.querySelector(".inner-box");
    container.removeChild(singleSquare);
  }

  previousGridSize = numberOfSquares;
  const flexBasisPercent = 100 / squaresInput;

  for (let i = 0; i < numberOfSquares; i++) {
    const singleSquare = document.createElement("div");
    singleSquare.setAttribute("style", `flex-basis: ${flexBasisPercent}%`);
    singleSquare.classList.add("inner-box", "box" + (i + 1));
    singleSquare.addEventListener("mouseover", () => {
      coloring(singleSquare);
    });
    container.appendChild(singleSquare);
  }
};

function coloring(listener) {
  let recoloringCheckbox = document.getElementById("recoloring").checked;
  if (listener.style.backgroundColor !== "" && !recoloringCheckbox) {
    return;
  }
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);
  listener.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}
getGridSize();
