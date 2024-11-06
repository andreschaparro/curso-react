import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({ children }) => {

    // UsuarioProvider provee un objeto a través del contexto UsuarioContext
    // El objeto va a contener el valor y la función de actualización de un useState
    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}
