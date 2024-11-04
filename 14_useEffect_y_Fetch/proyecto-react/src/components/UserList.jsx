import { useState, useEffect } from "react"

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const UserList = ({ endpoint }) => {

    const [data, setData] = useState([])

    // La función de flecha debe ser del tipo async para poder utilizar await
    const fetchData = async () => {
        try {
            const response = await fetch(baseUrl + endpoint)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    // El Hook useEffect permite que algo se ejecute al cargar la página y que vuelva a ejecutarse solo si se modifica un elemento del Array de dependencias 
    useEffect(() => {
        fetchData()
    }, [endpoint])

    return (
        // Se muestra un contenido para el endpoint users y otro para comments
        <>
            <ul>
                {endpoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                    : data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    )
}
