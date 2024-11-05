// Un custom Hook permite reducir el código del componente
// Se muestra el patrón Atom Design que emplea react

import { useFetchData } from "../hooks/useFetchData"

export const UserList = ({ endpoint }) => {

    // isLoading mejora la experiencia del usuario al mostrar un mensaje mientras se carga la página
    const { data, isLoading } = useFetchData(endpoint)

    return (
        <>
            <ul>
                {isLoading
                    ? <p>Cargando...</p>
                    : endpoint == 'users'
                        ? data.map(item => <li key={item.id}>{item.name}</li>)
                        : data.map(item => <li key={item.id}>{item.body}</li>)
                }
            </ul>
        </>
    )
}
