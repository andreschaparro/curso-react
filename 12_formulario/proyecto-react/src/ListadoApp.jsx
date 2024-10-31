import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Item = ({ nombre, visto, repasar }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            {repasar && '🔄'}
        </li>
    )
}

export const ListadoApp = () => {

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
            <AgregarTarea></AgregarTarea>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
        </>
    )
}