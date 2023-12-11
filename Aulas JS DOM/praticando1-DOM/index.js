let x = 1
function addContact() {
    const contactSection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    const ul = document.createElement('ul')
    const hr = document.createElement('hr')
    const br = document.createElement('br')
    const br2 = document.createElement('br')

    h3.innerText = 'Contato: ' + x

    const nameLi = document.createElement('li')
    nameLi.innerHTML = '<label for="name' + x + '">Nome: </label>'
    const nameImput = document.createElement('input')
    nameImput.type = 'text'
    nameImput.name = 'name' + x
    nameImput.id = 'name' + x
    nameLi.appendChild(nameImput)


    const phoneLi = document.createElement('li')
    phoneLi.innerHTML = '<label for="phone' + x + '">Telefone: </label>'
    const phoneImput = document.createElement('input')
    phoneImput.type = 'text'
    phoneImput.name = 'phone' + x
    phoneImput.id = 'phone' + x
    phoneLi.appendChild(phoneImput)


    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address' + x + '">Endereço: </label>'
    const addressImput = document.createElement('input')
    addressImput.type = 'text'
    addressImput.name = 'address' + x
    addressImput.id = 'address' + x
    addressLi.appendChild(addressImput)


    ul.append(nameLi, br, phoneLi, br2, addressLi, hr)
    contactSection.append(h3, ul)
    x++
}

function removeContact() {
    if (x === 1){
        return
    }
    const contactSection = document.getElementById('contact-list')

    const title = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(title[title.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
    x--
}