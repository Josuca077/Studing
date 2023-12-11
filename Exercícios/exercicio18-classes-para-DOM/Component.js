class Component {
    #elem

    constructor(tag, id = null, classList = null, textContent = null) {
        this.#elem = this.build(tag)
        this.#elem.id = id
        this.#elem.classList.add(classList) 
        this.#elem.textContent = textContent
    }
    build(tag) {
        return document.createElement(tag)
    }
    render(elemFather) {
        elemFather.appendChild(this.#elem)
    }
    getValue() {
        return this.#elem.value
    }
    sendElem() {
        return this.#elem
    }
}

export default Component