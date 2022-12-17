
const form = document.querySelector('.login-form')
console.log(form)

const message = "всі поля повинні бути заповнені"

const userData = {};

form.addEventListener('submit', collectUserData)

function collectUserData(event) {
    event.preventDefault()
    
const {
    elements: { email, password }
} = event.currentTarget;
    
console.log(event.currentTarget)
  if (email.value === "" || password.value === "") {
    return alert(message);
  }

    userData.email = email.value;
    userData.password = password.value;
    console.log(userData)

   form.reset()
}
















