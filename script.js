const container = document.getElementById("container");
const setSizeButton = document.getElementById("set-size");
let previousGridSize = 0;

setSizeButton.onclick = () => {
    const setSizeValue = document.getElementById("grid-size").value;
    getGridSize(setSizeValue);
    console.log(setSizeValue);
};

function getGridSize(squaresInput = 16) {
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
}

function coloring(listener) {
  listener.style.backgroundColor = "red";
}
getGridSize();