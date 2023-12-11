const form = document.querySelector('form')

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const bread = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observation = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += ' - ' + item.value + '\n'
    })

    console.log({
        name,
        address,
        bread,
        main,
        salad,
        observation
    })
})