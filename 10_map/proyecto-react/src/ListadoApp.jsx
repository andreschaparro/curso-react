import { useState } from "react"

const Item = ({ nombre, visto, repasar }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            {repasar && '🔄'}
        </li>
    )
}

export const ListadoApp = () => {

    // La siguiente función solo funciona una vez
    // Al pulsar el botón por segunda vez, la propiedad key va a tener un valor repetido
    const addTask = () => {
        // Se agrega el nuevo elemento al final del Array con el operador spread de JS
        setArreglo([...arreglo, { nombre: "Nuevo", visto: false, repasar: false }])
    }

    // El Array simula la información devuelta por el backend
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
        // Se usa el método map para recorrer el Array y con cada uno de sus elementos crear dinámicamente el componente
        // Se debe pasar la propiedad key o identificador único de forma obligatoria para cada elemento del Array
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
            <button onClick={addTask}>Agregar una tarea</button>
        </>
    )
}