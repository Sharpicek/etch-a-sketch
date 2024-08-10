const container = document.getElementById("container");

function getGridSize(userInput = 16) {
  const numberOfSquares = userInput * userInput;
  for (let i = 0; i < numberOfSquares; i++) {
    const singleSquare = document.createElement("div");
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