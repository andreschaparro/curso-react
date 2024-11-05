import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
    const { counter, increment, reset, decrement } = useCounter(5)
    // Se utilizan las clases de bootstrap con className
    return (
        <>
            <h2>Contador: {counter}</h2>
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(3, false)}>-3</button>
        </>
    )
}