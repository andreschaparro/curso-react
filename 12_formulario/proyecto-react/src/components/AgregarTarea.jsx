import { useState } from "react"

export const AgregarTarea = () => {

    const [inputValue, setInputValue] = useState('')

    // Este evento detecta cuando cambia el contenido del input
    const onInputChange = (event) => {
        // En event.target.value se obtiene el contenido del input para actualizar el Hook
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        // Evita que se recargue la página al presionar ENTER luego de completar el input
        event.preventDefault()
        console.log(inputValue)
    }

    return (
        // Cuando se actualiza el Hook, se refrezca el contenido que muestra el input
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
