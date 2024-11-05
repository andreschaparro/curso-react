import { useState, useMemo } from "react"

export const CalculosPesados = () => {

    const [listaNumeros, setlistaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [reload, setReload] = useState(true)

    const agregarNumero = () => {
        setlistaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
        console.log(listaNumeros)
    }

    // getCalculo simula una función costosa en términos de tiempo y recursos
    // Cada vez que se presiona el primer button se redibuja el componente completo y vuelve a ejecutarse getCalculo de forma innecesaria
    // Ingresar useM y seleccionar useMemoSnippet
    // useMemo evita que se vuelva a ejecutar getCalculo si no se modificó listaNumeros
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