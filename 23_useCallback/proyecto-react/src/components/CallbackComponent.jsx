import { useState, useCallback } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0)

    // Ingresar useC y seleccionar useCallbackSnippet
    // useCallback memoriza una función de callback
    const incrementarPadre = useCallback(
        // Esta es la función de callback
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
