const resultInput = document.getElementById('result')

function copyBtn (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
        setTimeout(function() {
            button.innerText = 'Copy'
            button.classList.remove('success')
        }, 1000)
    }
}

export default copyBtn