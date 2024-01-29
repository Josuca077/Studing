import { useState } from "react"

function generatePassword (passwordSize) {
    const characteres = [
        // Letras maiúsculas
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        // Letras minúsculas
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        // Números
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        // Caracteres especiais
        "!", "#", "$", "%", "&", "*", "+", "-", "?", "@", "_"
      ]

    const password = []

      for (let i = 0; i < passwordSize; i++) {
        password.push(characteres[Math.floor(Math.random() * 73)])
      }

    return password.join("")
}

export default function useGenerator () {
    const [password, setPassword] = useState()

    const generate = (passwordSize) => {
        setPassword(generatePassword(passwordSize))
    }

    return { password, generate }
}