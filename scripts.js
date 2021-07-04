let container = document.querySelector(".container");
let color = "red";
let rows = 4;

let square = {
  width: 100,
  height: 25,
  delay: 0.5,
};

function squareCreate() {
  container.innerHTML = ``;
  for (let s = 1; s <= rows; s++) {
    container.innerHTML += `<div class="square square-${s}" style="background-color: ${color};animation: drop 6s;animation-delay:${
      square.delay * s - 0.5
    }s;height: ${square.height}vh; width: ${square.width}vw;"></div>`;
  }
}

function change() {
  container.style.background = color;
  colorChanger();
  squareCreate();
  setTimeout(change, 6001);
}

change();

function colorChanger() {
  if (color === "red") {
    color = "orange";
  } else if (color === "orange") {
    color = "yellow";
  } else if (color === "yellow") {
    color = "green";
  } else if (color === "green") {
    color = "blue";
  } else if (color === "blue") {
    color = "indigo";
  } else if (color === "indigo") {
    color = "violet";
  } else if (color === "violet") {
    color = "green";
  }
}
