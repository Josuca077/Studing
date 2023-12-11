function validateEmail(email) {
    email.replace(/\s/g, '')
    try{
        hasAtSign(email)
        textBeforeAtSign(email)
        dotAtEnd(email)
        textAfterAtSign(email)
        return true
    } catch(error){
        alert(error.message)
        return false
    }
}

function hasAtSign(email) {
    const atSign = email.match(/@/g)
    if(atSign === null) {
        throw new Error('O email deve conter pelo menos um "@" presente')
    } else if (atSign.length > 1) {
        throw new Error('O email deve conter apenas um "@" presente')
    }
}

function textBeforeAtSign(email) {
    const textBAS = email.match(/[\w\d]+(?=@)/)
    if (textBAS === null || textBAS[0].length < 2) {
        throw new Error('O nome de usuário do email deve conter pelo menos 2 caracteres: letras, números ou underScores(_)')
    }
}

function dotAtEnd(email) {
    const dotAE = email.match(/\..+/)
    if (dotAE === null || dotAE[0].length < 3) {
        throw new Error('O domínio do email deve terminar com "." + 2 caracteres: letras, números ou underScores(_)')
    }
}

function textAfterAtSign(email) {
    const textAAS = email.match(/(?<=@)[\w\d]+(?=\.)/)
    if (textAAS === null || textAAS[0].length < 2) {
        throw new Error('O domínio do email deve conter pelo menos 2 caracteres: letras, números ou underScores(_)')
    }
}

function validatePassword(password) {
    password.replace(/\s/g, '')
    try{
        lessThanEightChar(password)
        aUpperCase(password)
        aLowerCase(password)
        aNumber(password)
        aSpecialChar(password)
        return true
    } catch(error){
        alert(error.message)
        return false
    }
}

function lessThanEightChar(password) {
    if (password.length < 8) {
        throw new Error('A senha deve conter pelo menos 8 caracteres')
    }
}

function aUpperCase(password) {
    const upperCase = password.match(/[A-Z]/g)
    if (upperCase === null || upperCase.length === 0) {
        throw new Error('A senha deve conter pelo menos 1 letra maiúscula')
    }
}

function aLowerCase(password) {
    const lowerCase = password.match(/[a-z]/g)
    if (lowerCase === null || lowerCase.length === 0) {
        throw new Error('A senha deve conter pelo menos 1 letra minúscula')
    }
}

function aNumber(password) {
    const number = password.match(/\d/g)
    if (number === null || number.length === 0) {
        throw new Error('A senha deve conter pelo menos 1 número')
    }
}

function aSpecialChar(password) {
    const specialChar = password.match(/[^a-zA-Z0-9\s]/g)
    if (specialChar === null || specialChar.length === 0) {
        throw new Error('A senha deve conter pelo menos 1 caractere especial')
    }
}

const button = document.getElementById('submitBtn')

button.addEventListener('click', function(ev){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    
    const validEmail = validateEmail(email)
    const validPassword = validatePassword(password)

    if(email !== '' && password !== '' && name !== ''){
        ev.preventDefault()
        if(validEmail && validPassword) {
            document.querySelector('form').submit()
        }
    }

})
