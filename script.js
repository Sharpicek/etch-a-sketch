const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const singleBox = document.createElement("div");
  singleBox.classList.add("inner-box", "box" + (i + 1));
  singleBox.addEventListener("mouseover", (event) => {
    singleBox.style.backgroundColor = "red";
  });
  container.appendChild(singleBox);
}