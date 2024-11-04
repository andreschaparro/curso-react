// Usamos https://jsonplaceholder.typicode.com

import { useState } from "react"
import { UserList } from "./components/UserList"

export const UsersApp = () => {

    const [endpoint, setEndpoint] = useState('users')

    const handleFetch = () => {
        setEndpoint('comments')
    }

    return (
        <>
            <h1>Lista de usuarios:</h1>
            <UserList endpoint={endpoint}></UserList>
            <button onClick={handleFetch}>Aquí se llama a la API</button>
        </>
    )
}
