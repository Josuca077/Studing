import themeSwitcher from "./themeSwitcher.js"
import calculate from "./calculate.js"
import copyBtn from "./copyBtn.js"
import { keyDown, clearBtn, addKeyFunction } from "./handleKeys.js"

document.querySelectorAll('.calcKey').forEach(addKeyFunction)

document.getElementById('clear').addEventListener('click', clearBtn)

document.getElementById('input').addEventListener('keydown', keyDown)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyBtn').addEventListener('click', copyBtn)

document.getElementById('themeSwitcherBtn').addEventListener('click', themeSwitcher)