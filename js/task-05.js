const inputEl = document.querySelector('#name-input');
console.log(inputEl.textContent)
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput)

function onInput(event) {
outputEl.textContent = event.currentTarget.value

    if (outputEl.textContent === "") {
        return outputEl.textContent = "Anonymous";
    }
}
