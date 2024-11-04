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

    // La propiedad key debe ser númerica
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

    const onAgregarTarea = (val) => {
        // Eliminamos espacios en blanco al principio y final
        const value = val.trim()

        // Si no se ingresó ningúna tarea, no se agrega una línea vacía a la lista desordenada
        if (value < 1) return

        // Se garantiza que la clave id tenga un valor númerico incremental y único
        const envio = {
            id: arreglo.length,
            nombre: value,
            visto: false,
            repasar: false,
        }
        setArreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
        </>
    )
}