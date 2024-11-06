import { useContext } from "react"
import { useForm } from "../hooks/useForm"
import { UsuarioContext } from "../context/UsuarioContext"

export const LoginScreen = () => {

    // Del contexto UsuarioContext se desestructura únicamente setUsuario para poder modificar el useState
    const { setUsuario } = useContext(UsuarioContext)

    const initialForm = {
        nombre: '',
        tecnologia: '',
        email: '',
        pais: ''
    }

    const { nombre, tecnologia, email, pais, formState, onInputChange } = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
        setUsuario(formState)
    }

    return (
        <>
            <h2>Login</h2>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tecnologia">Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tecnologia"
                        value={tecnologia}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Pais</label>
                    <input
                        type="text"
                        className="form-control"
                        name="pais"
                        value={pais}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar Usuario</button>
            </form>
        </>
    )
}
