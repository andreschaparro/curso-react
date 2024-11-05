import React from "react"

// React.memo evita que se redibuje el button porque la función de callback recibida esta memorizada
export const Incrementar = React.memo(({ incrementar }) => {
    console.log('Me estoy redibujando')
    return (
        <>
            <button className="btn btn-primary" onClick={() => incrementar(10)}>+10</button>
        </>
    )
})