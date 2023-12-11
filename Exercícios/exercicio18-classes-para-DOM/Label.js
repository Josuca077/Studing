import Component from './Component.js'
import Input from './Input.js'

class Label extends Component {
    constructor(labelFor = null, textContent = null, id = null, classList = null) {

        super("label", id, classList, textContent)
        this.elem = super.sendElem()

        this.elem.htmlFor = labelFor
    }

    createInput(type, name, value, placeholder, required, disabled, imputClassList, textContent) {

        const input = new Input(type, name, value, placeholder, required, disabled, this.elem.htmlFor, imputClassList, textContent)

        this.elem.parentNode.appendChild(input.elem)
        return input
    }
}

export default Label