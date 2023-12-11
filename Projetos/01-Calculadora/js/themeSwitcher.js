const main = document.querySelector('main')
const root = document.querySelector(':root')


function themeSwitcher() {
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--number-color', '#1b773e')
        root.style.setProperty('--function-color', '#4dff91')

        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--number-color', '#4dff91')
        root.style.setProperty('--function-color', '#1b773e')

        main.dataset.theme = 'dark'
    }
}

export default themeSwitcher 