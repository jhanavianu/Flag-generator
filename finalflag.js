const rects = document.querySelectorAll(".rect");
const flag = document.getElementById("flag");

flag.addEventListener("click", function() {
  rects.forEach(rect => {
    rect.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
  });});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;}



