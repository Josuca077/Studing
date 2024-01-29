import { useState } from 'react'

function getInitialValue () {
    console.log("ola")
    return (1+1)
}

export default function useCount () {
    const [count, setCount] = useState(getInitialValue)

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return { count, increment, decrement }
}