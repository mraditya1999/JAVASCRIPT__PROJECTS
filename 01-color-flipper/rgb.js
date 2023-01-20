const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let red = getRandomNumber();
  let green = getRandomNumber();
  let blue = getRandomNumber();

    rgbColor = `rgb(${red},${green},${blue})`

  color.textContent = rgbColor;
  document.body.style.backgroundColor = rgbColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
