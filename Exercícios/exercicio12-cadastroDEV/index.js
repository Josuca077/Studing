index = 0

const buttonNewTech = document.getElementById('newTech')
buttonNewTech.addEventListener('click', newTech)

function newTech (ev) {
    ev.preventDefault()
    index++

    const form = ev.currentTarget.parentNode

    const techLabel = document.createElement('label')
    const techInput = document.createElement('input')
    const timeLabel = document.createElement('label')
    const timeLabel1 = document.createElement('label')
    const timeLabel2 = document.createElement('label')
    const timeLabel3 = document.createElement('label')
    const timeInput1 = document.createElement('input')
    const timeInput2 = document.createElement('input')
    const timeInput3 = document.createElement('input')
    const button = document.createElement('button')
    const removeButton = document.createElement('button')
    const hr = document.createElement('hr')
    const br = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')
    const br6 = document.createElement('br')

    techLabel.innerText = 'Tecnologia:'
    techLabel.htmlFor = 'tech' + index
    techLabel.className = 'techlabel'

    techInput.type = 'text'
    techInput.id = 'tech' + index
    techInput.name = 'tech'

    timeLabel.innerText = 'Tempo de Atividade:'
    timeLabel.className = 'timelabel'

    timeInput1.type = 'radio'
    timeInput1.name = 'time' + index
    timeInput1.id ='time' + index + 'jr'
    timeInput1.value = '0-2 Anos'

    timeLabel1.htmlFor ='time' + index + 'jr'
    timeLabel1.innerText = '0-2 Anos   '
    timeLabel1.className = 'timelabel'

    timeInput2.type = 'radio'
    timeInput2.name = 'time' + index
    timeInput2.id ='time' + index + 'pl'
    timeInput2.value = '3-4 Anos'

    timeLabel2.htmlFor ='time' + index + 'pl'
    timeLabel2.innerText = '3-4 Anos   '
    timeLabel2.className = 'timelabel'

    timeInput3.type = 'radio'
    timeInput3.name = 'time' + index
    timeInput3.id ='time' + index + 'sr'
    timeInput3.value = '5+ Anos'

    timeLabel3.htmlFor ='time' + index + 'sr'
    timeLabel3.innerText = '5+ Anos   '
    timeLabel3.className = 'timelabel'

    removeButton.innerText = 'Remover Tecnologia'
    removeButton.id = 'removeTech' + index
    removeButton.addEventListener('click', removeTech)
    removeButton.name = 'removeButton'

    button.innerText = 'Cadastrar'
    button.id = 'techButton' + index
    button.addEventListener('click', register)

    if (index > 1) {
        form.removeChild(document.getElementById('techButton' + (index - 1)))
        form.removeChild(document.querySelector('hr'))
    }

    form.append(techLabel, br, techInput, br2, timeLabel, br3, timeInput1, timeLabel1, timeInput2, timeLabel2, timeInput3, timeLabel3, br4, removeButton, br5, br6, hr, button)
}

function register(ev) {
    ev.preventDefault()

    const form = ev.currentTarget.parentNode

    const inputs = document.querySelectorAll('input[name="tech"]')
    const labels = document.querySelectorAll('label[class="techlabel"]')
    const labels2 = document.querySelectorAll('label[class="timelabel"]')
    const radios = document.querySelectorAll('input[type="radio"]')
    const brs = document.querySelectorAll('br')
    const name = form.children.name.value
    const tech = document.querySelectorAll('input[name="tech"]')
    const time = document.querySelectorAll('input[type="radio"]:checked')
    const buttons = document.querySelectorAll('button[name="removeButton"]')
    let techs = ''
    for (let i = 0; i < tech.length; i++) {
        if(tech[i].value === '' || time[i] === undefined || name === '') {
            alert('Preencha todos os campos')
            return
        }
        techs += '- ' + tech[i].value + ' - ' + time[i].value + '\n'
    }
    for (let i = 0; i < inputs.length; i++) {
        form.removeChild(inputs[i])
        form.removeChild(labels[i])
        form.removeChild(buttons[i])
    }
    for (let i = 3; i < brs.length; i++) {
        form.removeChild(brs[i])
    }
    for (let i = 0; i < radios.length; i++) {
        form.removeChild(radios[i])
    }
    for (let i = 0; i < labels2.length; i++) {
        form.removeChild(labels2[i])
    }

    form.removeChild(document.getElementById('techButton' + index))
    form.removeChild(document.querySelector('hr'))

    index = 0
    console.log(name, '\n', techs)
}

function removeTech(ev) {
    ev.preventDefault()

    const form = ev.currentTarget.parentNode

    const buttonIndex = ev.currentTarget.id[ev.currentTarget.id.length - 1]
    const labelId = ('tech' + buttonIndex)
    const label = document.querySelector('label[for = "' + labelId + '"]')
    const inputId = labelId
    const input = document.querySelector('input[id = "' + inputId + '"]')
    const timeLabel = document.querySelectorAll('label[class = "timelabel"]')
    const radiosName = ('time' + buttonIndex)
    const radios = document.querySelectorAll('input[name = "' + radiosName + '"]')
    
    form.removeChild(label)
    form.removeChild(input)
    for (let i = 0; i < timeLabel.length; i++) {
        form.removeChild(timeLabel[i])
    }
    for (let i = 0; i < radios.length; i++) {
        form.removeChild(radios[i])
    }
    form.removeChild(ev.currentTarget)
}