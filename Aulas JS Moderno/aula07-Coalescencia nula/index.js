let a = 0 // 0 equivale a verdadeiro

let d = false

let b = a || d // || operador lógico de OU (procura um valor verdadeiro da esquerda para direita)

console.log({ a, b })

b = a ?? 42 // ?? operador lógico de OU (procura um valor diferente de null ou undefined da esquerda para direita)

console.log({a, b})

let c = false ?? 42

console.log({c})