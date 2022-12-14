const inputEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputEl.addEventListener('input', (event) => {
    const font = event.currentTarget.value;
    text.style.fontSize = `${font}px`
})
