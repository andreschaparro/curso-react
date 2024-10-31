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
        setArreglo([...arreglo, { id: 9, nombre: "Nuevo", visto: false, repasar: false }])
    }

    let listadoSecciones = [
        { id: 0, nombre: "Instalaciones necesarias", visto: true, repasar: false },
        { id: 1, nombre: "Uso de Vite", visto: true, repasar: false },
        { id: 2, nombre: "Componentes", visto: true, repasar: false },
        { id: 3, nombre: "Variables en JSX", visto: true, repasar: false },
        { id: 4, nombre: "Props", visto: true, repasar: true },
        { id: 5, nombre: "Eventos", visto: true, repasar: true },
        { id: 6, nombre: "useState", visto: true, repasar: true },
        { id: 7, nombre: "Redux", visto: false, repasar: false },
        { id: 8, nombre: "customHooks", visto: false, repasar: false },
    ]

    const [arreglo, setArreglo] = useState(listadoSecciones)

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
            <button onClick={addTask}>Agregar una tarea</button>
        </>
    )
}