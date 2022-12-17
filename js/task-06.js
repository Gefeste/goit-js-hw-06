const inputEl = document.querySelector('#validation-input');
const inputCount = inputEl.dataset.length



inputEl.addEventListener('blur', (event) => {
    if (Number(inputCount) === event.currentTarget.value.length) {
        if (inputEl.classList.contains('invalid') === true) {
              inputEl.classList.remove('invalid')
        }
        
        inputEl.classList.add('valid')
    } else {
        if (inputEl.classList.contains('valid') === true) {
              inputEl.classList.remove('valid')
        }
        
        inputEl.classList.add('invalid')
    }

})
