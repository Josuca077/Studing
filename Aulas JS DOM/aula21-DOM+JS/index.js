function register (element) {

    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert ('Usuário ' + username + ' Cadastrado com Sucesso!')
        console.log({username, password, passwordConfirmation})
    } else {
        alert ('A Senha e a Confirmação de Senha Devem Ser Iguais!')
    }
}