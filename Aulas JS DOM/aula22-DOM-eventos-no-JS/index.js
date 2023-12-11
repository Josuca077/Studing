function register(ev) {

    const sectionElement = ev.currentTarget.parentNode
    console.log(ev)
    console.log(ev.currentTarget)
    console.log(sectionElement)
    console.log(sectionElement.children)
    console.log(sectionElement.children.username)
    console.log(sectionElement.children.username.value)
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    console.log(password + '\n' + passwordConfirmation)

    if (password === passwordConfirmation) {
        alert ('Usuário ' + username + ' cadastrado!')
    } else {
        alert('As senhas não batem!')
    }

}

function removeEvent() {
    button.removeEventListener('click', register)

}

const button = document.getElementById('register-button')
button.addEventListener('click', register)

button.addEventListener('mouseover', function(ev) {
    console.log(ev.currentTarget)
})