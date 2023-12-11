import Component from './Component.js'
import Label from './Label.js'

class Input extends Component {
    constructor(type = "text", name = null, value = null, placeholder = null, required = false, disabled = false, id = null, classList = null, textContent = null) {

        super("input", id, classList, textContent)
        this.elem = super.sendElem()

        this.elem.type = type
        this.elem.name = name
        this.elem.placeholder = placeholder
        this.elem.required = required
        this.elem.disabled = disabled
        this.elem.value = value
    }
    createLabel(labelText, labelId, labelClassList) {
        return new Label(this.elem.id, labelText, labelId, labelClassList)
    }
}

export default Input