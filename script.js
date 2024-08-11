const container = document.getElementById("container");

function getGridSize(squaresInput = 16) {
  const numberOfSquares = squaresInput * squaresInput;
  const flexBasisPercent = 100 / squaresInput;
  console.log(flexBasisPercent); 
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
  listener.style.backgroundColor = "red";
};

getGridSize();