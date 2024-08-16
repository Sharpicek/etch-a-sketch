const container = document.getElementById("container");
const setSizeButton = document.getElementById("set-size");
let shadesOfGrayArray = [];
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
    shadesOfGrayArray.pop();
  }

  previousGridSize = numberOfSquares;
  const flexBasisPercent = 100 / squaresInput;

  for (let i = 0; i < numberOfSquares; i++) {
    shadesOfGrayArray.push(0.1);
    const singleSquare = document.createElement("div");
    singleSquare.setAttribute("style", `flex-basis: ${flexBasisPercent}%`);
    singleSquare.classList.add("inner-box");
    singleSquare.setAttribute("id", `${i + 1}`);
    singleSquare.addEventListener("mouseover", () => {
      coloring(singleSquare);
    });
    container.appendChild(singleSquare);
  }
}

function coloring(listener) {
  const recoloringCheckbox = document.getElementById("recoloring").checked;
  const colorScheme = document.getElementById("color-scheme").value;
  const isGrey = listener.classList.value.slice(-4) == "grey" ? true : false;
  if (listener.style.backgroundColor !== "" && !recoloringCheckbox && (!isGrey || colorScheme !== "2")) {
    return;
  }
  switch (parseInt(colorScheme)) {
    case 1:
      getOrange(listener);
      break;
    case 2:
      getFiftyShadesOfGray(listener);
      break;
    case 3:
      getRandomColor(listener);
      break;
    case 4:
      getRainbow(listener);
      break;
  }
}

function getOrange(listener) {
  listener.classList.remove("grey");
  listener.style.backgroundColor = "orange";
}

function getFiftyShadesOfGray(listener) {
  const arrayIndex = listener.getAttribute("id");
  listener.classList.add("grey");
  let alpha = shadesOfGrayArray[arrayIndex]; 
  listener.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
  alpha = alpha + 0.1;
  if (alpha <= 1) shadesOfGrayArray.splice(arrayIndex, 1, alpha);
}

function getRandomColor(listener) {
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);
  listener.classList.remove("grey");
  listener.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function getRainbow(listener) {
  const rainbow = ["#E81416", "#FFA500", "#FAEB36", "#79C314", "#487DE7", "#4B369D", "#70369D"];
  listener.classList.remove("grey");
  listener.style.backgroundColor = rainbow[rainbowCounter];
  rainbowCounter == 6 ? rainbowCounter = 0 : rainbowCounter++;
}

getGridSize();
