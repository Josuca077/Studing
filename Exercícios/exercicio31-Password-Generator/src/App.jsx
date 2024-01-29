import { useState } from 'react'

import useCopyBtn from './hooks/useCopyBtn'
import useGenerator from './hooks/useGenerator'

import Input from './components/Input'

import './Styles/App.css'

function App() {
  const generator = useGenerator()
  const copyBtn = useCopyBtn()
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  function generateBtn () {
    generator.generate(passwordSize)
    copyBtn.resetBtn()
  }

  return (
    <>
      <h1>Password Generator</h1>

      <div>
        <label htmlFor="showInput">Customize Lenght: </label>
        <input
        type="checkbox"
        id='showInput'
        value={showInput}
        onChange={()=>{
          setPasswordSize(12)
          setShowInput(show => !show)
        }}
        />
      </div>

      <div>
        {showInput && (

        <>
          <label htmlFor="passwordSize">Password Size:</label>
          <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
        </>

        )}
      </div>

      <div className="card">

        <button className="btn" onClick = {generateBtn}>
          Generate
        </button>

        <button
        className="btn"
        onClick={copyBtn.copy}
        >
          {copyBtn.btnText}
        </button>

        <p>Password:</p>
        <p id='password'>{generator.password}</p>
      </div>
    </>
  )
}

export default App
