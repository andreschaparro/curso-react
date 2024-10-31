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
    // Al pulsar el botón por segunda vez, el atributo key va a tener un valor repetido
    const addTask = () => {
        // Se agrega el nuevo elemento al final del Array con el operador spread de JS
        setArreglo([...arreglo, { id: 9, nombre: "Nuevo", visto: false, repasar: false }])
    }

    // El Array simula la información devuelta por el backend
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
        // Se usa el método map para recorrer el Array y con cada uno de sus elementos crear dinámicamente el componente
        // Se debe pasar el atributo key o identificador único de forma obligatoria para cada elemento del Array
        // El mismo, suele ser un número
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} repasar={item.repasar} ></Item>)}
            </ol >
            <button onClick={addTask}>Agregar una tarea</button>
        </>
    )
}