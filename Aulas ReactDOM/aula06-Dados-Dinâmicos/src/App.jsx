function sum (a, b) {
  return a+b
}

function App () {
  const tech = "react"
  const status = true

  return (
    <div>
        <h1>Dados dinâmicos</h1>
        <h2>{tech} é legal</h2>
        <p>só mostra variáveis com valores que podem ser transformados em string</p>
        <p>true e false não aparecem: {status}</p>
        <p>Condicionais com operador ternário funciona: {status ? "ON" : "OFF"} </p>
        <p>Pode receber funções: 1 + 1 = {sum(1, 2)}</p>
        <p>Operadores Lógicos também funcionam: {true && "true"}</p>
    </div>
  )
}


export default App
