import React from 'react'
// CSS para el componente
import './styles/PrimerComponente.css'

const titulo = 'Título'
const contenido = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure eius et corrupti sapiente ipsa tempora saepe odio eos nostrum, inventore quia in perspiciatis numquam aspernatur fugiat dicta quae soluta!'

export const PrimerComponente = () => {
    return (
        <>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
        </>
    )
}
