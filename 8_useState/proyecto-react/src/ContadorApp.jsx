// useState es un Hook de React
// Crea una variable para alamacenar el estado de uno o más elementos del componente
// Al modificarla se actualizarán los mismos y no todo el componente
import { useState } from "react"

export const ContadorApp = ({ value }) => {

    // Se crea la variable
    // Se indica el nombre de la función para modificarla
    // Se le asigna el valor por defecto
    const [contador, setContador] = useState(value)

    const handleClick = (event) => {
        // Se llama a la función para modificarla
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador:</h1>
            <p>{contador}</p>
            <button onClick={handleClick}>
                Soy un boton
            </button>
        </>
    )
}