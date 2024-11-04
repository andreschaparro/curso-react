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
            <AgregarTarea></AgregarTarea>
            <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
        </>
    )
}