let index = 1
function hirePlayer() {

    console.log(index)
    index++

    const form = document.getElementById('form')
    const ul = document.createElement('ul')
    const br = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')

    form.innerHTML = '<h2>Contratando Jogador</h2>'
    ul.id = 'createdForm'

    const positionLi = document.createElement('li')
    positionLi.innerHTML = '<label for="position">Posição: </label>'
    const positionInput = document.createElement('input')
    positionInput.type = ('text')
    positionInput.name = ('position')
    positionInput.id = ('position')
    positionLi.appendChild(positionInput)
    
    const nameLi = document.createElement('li')
    nameLi.innerHTML = '<label for="name">Nome: </label>'
    const nameInput = document.createElement('input')
    nameInput.type = ('text')
    nameInput.name = ('name')
    nameInput.id = ('name')
    nameLi.appendChild(nameInput)

    const numberLi = document.createElement('li')
    numberLi.innerHTML = '<label for="number">Número da Camisa: </label>'
    const numberInput = document.createElement('input')
    numberInput.type = ('text')
    numberInput.name = ('number')
    numberInput.id = ('number')
    numberLi.appendChild(numberInput)


    const button = document.createElement('button')
    button.textContent = 'Escalar Jogador'
    button.addEventListener('click', function(event) {
        
        event.preventDefault()

        const position = positionInput.value
        const name = nameInput.value
        const number = numberInput.value
        const table = document.getElementById('team')
        const newNumber = ('row' + number)

        if (position === '' || name === '' || number === '' || isNaN(number)) {
            alert('Preencha os campos corretamente!')
            return
        }

        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i]

            if (row.id === newNumber) {
                alert('Esse Número de Camisa já está em Uso!')
                return
            }
        }

        if (confirm('Deseja Escalar o Jogador ' + name + 
                    '\nna Posição ' + position + 
                    '\ncom a Camisa de Número ' + number + '?')) {

            submitForm(position, name, number)

        } else {

            const ul = document.getElementById('createdForm')
            const form = document.getElementById('form')
            form.removeChild(ul)
            form.innerHTML = ''

        }
        })

    ul.append(positionLi, br, nameLi, br2, numberLi, br3, button)
    form.appendChild(ul)
}


function firePlayer() {

    const table = document.getElementById('team')
    if (table.rows.length === 1) {
        alert('Não há jogadores para demitir!')
        return
    }


    index--

    const form = document.getElementById('form')
    const removeSelect = document.createElement('select')
    const br = document.createElement('br')

    form.innerHTML = '<label for="removePlayer">Número do Jogador a Ser Demitido:</label><br>'
    removeSelect.name = 'removePlayer'
    removeSelect.id = 'removeplayer'

    for (let i = 0; i < table.rows.length; i++) {

        const row = table.rows[i].id
        const option = document.createElement('option')

        option.value = row.replace('row', '')
        option.innerText = row.replace('row', '')

        removeSelect.appendChild(option)
    }


    const button = document.createElement('button')
    button.textContent = 'Demitir Jogador'
    button.addEventListener('click', function(event) {
        
        event.preventDefault()

        const numberRemove = removeSelect.value
        const table = document.getElementById('team')
        const h2 = document.getElementById('teamTitle')
        const thPosition = document.getElementById('headerPosition')
        const thName = document.getElementById('headerName')
        const thNumber = document.getElementById('headerNumber')

        if (numberRemove === '') {
            alert('Selecione o Número de Uma Camisa!')
            return
        } 

        const nameRow = document.getElementById('row' + numberRemove + 'Name')
        const name = nameRow.textContent

        const positionRow = document.getElementById('row' + numberRemove + 'Position')
        const position = positionRow.textContent

        const numberRow = document.getElementById('row' + numberRemove + 'Number')
        const number = numberRow.textContent

        if (confirm('Deseja Demitir o Jogador ' + name + 
                           '\nNa Posição ' + position + 
                           '\nUsando a Camisa ' + number + '?')) {

            const id = 'row' + numberRemove
            const deleteTr = document.getElementById(id)

            form.removeChild(button)
            form.removeChild(removeSelect)
            form.innerHTML = ''

            table.removeChild(deleteTr)

            if (table.rows.length === 1) {
                form.innerHTML = ''
                thPosition.innerText = ''
                thName.innerText = ''
                thNumber.innerText = ''
                thPosition.style.border = '0px'
                thName.style.border = '0px'
                thNumber.style.border = '0px'
                table.style.border = '0px'
            }

            h2.innerText = ''
            
        } else {
            index++
            return
        }
        })

        form.append(removeSelect, br, button)
}

function submitForm(position, name, number) {

    if (index > 1) {
        const h2 = document.getElementById('teamTitle')
        h2.innerText = 'Time Escalado'

        const headerPosition = document.getElementById('headerPosition')
        const headerName = document.getElementById('headerName')
        const headerNumber = document.getElementById('headerNumber')
        headerPosition.innerText = 'Posição'
        headerName.innerText = 'Jogador'
        headerNumber.innerText = 'Número'

        const table = document.getElementById('team')
        table.style.border = '3px solid black'
        headerPosition.style.border = '1px solid black'
        headerName.style.border = '1px solid black'
        headerNumber.style.border = '1px solid black'
    }

    const table = document.getElementById('team')
    const tr = document.createElement('tr')
    const ul = document.getElementById('createdForm')
    const form = document.getElementById('form')

    tr.id = ('row' + (number))

    const tdPosition = document.createElement('td')
    tdPosition.id = (('row' + (number)) + 'Position')
    tdPosition.innerText = position
    tr.appendChild(tdPosition)

    const tdName = document.createElement('td')
    tdName.id = (('row' + (number)) + 'Name')
    tdName.innerText = name
    tr.appendChild(tdName)

    const tdNumber = document.createElement('td')
    tdNumber.id = (('row' + (number)) + 'Number')
    tdNumber.innerText = number
    tr.appendChild(tdNumber)
    
    table.style.border = '3px solid black'
    tdPosition.style.border = '1px solid black'
    tdName.style.border = '1px solid black'
    tdNumber.style.border = '1px solid black'

    table.appendChild(tr)

    form.removeChild(ul)
    form.innerHTML = ''
}