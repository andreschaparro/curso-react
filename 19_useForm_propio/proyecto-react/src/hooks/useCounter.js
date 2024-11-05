import { useState } from "react"

// En caso de que no se pase valorInicial se utiliza el valor por defecto 0
export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const decrement = (value = 1, negative = false) => {
        if (!negative && (counter - value) < 0) {
            setCounter(0)
            return
        }
        setCounter(counter - value)
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}