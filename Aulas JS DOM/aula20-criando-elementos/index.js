let x = Number()
function addInput () {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')    
    newLi.className = 'newImputLi'

    const newLabel = document.createElement('label')
    newLabel.setAttribute('for', ('newInput' + x))
    newLabel.className = 'newInputLabel'
    newLabel.innerText = 'Input Novo: '


    const newInput = document.createElement('input')
    newInput.id = ('newInput' + x)
    newInput.type = 'radio'
    newInput.name = 'newInput'

    newLi.appendChild(newLabel)
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
    x++
}
