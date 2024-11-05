import { useState, useCallback } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (value) => { setCounter(localCounter => localCounter + value) },
        []
    )

    return (
        <>
            <h2>Contador: {counter}</h2>
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}
