
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body')
const button = document.querySelector('.change-color')
const textColor = document.querySelector('.color')

button.addEventListener('click', changeBodyColor)

function changeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();

  textColor.textContent = bodyEl.style.backgroundColor
}