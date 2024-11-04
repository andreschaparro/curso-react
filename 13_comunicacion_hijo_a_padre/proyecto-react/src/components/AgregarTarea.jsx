import { useState } from "react"

// Se recibe una función del padre a través de una prop
export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        // La función recibida le envía el contenido del input al padre
        agregarTarea(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresá una tarea nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
