import { useState, useMemo } from "react"

export const CalculosPesados = () => {

    const [listaNumeros, setlistaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [reload, setReload] = useState(true)

    const agregarNumero = () => {
        setlistaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
        console.log(listaNumeros)
    }

    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log('Calculando...')
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros])

    return (
        <>
            <h2>Calculo:</h2>
            <p>{getCalculo(listaNumeros)}</p>
            <button className="btn btn-primary" onClick={() => setReload(!reload)}>Reload</button>
            <button className="btn btn-primary" onClick={() => agregarNumero()}>Agregar número</button>
        </>
    )
}