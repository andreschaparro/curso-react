// Se utiliza un archivo JS y no un JSX para crear un custom Hook porque no va a contener código HTML
// Dentro del custom Hook se utilizan los Hooks de react y se delega la lógica del componente a los helpers

import { useState, useEffect } from "react"
import { fetchData } from "../helpers/fetchData"

// No es necesario desestructurar endpoint porque no se recibe como un objeto
export const useFetchData = (endpoint) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        // fetchData es una función asincróna
        // Para hacer la desestructuración de la respuesta con await, se la debe colocar dentro de otra función asincróna 
        const { data, isLoading } = await fetchData(endpoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return {
        data,
        isLoading,
    }
}
