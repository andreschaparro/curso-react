import { useState } from "react"

// Se pasa la función setArreglo del padre como una prop llamada agregarTarea al hijo
export const AgregarTarea = ({ agregarTarea }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        const envio = {
            id: 9,
            nombre: inputValue,
            visto: false,
            repasar: false,
        }
        event.preventDefault()
        // Junto con la función se pasa el Array del Hook del padre de forma implícita
        agregarTarea(tareas => [...tareas, envio])
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
