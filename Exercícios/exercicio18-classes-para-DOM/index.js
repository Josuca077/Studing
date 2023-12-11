import Component from './Component.js'
import Form from "./Form.js"

const body = document.querySelector('body')

const newForm = new Form("form1", "classeForm", "bla", "bla")

const newLabel = newForm.createLabel("label1", "labelText", "labelId", "labelClass")

const newInput = newLabel.createInput("text", "inputName", "inputValue", "inputPlaceholder", true, false, "inputClassList")

const newButton = new Component("button", "buttonId", "buttonClass", "botão")

const newBr = new Component("br")

newForm.elem.appendChild(newBr.sendElem())
newForm.elem.appendChild(newButton.sendElem())

newForm.render(body)
