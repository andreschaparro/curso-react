// Declarar las variables fuera de la función que define al componente
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: 'Curso de Javascript', duracion: 8 }
const fecha = new Date()

export const PrimerComponente = () => {
    // Ingresar el código JS dentro de {}
    // React renderiza todos los elementos de un Array sin un espacio que los separe
    // React no renderiza valores booleanos
    // React renderiza el resultado devuelto por una función, pero no su código
    // React no renderiza los objetos de JS de forma directa
    return (
        <>
            <h2>String:</h2>
            <p>{string}</p>

            <h2>Number:</h2>
            <p>{number}</p>

            <h2>Array:</h2>
            <p>{array}</p>

            <h2>Boolean:</h2>
            <p>{boolean}</p>

            <h2>Funcion:</h2>
            <p>{funcion()}</p>
            <p>{funcion}</p>

            <h2>Objeto:</h2>
            <p>{JSON.stringify(objeto)}</p>

            <h2>Fecha:</h2>
            <p>{JSON.stringify(fecha)}</p>
        </>
    )
}
