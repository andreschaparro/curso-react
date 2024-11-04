import { useState } from "react"

const Item = ({ nombre, visto, repasar }) => {
    // En JSX se utiliza className en lugar de class de HTML
    return (
        <li className="seagreen">{nombre}
            {visto ? '✅' : '⛔'}
            {repasar && '🔄'}
        </li>
    )
}

export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: "Nuevo", visto: false, repasar: false }])
    }

    let listadoSecciones = [
        { nombre: "Instalaciones necesarias", visto: true, repasar: false },
        { nombre: "Uso de Vite", visto: true, repasar: false },
        { nombre: "Componentes", visto: true, repasar: false },
        { nombre: "Variables en JSX", visto: true, repasar: false },
        { nombre: "Props", visto: true, repasar: true },
        { nombre: "Eventos", visto: true, repasar: true },
        { nombre: "useState", visto: true, repasar: true },
        { nombre: "Redux", visto: false, repasar: false },
        { nombre: "customHooks", visto: false, repasar: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
            <button onClick={addTask}>Agregar una tarea</button>
        </>
    )
}