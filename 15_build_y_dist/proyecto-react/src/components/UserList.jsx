import { useState, useEffect } from "react"

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const UserList = ({ endpoint }) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(baseUrl + endpoint)
            const data = await response.json()
            // El console.log se ejecuta dos veces en desarrollo debido al StrictMode
            // En producción se ejecuta solo una vez
            // Ejecutar npm run build para generar la carpeta dist con los archivos de producción
            // https://react-jsonplaceholder-dist.netlify.app/
            console.log(data)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint])

    return (
        <>
            <ul>
                {endpoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>)
                    : data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    )
}
