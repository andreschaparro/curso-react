import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const HomeScreen = () => {

    // Ingresar useC y seleccionar useContextSnippet
    // Del contexto UsuarioContext se desestructura únicamente usuario
    const { usuario } = useContext(UsuarioContext)

    return (
        <>
            <h2>Home</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tecnología</th>
                        <th scope="col">Email</th>
                        <th scope="col">País</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{usuario.nombre}</th>
                        <td>{usuario.tecnologia}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.pais}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
