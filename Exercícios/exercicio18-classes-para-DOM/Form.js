import Component from './Component.js'
import Label from './Label.js'

class Form extends Component {
    constructor(id = null, classList = null, action = null, method = null) {

        super("form", id, classList)
        this.elem = super.sendElem()

        this.elem.action = action
        this.elem.method = method
    }

    createLabel(labelFor, labelText, labelId, labelClassList) {

        const label = new Label(labelFor, labelText, labelId, labelClassList)

        this.elem.appendChild(label.elem)
        return label
    }
}

export default Form