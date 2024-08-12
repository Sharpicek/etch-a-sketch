const container = document.getElementById("container");
const setSizeButton = document.getElementById("set-size");
let previousGridSize = 0;
let rainbowCounter = 0;

setSizeButton.onclick = () => {
  const setSizeValue = document.getElementById("grid-size").value;
  getGridSize(setSizeValue);
};

const resetGridByPressingEnter = (document.getElementById(
  "grid-size"
).onkeydown = (event) => {
  if (event.key === "Enter") {
    getGridSize(document.getElementById("grid-size").value);
  }
});

function getGridSize(squaresInput = 16) {
  if (parseInt(squaresInput) === NaN || squaresInput <= 0) {
    squaresInput = 16;
  } else if (squaresInput > 100) {
    squaresInput = 100;
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
}

function coloring(listener) {
  let recoloringCheckbox = document.getElementById("recoloring").checked;
  if ((listener.style.backgroundColor !== "") && !recoloringCheckbox) {
    return;
  }
  let colorScheme = document.getElementById("color-scheme").value;
  switch (parseInt(colorScheme)) {
    case 1:
      listener.style.backgroundColor = "orange";
      break;
    case 2:
      listener.style.backgroundColor = "grey";
      listener.classList.add = "grey";
      break;
    case 3:
      let randomRed = Math.floor(Math.random() * 255);
      let randomGreen = Math.floor(Math.random() * 255);
      let randomBlue = Math.floor(Math.random() * 255);
      listener.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      break;
    case 4:
      const rainbow = ["#E81416", "#FFA500", "#FAEB36", "#79C314", "#487DE7", "#4B369D", "#70369D"];
      listener.style.backgroundColor = rainbow[rainbowCounter];
      rainbowCounter == 6 ? rainbowCounter = 0 : rainbowCounter++;
      break;
  }
}
getGridSize();
