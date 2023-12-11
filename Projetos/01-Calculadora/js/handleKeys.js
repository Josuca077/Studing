const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function keyDown (ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}

function clearBtn() {
    input.value = ''
    resultInput.value = ''
    resultInput.classList.remove('error')
    input.focus()
}

function addKeyFunction (calcKeyBtn) {
    calcKeyBtn.addEventListener('click', function() {
        const value = calcKeyBtn.dataset.value
        input.value += value
    })
}

export {keyDown, clearBtn, addKeyFunction}