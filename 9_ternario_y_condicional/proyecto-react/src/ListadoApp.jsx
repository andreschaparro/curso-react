const Items = ({ nombre, visto, repasar }) => {
    // Presionar WIN + . para ingresar un icono en Visual Studio Code
    // El operador ternario ? permite renderizar una cosa u otra
    // El operador condicional && permite renderizar una cosa o nada
    return (
        <li>{nombre}
            {visto ? '✅' : '⛔'}
            {repasar && '🔄'}
        </li>
    )
}

export const ListadoApp = () => {
    return (
        <>
            <h1>Listado de Temas del Curso</h1>
            <ol>
                <Items nombre="Instalaciones necesarias" visto={true} repasar={false}></Items>
                <Items nombre="Uso de Vite" visto={true} repasar={false}></Items>
                <Items nombre="Componentes" visto={true} repasar={false}></Items>
                <Items nombre="Variables en JSX" visto={true} repasar={false}></Items>
                <Items nombre="Props" visto={true} repasar={true}></Items>
                <Items nombre="Eventos" visto={true} repasar={true}></Items>
                <Items nombre="useState" visto={true} repasar={true}></Items>
                <Items nombre="Redux" visto={false} repasar={false}></Items>
                <Items nombre="customHooks" visto={false} repasar={false}></Items>
            </ol>
        </>
    )
}
