// Los eventos nos permiten reaccionar ante las acciones del usuario
// https://react.dev/learn/responding-to-events
// https://es.legacy.reactjs.org/docs/events.html
export const ContadorApp = ({ value }) => {

    const handleClick = (event) => {
        console.log(event)
    }

    return (
        <>
            <h1>Contador:</h1>
            <p>{value}</p>
            <button onClick={handleClick}>
                Soy un boton
            </button>
        </>
    )
}