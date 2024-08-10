const container = document.getElementById("container");
let arrayBox = [];

for (let i = 0; i < 256; i++) {
  const singleBox = document.createElement("div");
  singleBox.classList.add("inner-box", "box" + (i + 1));  
  arrayBox.push(singleBox); // maybe I will need and array of the boxes
  container.appendChild(singleBox);
}

