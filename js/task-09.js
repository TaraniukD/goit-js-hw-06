function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0) }`;
}

const colorButtonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
console.log(colorButtonEl)

function changeBackground(color) {
  document.body.style.background = getRandomHexColor();
  spanEl.textContent = document.body.style.background

}
colorButtonEl.addEventListener('click', changeBackground)

